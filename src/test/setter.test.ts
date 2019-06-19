import { setter } from '..'

describe('sync setter', () => {
  it('set obj one props, old obj has no change', () => {
    const obj = { name: '' }
    setter(obj, ['name', 'saber'])
    expect(obj).toEqual({ name: '' })
  })
  it('set obj two props, old obj has no change', () => {
    const obj = { name: '', age: 0 }
    setter(obj, ['name', 'saber'], ['age', 233])
    expect(obj).toEqual({ name: '', age: 0 })
  })

  it('set obj one props, get a new obj', () => {
    const obj = { name: '' }
    const result = setter(obj, ['name', 'saber'])
    expect(result).toEqual({ name: 'saber' })
  })
  it('set obj two props, get a new obj', () => {
    const obj = { name: '', age: 0 }
    const result = setter(obj, ['name', 'saber'], ['age', 233])
    expect(result).toEqual({ name: 'saber', age: 233 })
  })
})
