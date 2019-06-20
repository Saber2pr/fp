/*
 * @Author: saber2pr
 * @Date: 2019-06-20 10:36:45
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-06-20 10:36:45
 */
import { from } from './lazy'

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
) => async_reduce(items.reverse(), reducer, initValue)

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
    ...(await async_map(props, async ([k, v]) => ({ [k]: await v })))
  )

export const async_forEach = <T, R = void>(
  items: T[],
  callbackFn: (value: T) => Promise<R>
) =>
  Promise.all(
    from(items)
      .map(callbackFn)
      .to()
  )

export const async_filter = async <T>(
  items: T[],
  callbackFn: (value: T) => Promise<boolean>
) => {
  const next: T[] = []
  await async_forEach(items, value =>
    callbackFn(value).then(_ => _ && next.push(value))
  )
  return next
}

export const async_map = async <T, R>(
  items: T[],
  callbackFn: (value: T) => Promise<R>
) => {
  const next: R[] = []
  await async_forEach(items, async value => next.push(await callbackFn(value)))
  return next
}
