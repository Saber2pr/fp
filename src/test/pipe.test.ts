import { pipe } from '..'

describe('sync pipe', () => {
  it('pipe one func', () => {
    const increase = (v = 0) => v + 1
    const result = pipe(increase)(1)
    expect(result).toEqual(2)
  })
  it('pipe two func', () => {
    const increase = (v = 0) => v + 1
    const result = pipe(
      increase,
      increase
    )(1)
    expect(result).toEqual(3)
  })
  it('pipe more func', () => {
    const increase = (v = 0) => v + 1
    const result = pipe(
      increase,
      increase,
      increase,
      increase,
      increase,
      increase
    )(1)
    expect(result).toEqual(7)
  })

  it('pipe fn exec order', () => {
    const sent: Function[] = []
    const A = () => sent.push(A)
    const B = () => sent.push(B)
    const C = () => sent.push(C)
    pipe(
      A,
      B,
      C
    )(0)
    expect(sent).toEqual([A, B, C])
  })
})
