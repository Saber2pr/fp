import { async_filter } from '..'

describe('async filter', () => {
  it('filter', async done => {
    const items = [1, 2, 3]
    const result = await async_filter(items, async value => value % 2 !== 0)
    expect(result).toEqual([1, 3])
    await done()
  })
})
