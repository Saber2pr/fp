/*
 * @Author: saber2pr
 * @Date: 2019-06-19 20:28:08
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-19 22:29:38
 */
export const async_reduce = async <T, R>(
  items: T[],
  reducer: (receiver: R, value: T) => Promise<R>,
  initValue: R
) => {
  for (const item of items) initValue = await reducer(initValue, item)
  return initValue
}

export const async_reduceRight = async <T, R>(
  items: T[],
  reducer: (receiver: R, value: T) => Promise<R>,
  initValue: R
) => {
  for (const item of items.reverse()) initValue = await reducer(initValue, item)
  return initValue
}

export const async_compose = <T>(...fns: ((value: T) => Promise<T>)[]) => (
  value: T
) => async_reduceRight(fns, (a, b) => b(a), value)

export const async_pipe = <T>(...fns: ((value: T) => Promise<T>)[]) => (
  value: T
) => async_reduce(fns, (a, b) => b(a), value)

export const async_setter = async <T, K extends keyof T>(
  target: T,
  ...props: [K, Promise<T[K]>][]
): Promise<T> =>
  Object.assign(
    {},
    target,
    ...(await Promise.all(props.map(async ([k, v]) => ({ [k]: await v }))))
  )

export const async_forEach = <T, R = void>(
  items: T[],
  callbackFn: (value: T, index: number, array: T[]) => Promise<R>
) => Promise.all(items.map(callbackFn))

export const async_filter = async <T>(
  items: T[],
  callbackFn: (value: T, index: number, array: T[]) => Promise<boolean>
) => {
  const next: T[] = []
  await async_forEach(items, (value, index, array) =>
    callbackFn(value, index, array).then(_ => _ && next.push(value))
  )
  return next
}

export const async_intercept = <T>(interceptor: (value: T) => Promise<T>) => (
  value: T
) => interceptor(value)

export const async_map = async <T>(
  items: T[],
  callbackFn: (value: T, index: number, array: T[]) => Promise<T>
) => {
  const next: T[] = []

  await async_forEach(items, async (value, index, array) => {
    next.push(await callbackFn(value, index, array))
  })

  return next
}
