import { Y } from '..'

describe('y combinator', () => {
  it('create an anonymous loop', () => {
    const result = Y(sum => num => (num > 0 ? num + Y(sum)(num - 1) : num))(3)
    expect(result).toEqual(6)
  })
})
