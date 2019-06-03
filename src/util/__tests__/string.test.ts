import { capitalize, randomStr } from '../string'

describe('randomStr', () => {
  it('should return a random string', () => {
    expect(randomStr()).not.toBeFalsy()
    expect(randomStr()).not.toEqual(randomStr())
  })
})

describe('capitalize', () => {
  it('should capitalize a string', () => {
    expect(capitalize('test one')).toEqual('Test one')
  })
})
