import { async_reduceRight } from '..'

describe('async reduce', () => {
  it('reduce items to same type', async done => {
    const items = [1, 2, 3]
    const result = await async_reduceRight(
      items,
      async (receiver, value) => receiver + value,
      0
    )
    expect(result).toEqual(6)
    await done()
  })

  it('reduce items to object type', async done => {
    const items = [1, 2, 3]
    const result = await async_reduceRight(
      items,
      async (receiver, value) => {
        receiver.value += value
        return receiver
      },
      { value: 0 }
    )
    expect(result).toEqual({ value: 6 })
    await done()
  })

  it('reducer exec order', async done => {
    const sent: Function[] = []
    const A = () => sent.push(A)
    const B = () => sent.push(B)
    const C = () => sent.push(C)

    await async_reduceRight([A, B, C], async (_, fn) => fn(), void 0)

    expect(sent).toEqual([C, B, A])
    await done()
  })
})
