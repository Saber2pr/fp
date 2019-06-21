import {
  odd,
  even,
  lines,
  unlines,
  map,
  foldr,
  filter,
  head,
  tail,
  init,
  length,
  nulL,
  concat,
  reverse,
  and,
  all,
  any,
  take,
  drop,
  splitAt,
  takeWhile,
  dropWhile,
  span,
  breaK,
  elem,
  notElem,
  isPrefixOf,
  isInfixOf,
  isSuffixOf,
  last,
  or
} from '../list'
import { compose } from '../core'

describe('list', () => {
  it('odd', () => {
    expect(odd(2)).toEqual(false)
    expect(odd(3)).toEqual(true)
  })

  it('even', () => {
    expect(even(2)).toEqual(true)
    expect(even(3)).toEqual(false)
  })

  it('lines', () => {
    expect(lines(`a\nb\nc`)).toEqual(['a', 'b', 'c'])
  })

  it('unlines', () => {
    expect(unlines(['a', 'b', 'c'])).toEqual(`a\nb\nc`)
  })

  it('map', () => {
    expect(map<number, number>(x => x * x)([1, 2, 3])).toEqual([1, 4, 9])
    expect(
      map<number, { v: number }>(x => ({
        v: x * x
      }))([1, 2, 3])
    ).toEqual([{ v: 1 }, { v: 4 }, { v: 9 }])
  })

  it('foldr', () => {
    expect(foldr<number, number>(x => a => x + a, 0)([1, 2, 3])).toEqual(6)
  })

  it('filter', () => {
    expect(filter<number>(odd)([1, 2, 3])).toEqual([1, 3])
  })

  it('head', () => {
    expect(head([1, 2, 3])).toEqual(1)
  })

  it('last', () => {
    expect(last([1, 2, 3])).toEqual(3)
  })

  it('tail', () => {
    expect(tail([1, 2, 3])).toEqual([2, 3])
  })

  it('init', () => {
    expect(init([1, 2, 3])).toEqual([1, 2])
  })

  it('length', () => {
    expect(length([1, 2, 3])).toEqual(3)
    expect(length([])).toEqual(0)
  })

  it('null', () => {
    expect(nulL([1, 2, 3])).toEqual(false)
    expect(nulL([])).toEqual(true)
  })

  it('concat', () => {
    expect(concat([1, 2, 3])([4, 5])).toEqual([1, 2, 3, 4, 5])
  })

  it('reverse', () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1])
  })

  it('and', () => {
    expect(and([true, false, true])).toEqual(false)
    expect(and([])).toEqual(true)
  })

  it('or', () => {
    expect(or([false, false, false, true, false])).toEqual(true)
    expect(or([])).toEqual(false)
  })

  it('all', () => {
    expect(all(odd)([1, 3, 5])).toEqual(true)
    expect(all(odd)([])).toEqual(true)
    expect(all(odd)([3, 1, 4, 1, 5, 9, 2, 6, 5])).toEqual(false)
  })

  it('any', () => {
    expect(any(even)([3, 1, 4, 1, 5, 9, 2, 6, 5])).toEqual(true)
    expect(any(even)([])).toEqual(false)
  })

  it('take', () => {
    expect(take(2)([1, 2, 3, 4])).toEqual([1, 2])
    expect(take(2)([1])).toEqual([1])
  })

  it('drop', () => {
    expect(drop(2)([1, 2, 3, 4])).toEqual([3, 4])
    expect(drop(1)([])).toEqual([])
  })

  it('splitAt', () => {
    expect(splitAt(2)([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]])
  })

  it('takeWhile', () => {
    expect(takeWhile(odd)([1, 3, 5, 6, 8, 9, 11])).toEqual([1, 3, 5])
  })

  it('dropWhile', () => {
    expect(dropWhile(even)([2, 4, 6, 7, 9, 10, 12])).toEqual([7, 9, 10, 12])
  })

  it('span', () => {
    expect(span(even)([2, 4, 6, 7, 9, 10, 11])).toEqual([
      [2, 4, 6],
      [7, 9, 10, 11]
    ])
  })

  it('break', () => {
    expect(breaK(even)([1, 3, 5, 6, 8, 9, 10])).toEqual([
      [1, 3, 5],
      [6, 8, 9, 10]
    ])
  })

  it('elem', () => {
    expect(elem(2)([5, 3, 2, 1, 1])).toEqual(true)
  })

  it('notElem', () => {
    expect(notElem(2)([5, 3, 2, 1, 1])).toEqual(false)
  })

  it('filter', () => {
    expect(filter(odd)([2, 4, 1, 3, 6, 8, 5, 7])).toEqual([1, 3, 5, 7])
  })

  it('isPrefixOf', () => {
    expect(isPrefixOf([1, 2])([])).toEqual(false)
    expect(isPrefixOf([1, 2])([1, 2])).toEqual(true)
    expect(isPrefixOf([1, 2])([1, 2, 3])).toEqual(true)
  })

  it('isInfixOf', () => {
    expect(isInfixOf([1, 2])([])).toEqual(false)
    expect(isInfixOf([1, 2])([1, 2])).toEqual(true)
    expect(isInfixOf([1, 2])([1, 2, 3])).toEqual(true)
    expect(isInfixOf([1, 2])([0, 1, 2, 3])).toEqual(true)
  })

  it('isSuffixOf', () => {
    expect(isSuffixOf([2, 3])([])).toEqual(false)
    expect(isSuffixOf([2, 3])([0, 1, 2, 3])).toEqual(true)
  })

  it('compose test', () => {
    expect(
      compose<any>(
        map(x => ({ name: x })),
        filter(x => x !== 'b'),
        lines
      )('a\nb\nc')
    ).toEqual([
      {
        name: 'a'
      },
      {
        name: 'c'
      }
    ])
  })

  it('compose test', () => {
    expect(
      compose<any>(
        map(x => ({ name: x })),
        filter(x => x !== 'b'),
        lines
      )('a\nb\nc')
    ).toEqual([
      {
        name: 'a'
      },
      {
        name: 'c'
      }
    ])
  })
})
