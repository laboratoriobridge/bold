import { BaseFieldProps, extractInputProps, getActiveError, hasActiveError } from './util'

describe('hasActiveError', () => {
    it('should return true if field has an active error', () => {
        expect(hasActiveError({})).toBeFalsy()

        expect(hasActiveError({ error: 'Error!' })).toBeFalsy()
        expect(hasActiveError({ error: 'Error!', touched: true })).toBeTruthy()

        expect(hasActiveError({ submitError: 'Submit Error!', dirtySinceLastSubmit: true })).toBeFalsy()
        expect(hasActiveError({ submitError: 'Submit Error!', dirtySinceLastSubmit: false })).toBeTruthy()
    })
})

describe('getActiveError', () => {
    it('should return the current field active error', () => {
        expect(getActiveError({})).toBeFalsy()

        expect(getActiveError({ error: 'Error!' })).toBeFalsy()
        expect(getActiveError({ error: 'Error!', touched: true })).toEqual('Error!')

        expect(getActiveError({ submitError: 'Submit Error!', dirtySinceLastSubmit: true })).toBeFalsy()
        expect(getActiveError({ submitError: 'Submit Error!', dirtySinceLastSubmit: false })).toEqual('Submit Error!')
    })
})

describe('extractInputProps', () => {
    it('should remove Field specific props from object', () => {
        const obj: BaseFieldProps<{ foo: string, bar: string }> = {
            name: 'test',
            label: 'Test',
            hasWrapper: true,
            parse: jest.fn(),
            format: jest.fn(),
            convert: jest.fn(),
            validate: jest.fn(),
            foo: '',
            bar: '',
        }
        expect(extractInputProps(obj)).toEqual({
            name: 'test',
            foo: '',
            bar: '',
        })
    })
})
