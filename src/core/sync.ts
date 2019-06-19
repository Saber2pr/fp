/*
 * @Author: saber2pr
 * @Date: 2019-06-19 20:26:39
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-19 22:49:43
 */
export const compose = <T>(...fns: ((value: T) => T)[]) => (value: T) =>
  fns.reduceRight((a, b) => b(a), value)

export const pipe = <T>(...fns: ((value: T) => T)[]) => (value: T) =>
  fns.reduce((a, b) => b(a), value)

export const setter = <T, K extends keyof T>(
  target: T,
  ...props: [K, T[K]][]
): T => Object.assign({}, target, ...props.map(([k, v]) => ({ [k]: v })))
