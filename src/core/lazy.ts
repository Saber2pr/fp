/*
 * @Author: saber2pr
 * @Date: 2019-06-20 09:31:15
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-21 16:05:53
 */
export function range(end: number): IterableIterator<number>
export function range(start: number, end: number): IterableIterator<number>
export function range(
  start: number,
  end: number,
  step: number
): IterableIterator<number>
export function* range(
  start: number,
  end: number = 0,
  step = 1
): IterableIterator<number> {
  if (end === 0) [start, end] = [end, start]
  for (let i = start; i < end; i += step) yield i
}

export function* map<T, R>(
  it: IterableIterator<T>,
  transform: (value: T) => R
) {
  for (const v of it) yield transform(v)
}

export function* filter<T>(
  it: IterableIterator<T>,
  condition: (value: T) => boolean
) {
  for (const v of it) if (condition(v)) yield v
}

export function* reduce<T, R>(
  it: IterableIterator<T>,
  reducer: (receiver: R, value: T) => R,
  initValue: R
) {
  for (const v of it) initValue = reducer(initValue, v)
  yield initValue
}

class Lazy<T> {
  public constructor(private readonly it: IterableIterator<T>) {}
  public map<R>(transform: (value: T) => R) {
    return new Lazy(map(this.it, transform))
  }
  public filter(condition: (value: T) => boolean) {
    return new Lazy(filter(this.it, condition))
  }
  public reduce<R>(reducer: (receiver: R, value: T) => R, initValue: R) {
    return new Lazy(reduce(this.it, reducer, initValue))
  }
  public to(transform: (value: T) => T = _ => _) {
    return Array.from(this.it).map(transform)
  }
}

export const toIt = <T>(items: T[]) => items[Symbol.iterator]()

export function from<T>(items: T[]): Lazy<T>
export function from<T>(items: IterableIterator<T>): Lazy<T>
export function from<T>(items: T[] | IterableIterator<T>): Lazy<T> {
  if (Array.isArray(items)) {
    return new Lazy(toIt(items))
  } else {
    return new Lazy(items)
  }
}
