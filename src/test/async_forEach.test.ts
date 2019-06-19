import { async_forEach } from '..'

describe('async forEach', () => {
  it('foreach', async done => {
    const items = [1, 2, 3]
    const sent: number[] = []
    await async_forEach(items, async value => sent.push(value))
    expect(sent).toEqual([1, 2, 3])
    await done()
  })
})
