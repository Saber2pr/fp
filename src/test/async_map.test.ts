import { async_map } from '..'

describe('async map', () => {
  it('map', async done => {
    const items = [1, 2, 3]
    const result = await async_map(items, value => Promise.resolve(value + 100))
    expect(result).toEqual([101, 102, 103])
    await done()
  })
})
