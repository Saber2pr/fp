/*
 * @Author: saber2pr
 * @Date: 2019-06-20 10:32:59
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-20 10:47:04
 */
import { from } from './lazy'

export const pipe = <T>(...fns: ((value: T) => T)[]) => (value: T) =>
  from(fns)
    .reduce((a, b) => b(a), value)
    .to()[0]

export const compose = <T>(...fns: ((value: T) => T)[]) => (value: T) =>
  pipe(...fns.reverse())(value)

export const setter = <T, K extends keyof T>(
  target: T,
  ...props: [K, T[K]][]
): T =>
  Object.assign(
    {},
    target,
    ...from(props)
      .map(([k, v]) => ({ [k]: v }))
      .to()
  )
