import { intercept } from '..'

describe('sync intercept', () => {
  it('intercept', () => {
    const result = intercept<number>(value => value + 100)(1)

    expect(result).toEqual(101)
  })

  it('intercept with map', () => {
    const result = [1, 2, 3].map(intercept(v => v * v))

    expect(result).toEqual([1, 4, 9])
  })
})
