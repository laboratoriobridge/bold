import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { padTime, TimeField } from './TimeField'

describe('render', () => {
  it('should render correcly', () => {
    const { container } = render(<TimeField name='time' />)
    expect(container).toMatchSnapshot()
  })
})

describe('onChange', () => {
  it('should be called with input value when input is changed', () => {
    const change = jest.fn()
    const { container } = render(<TimeField name='time' onChange={change} />)
    const input = container.querySelector('input')

    expect(change).not.toHaveBeenCalled()
    fireEvent.change(input, { target: { value: '10:23' } })
    expect(change).toHaveBeenCalledWith('10:23')
  })
  it('should be called with original input event when input is changed', () => {
    const inputChange = jest.fn()
    const { container } = render(<TimeField name='time' onInputChange={inputChange} />)
    const input = container.querySelector('input')

    expect(inputChange).not.toHaveBeenCalled()
    fireEvent.change(input, { target: { value: '01:48' } })
    expect(inputChange).toHaveBeenCalled()
  })
})

describe('onBlur', () => {
  it('should call the onChange prop with padded time', () => {
    const change = jest.fn()
    const { container } = render(<TimeField name='time' onChange={change} />)
    const input = container.querySelector('input')

    fireEvent.blur(input, { target: { value: '1' } })
    expect(change).toHaveBeenCalledWith('10:00')
  })
  it('should call the original onBlur prop', () => {
    const blur = jest.fn()
    const { container } = render(<TimeField name='time' onBlur={blur} />)
    const input = container.querySelector('input')

    expect(blur).not.toHaveBeenCalled()
    fireEvent.blur(input, { target: { value: '01:00' } })
    expect(blur).toHaveBeenCalled()
  })
})

describe('clear', () => {
  it('should clear the input value', () => {
    const change = jest.fn()
    const { container } = render(<TimeField defaultValue='11:00' name='time' onChange={change} />)
    const span = container.querySelector('span')
    fireEvent.click(span)
    expect(change).toHaveBeenCalledWith('')
  })
})

describe('padTime', () => {
  it('should complete value with zeros', () => {
    expect(padTime('')).toEqual('00:00')
    expect(padTime('1')).toEqual('10:00')
    expect(padTime('13')).toEqual('13:00')
    expect(padTime('14:5')).toEqual('14:50')
    expect(padTime('23:56')).toEqual('23:56')
  })
})
