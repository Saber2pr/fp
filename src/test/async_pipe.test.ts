import { async_pipe } from '..'

describe('async pipe', () => {
  it('pipe one func', async done => {
    const increase = async (v = 0) => v + 1
    const result = await async_pipe(increase)(1)
    expect(result).toEqual(2)
    await done()
  })
  it('pipe two func', async done => {
    const increase = async (v = 0) => v + 1
    const result = await async_pipe(increase, increase)(1)
    expect(result).toEqual(3)
    await done()
  })
  it('pipe more func', async done => {
    const increase = async (v = 0) => v + 1
    const result = await async_pipe(
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

  it('pipe fn exec order', async done => {
    const sent: Function[] = []
    const A = async () => sent.push(A)
    const B = async () => sent.push(B)
    const C = async () => sent.push(C)
    await async_pipe(A, B, C)(0)
    expect(sent).toEqual([A, B, C])
    await done()
  })
})
