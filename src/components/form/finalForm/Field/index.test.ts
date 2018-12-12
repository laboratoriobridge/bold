import { BaseFieldProps, extractInputProps } from '.'

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
