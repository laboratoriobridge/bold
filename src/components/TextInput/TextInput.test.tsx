import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { LocaleContext } from '../../i18n'
import ptBr from '../../i18n/locales/pt-BR'

import { TextInput } from './TextInput'

it('should render correctly', () => {
  const { container } = render(<TextInput />)
  expect(container).toMatchSnapshot()
})

it('should accept "type" prop', () => {
  const { container } = render(<TextInput type='password' />)
  expect(container.querySelector('input').type).toEqual('password')
})

describe('icon', () => {
  it('should render correctly with icon', () => {
    const { container } = render(<TextInput icon='adjust' iconPosition='left' onIconClick={jest.fn()} />)
    expect(container).toMatchSnapshot()
  })
  it('should call "onIconClick" when icon is clicked', () => {
    const handleIconClick = jest.fn()
    const { container } = render(<TextInput icon='adjust' onIconClick={handleIconClick} />)
    const button = container.querySelector('button')
    expect(handleIconClick).not.toHaveBeenCalled()
    fireEvent.click(button)
    expect(handleIconClick).toHaveBeenCalledWith(expect.anything())
  })
  it('should disable icon when input is disabled', () => {
    const handleIconClick = jest.fn()
    const { container } = render(<TextInput icon='adjust' onIconClick={handleIconClick} disabled />)
    const button = container.querySelector('button')
    expect(button.disabled).toEqual(true)
    fireEvent.click(button)
    expect(handleIconClick).not.toHaveBeenCalled()
  })
  it('should disable icon when "iconDisabled" is true', () => {
    const handleIconClick = jest.fn()
    const { container } = render(<TextInput icon='adjust' onIconClick={handleIconClick} iconDisabled />)
    const button = container.querySelector('button')
    expect(button.disabled).toEqual(true)
  })
})

describe('clear icon', () => {
  it('should call "onChange" when clear icon is clicked', () => {
    const change = jest.fn(event => event.persist())
    const { queryByTitle } = render(<TextInput defaultValue='Test' onChange={change} />)

    fireEvent.click(queryByTitle('Clear'))

    expect(change).toHaveBeenCalledTimes(1)
    expect(change.mock.calls[0][0].target.value).toEqual('')
  })
  it('should not render clear icon when clearable prop is false', () => {
    const { queryByTitle, rerender } = render(<TextInput defaultValue='Test' clearable={true} />)
    expect(queryByTitle('Clear')).toBeTruthy()

    rerender(<TextInput defaultValue='Test' clearable={false} />)
    expect(queryByTitle('Clear')).toBeFalsy()
  })
  it('should allow title customization via locale context', () => {
    const { queryByTitle } = render(
      <LocaleContext.Provider value={ptBr}>
        <TextInput defaultValue='Test' />
      </LocaleContext.Provider>
    )
    expect(queryByTitle(ptBr.input.clear)).toBeTruthy()
  })
})
