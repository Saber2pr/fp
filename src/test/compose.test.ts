import { compose } from '..'

describe('sync compose', () => {
  it('compose one func', () => {
    const increase = (v = 0) => v + 1
    const result = compose(increase)(1)
    expect(result).toEqual(2)
  })
  it('compose two func', () => {
    const increase = (v = 0) => v + 1
    const result = compose(
      increase,
      increase
    )(1)
    expect(result).toEqual(3)
  })
  it('compose more func', () => {
    const increase = (v = 0) => v + 1
    const result = compose(
      increase,
      increase,
      increase,
      increase,
      increase,
      increase
    )(1)
    expect(result).toEqual(7)
  })

  it('compose fn exec order', () => {
    const sent: Function[] = []
    const A = () => sent.push(A)
    const B = () => sent.push(B)
    const C = () => sent.push(C)
    compose(
      A,
      B,
      C
    )(0)
    expect(sent).toEqual([C, B, A])
  })
})
