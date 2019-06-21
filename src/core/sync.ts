/*
 * @Author: saber2pr
 * @Date: 2019-06-20 10:32:59
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-21 15:09:59
 */
import { from } from './lazy'

export function compose<T1>(fn0: () => T1): () => T1
export function compose<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1
export function compose<V0, V1, T1>(
  fn0: (x0: V0, x1: V1) => T1
): (x0: V0, x1: V1) => T1
export function compose<V0, V1, V2, T1>(
  fn0: (x0: V0, x1: V1, x2: V2) => T1
): (x0: V0, x1: V1, x2: V2) => T1

export function compose<T1, T2>(fn1: (x: T1) => T2, fn0: () => T1): () => T2
export function compose<V0, T1, T2>(
  fn1: (x: T1) => T2,
  fn0: (x0: V0) => T1
): (x0: V0) => T2
export function compose<V0, V1, T1, T2>(
  fn1: (x: T1) => T2,
  fn0: (x0: V0, x1: V1) => T1
): (x0: V0, x1: V1) => T2
export function compose<V0, V1, V2, T1, T2>(
  fn1: (x: T1) => T2,
  fn0: (x0: V0, x1: V1, x2: V2) => T1
): (x0: V0, x1: V1, x2: V2) => T2

export function compose<T1, T2, T3>(
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: () => T1
): () => T3
export function compose<V0, T1, T2, T3>(
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (x: V0) => T1
): (x: V0) => T3
export function compose<V0, V1, T1, T2, T3>(
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (x0: V0, x1: V1) => T1
): (x0: V0, x1: V1) => T3
export function compose<V0, V1, V2, T1, T2, T3>(
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (x0: V0, x1: V1, x2: V2) => T1
): (x0: V0, x1: V1, x2: V2) => T3

export function compose<T1, T2, T3, T4>(
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: () => T1
): () => T4
export function compose<V0, T1, T2, T3, T4>(
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (x: V0) => T1
): (x: V0) => T4
export function compose<V0, V1, T1, T2, T3, T4>(
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (x0: V0, x1: V1) => T1
): (x0: V0, x1: V1) => T4
export function compose<V0, V1, V2, T1, T2, T3, T4>(
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (x0: V0, x1: V1, x2: V2) => T1
): (x0: V0, x1: V1, x2: V2) => T4

export function compose<T1, T2, T3, T4, T5>(
  fn4: (x: T4) => T5,
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: () => T1
): () => T5
export function compose<V0, T1, T2, T3, T4, T5>(
  fn4: (x: T4) => T5,
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (x: V0) => T1
): (x: V0) => T5
export function compose<V0, V1, T1, T2, T3, T4, T5>(
  fn4: (x: T4) => T5,
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (x0: V0, x1: V1) => T1
): (x0: V0, x1: V1) => T5
export function compose<V0, V1, V2, T1, T2, T3, T4, T5>(
  fn4: (x: T4) => T5,
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (x0: V0, x1: V1, x2: V2) => T1
): (x0: V0, x1: V1, x2: V2) => T5

export function compose<T1, T2, T3, T4, T5, T6>(
  fn5: (x: T5) => T6,
  fn4: (x: T4) => T5,
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: () => T1
): () => T6
export function compose<V0, T1, T2, T3, T4, T5, T6>(
  fn5: (x: T5) => T6,
  fn4: (x: T4) => T5,
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (x: V0) => T1
): (x: V0) => T6
export function compose<V0, V1, T1, T2, T3, T4, T5, T6>(
  fn5: (x: T5) => T6,
  fn4: (x: T4) => T5,
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (x0: V0, x1: V1) => T1
): (x0: V0, x1: V1) => T6
export function compose<V0, V1, V2, T1, T2, T3, T4, T5, T6>(
  fn5: (x: T5) => T6,
  fn4: (x: T4) => T5,
  fn3: (x: T3) => T4,
  fn2: (x: T2) => T3,
  fn1: (x: T1) => T2,
  fn0: (x0: V0, x1: V1, x2: V2) => T1
): (x0: V0, x1: V1, x2: V2) => T6

export function compose(...fns: ((...value: any) => any)[]) {
  return (value: any) =>
    from(fns.reverse())
      .reduce((a, b) => b(a), value)
      .to()[0]
}

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
