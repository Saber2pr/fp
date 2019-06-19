import { async_intercept } from '..'

describe('async intercept', () => {
  it('intercept', async done => {
    const result = await async_intercept<number>(value =>
      Promise.resolve(value + 100)
    )(1)

    expect(result).toEqual(101)
    await done()
  })

  it('intercept with map', async done => {
    const result = await Promise.all(
      [1, 2, 3].map(async_intercept(v => Promise.resolve(v * v)))
    )

    expect(result).toEqual([1, 4, 9])
    await done()
  })
})
