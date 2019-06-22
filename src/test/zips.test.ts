import { zips } from '..'

describe('zips', () => {
  it('merge arrays', () => {
    expect(zips([1, 2], ['a', 'b'])).toEqual([[1, 'a'], [2, 'b']])
    expect(zips([1, 2], ['a', 'b'], [10, 20])).toEqual([
      [1, 'a', 10],
      [2, 'b', 20]
    ])
    expect(zips([1, 2, 3], ['a', 'b', 'c'], [10, 20, 30])).toEqual([
      [1, 'a', 10],
      [2, 'b', 20],
      [3, 'c', 30]
    ])
  })
})
