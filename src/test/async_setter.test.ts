import { async_setter } from '..'

describe('async async_setter', () => {
  it('set obj one props, old obj has no change', async done => {
    const obj = { name: '' }
    await async_setter(obj, ['name', Promise.resolve('saber')])
    expect(obj).toEqual({ name: '' })
    await done()
  })
  it('set obj two props, old obj has no change', async done => {
    const obj = { name: '', age: 0 }
    await async_setter(
      obj,
      ['name', Promise.resolve('saber')],
      ['age', Promise.resolve(233)]
    )
    expect(obj).toEqual({ name: '', age: 0 })
    await done()
  })

  it('set obj one props, get a new obj', async done => {
    const obj = { name: '' }
    const result = await async_setter(obj, ['name', Promise.resolve('saber')])
    expect(result).toEqual({ name: 'saber' })
    await done()
  })
  it('set obj two props, get a new obj', async done => {
    const obj = { name: '', age: 0 }
    const result = await async_setter(
      obj,
      ['name', Promise.resolve('saber')],
      ['age', Promise.resolve(233)]
    )
    expect(result).toEqual({ name: 'saber', age: 233 })
    await done()
  })
})
