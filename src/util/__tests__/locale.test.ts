import { getUserLocale } from '../locale'

describe('getUserLocale', () => {
    it('should return browser locale', () => {
        expect(getUserLocale()).toEqual('en-US')
    })
})
