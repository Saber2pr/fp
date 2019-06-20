import { from, range, map, toIt, filter, reduce } from '..'

describe('lazy func', () => {
  it('*range with one arg:end', () => {
    const result = Array.from(range(3))
    expect(result).toEqual([0, 1, 2])
  })
  it('*range with two args:(start, end)', () => {
    const result = Array.from(range(3, 5))
    expect(result).toEqual([3, 4])
  })
  it('*range with three args:(start, end, step)', () => {
    const result = Array.from(range(3, 10, 2))
    expect(result).toEqual([3, 5, 7, 9])
  })

  it('*map', () => {
    const result = Array.from(map(toIt([1, 2, 3]), v => v * v))
    expect(result).toEqual([1, 4, 9])
  })

  it('*filter', () => {
    const result = Array.from(filter(toIt([1, 2, 3]), v => v % 2 !== 0))
    expect(result).toEqual([1, 3])
  })

  it('*reduce', () => {
    const result = Array.from(reduce(toIt([1, 2, 3]), (r, v) => r + v, 0))
    expect(result).toEqual([6])
  })

  it('map', () => {
    const result = from([1, 2, 3])
      .map(v => v * v)
      .to()
    expect(result).toEqual([1, 4, 9])
  })
  it('map transform call times', () => {
    let count = 0
    const ly = from([1, 2, 3]).map(v => {
      count++
      return v * v
    })
    expect(count).toEqual(0)
    const result = ly.to()
    expect(count).toEqual(3)
    expect(result).toEqual([1, 4, 9])
  })

  it('filter', () => {
    const result = from([1, 2, 3])
      .filter(v => v % 2 !== 0)
      .to()
    expect(result).toEqual([1, 3])
  })
  it('filter condition call times', () => {
    let count = 0
    const ly = from([1, 2, 3]).filter(v => {
      count++
      return v % 2 !== 0
    })
    expect(count).toEqual(0)
    const result = ly.to()
    expect(count).toEqual(3)
    expect(result).toEqual([1, 3])
  })

  it('reduce', () => {
    const result = from([1, 2, 3])
      .reduce((r, v) => r + v, 0)
      .to()
    expect(result).toEqual([6])
  })
  it('reduce reducer call times', () => {
    let count = 0
    const ly = from([1, 2, 3]).reduce((r, v) => {
      count++
      return r + v
    }, 0)
    expect(count).toEqual(0)
    const result = ly.to()
    expect(count).toEqual(3)
    expect(result).toEqual([6])
  })

  it('map & filter call times', () => {
    let count = 0
    const result = from([1, 2, 3])
      .map(v => v * v)
      .filter(v => v % 2 !== 0)
      .to(_ => {
        count++
        return _
      })
    expect(count).toEqual(2)
    expect(result).toEqual([1, 9])
  })

  it('map & reduce call times', () => {
    let count = 0
    const result = from([1, 2, 3])
      .map(v => v * v)
      .reduce((r, v) => r + v, 0)
      .to(_ => {
        count++
        return _
      })
    expect(count).toEqual(1)
    expect(result).toEqual([14])
  })

  it('reduce & map call times', () => {
    let count = 0
    const result = from([1, 2, 3])
      .reduce((r, v) => r + v, 0)
      .map(v => v * v)
      .to(_ => {
        count++
        return _
      })
    expect(count).toEqual(1)
    expect(result).toEqual([36])
  })
})
