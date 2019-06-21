/*
 * @Author: saber2pr
 * @Date: 2019-06-21 15:09:55
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-21 16:05:37
 */
export const odd = (x: number) => x % 2 !== 0
export const even = (x: number) => x % 2 === 0
export const lines = (s: string) => s.split('\n')
export const unlines = (ss: string[]) => ss.join('\n')
export const map = <A, B>(f: (x: A) => B) => (xs: A[]) => xs.map(f)
export const foldr = <T, Z>(f: (a: T) => (b: Z) => Z, z: Z) => (xs: T[]) =>
  typeof xs === 'string'
    ? foldr(f, z)((<any>xs).split(''))
    : xs.reduceRight((a, b) => f(b)(a), z)
export const filter = <T>(f: (x: T) => boolean) => (xs: T[]) => xs.filter(f)
export const head = <T>(xs: T[]) => xs[0]
export const last = <T>(xs: T[]) => xs[xs.length - 1]
export const tail = <T>(xs: T[]) => xs.slice(1)
export const init = <T>(xs: T[]) => xs.slice(0, xs.length - 1)
export const length = <T>(xs: T[]) => xs.length
export const nulL = <T>(xs: T[]) => xs.length === 0
export const concat = <T>(xs: T[]) => (bs: T[]) => [].concat(xs, bs)
export const reverse = <T>(xs: T[]) => xs.slice().reverse()
export const and = <T>(xs: T[]) => xs.reduce((a, b) => !!a && !!b, true)
export const or = <T>(xs: T[]) => xs.reduce((a, b) => !!a || !!b, false)
export const all = <T>(f: (x: T) => boolean) => (xs: T[]) => xs.every(f)
export const any = <T>(f: (x: T) => boolean) => (xs: T[]) => xs.some(f)
export const take = <T>(i: number) => (xs: T[]) => xs.slice(0, i)
export const drop = <T>(i: number) => (xs: T[]) => xs.slice(i)
export const splitAt = <T>(i: number) => (xs: T[]) => [take(i)(xs), drop(i)(xs)]
export const takeWhile = <T>(f: (x: T) => boolean) => (xs: T[]) =>
  take(xs.indexOf(xs.find(x => !f(x))))(xs)
export const dropWhile = <T>(f: (x: T) => boolean) => (xs: T[]) =>
  drop(xs.indexOf(xs.find(x => !f(x))))(xs)
export const span = <T>(f: (x: T) => boolean) => (xs: T[]) => [
  takeWhile(f)(xs),
  dropWhile(f)(xs)
]
export const breaK = <T>(f: (x: T) => boolean) => (xs: T[]) => [
  takeWhile<T>(a => !f(a))(xs),
  dropWhile<T>(a => !f(a))(xs)
]
export const elem = <T>(x: T) => (xs: T[]) => xs.includes(x)
export const notElem = <T>(x: T) => (xs: T[]) => !xs.includes(x)
export const isPrefixOf = <T>(as: T[]) => (xs: T[]) =>
  xs.toString().startsWith(as.toString())
export const isInfixOf = <T>(as: T[]) => (xs: T[]) =>
  xs.toString().includes(as.toString())
export const isSuffixOf = <T>(as: T[]) => (xs: T[]) =>
  xs.toString().endsWith(as.toString())
