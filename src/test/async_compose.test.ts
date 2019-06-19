import { async_compose } from '..'

describe('async compose', () => {
  it('compose one func', async done => {
    const increase = async (v = 0) => v + 1
    const result = await async_compose(increase)(1)
    expect(result).toEqual(2)
    await done()
  })
  it('compose two func', async done => {
    const increase = async (v = 0) => v + 1
    const result = await async_compose(increase, increase)(1)
    expect(result).toEqual(3)
    await done()
  })
  it('compose more func', async done => {
    const increase = async (v = 0) => v + 1
    const result = await async_compose(
      increase,
      increase,
      increase,
      increase,
      increase,
      increase
    )(1)
    expect(result).toEqual(7)
    await done()
  })

  it('compose fn exec order', async done => {
    const sent: Function[] = []
    const A = async () => sent.push(A)
    const B = async () => sent.push(B)
    const C = async () => sent.push(C)
    await async_compose(A, B, C)(0)
    expect(sent).toEqual([C, B, A])
    await done()
  })
})
