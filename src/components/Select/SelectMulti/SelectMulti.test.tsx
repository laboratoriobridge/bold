import { fireEvent, render } from '@testing-library/react'
import { resetIdCounter } from 'downshift'
import React from 'react'
import { DefaultItemType } from '../SelectSingle'
import { SelectMulti, SelectMultiProps } from './SelectMulti'

jest.mock('../../../util/string')

const items: DefaultItemType[] = [
  { value: 1, label: 'Apple' },
  { value: 2, label: 'Banana' },
  { value: 3, label: 'Grape' },
  { value: 4, label: 'Orange' },
  { value: 5, label: 'Pear' },
]

function SelectTest(props: Partial<SelectMultiProps>) {
  return (
    <SelectMulti
      items={items}
      itemToString={item => item && item.label}
      placeholder='Select a value...'
      itemIsEqual={(a, b) => a.value === b.value}
      {...props}
    />
  )
}

beforeEach(() => resetIdCounter())

it('should render correctly when closed', () => {
  const { container } = render(<SelectTest />)
  expect(container).toMatchSnapshot()
})

it('should render correctly when opened', () => {
  const { container } = render(<SelectTest isOpen={true} />)
  expect(container).toMatchSnapshot()
})

it('should accept value prop', () => {
  const { queryAllByText } = render(<SelectTest value={[items[0], items[4]]} />)
  expect(queryAllByText(items[0].label, { selector: 'span' }).length).toEqual(1)
  expect(queryAllByText(items[1].label, { selector: 'span' }).length).toEqual(0)
  expect(queryAllByText(items[4].label, { selector: 'span' }).length).toEqual(1)
})

it('should open the select menu when input is focused', () => {
  const { container } = render(<SelectTest />)
  expect(container.querySelector('ul')).toBeFalsy()
  fireEvent.focus(container.querySelector('input'))
  expect(container.querySelector('ul')).toBeTruthy()
})

it('should call the onChange event when an item is clicked', () => {
  const onChange = jest.fn()
  const { getByText } = render(<SelectTest onChange={onChange} isOpen={true} />)
  expect(onChange).not.toHaveBeenCalled()
  fireEvent.click(getByText(items[2].label))
  expect(onChange).toHaveBeenLastCalledWith([items[2]], expect.anything())
  fireEvent.click(getByText(items[4].label))
  expect(onChange).toHaveBeenLastCalledWith([items[2], items[4]], expect.anything())
})

it('should render current value and allow changes via prop', () => {
  const { queryAllByText, rerender } = render(<SelectTest />)
  rerender(<SelectTest value={[{ value: 42, label: 'Foo' }]} />)
  expect(queryAllByText('Foo').length).toEqual(1)
})

it('should show placeholder only if selected items is empty', () => {
  const { container, rerender } = render(<SelectTest placeholder='Select...' />)
  const input = container.querySelector('input')
  expect(input.placeholder).toEqual('Select...')

  rerender(<SelectTest value={[items[0]]} />)
  expect(input.placeholder).toEqual('')
})

it('should not call onChange when filter is typed and cleared', () => {
  const change = jest.fn()
  const { container } = render(<SelectTest onChange={change} />)
  fireEvent.change(container.querySelector('input'), { target: { value: 'app' } })
  fireEvent.change(container.querySelector('input'), { target: { value: '' } })
  expect(change).not.toHaveBeenCalled()
})

it('should preserve external onBlur and onFocus event handlers', () => {
  const blur = jest.fn()
  const focus = jest.fn()
  const { container } = render(<SelectTest onBlur={blur} onFocus={focus} />)
  const input = container.querySelector('input')
  fireEvent.focus(input)
  fireEvent.blur(input)
  expect(blur).toHaveBeenCalledTimes(1)
  expect(focus).toHaveBeenCalledTimes(1)
})

describe('filtering', () => {
  it('should keep the current filter after an item is selected', async () => {
    const { container } = render(<SelectTest />)
    const input = container.querySelector('input')
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'pe' } })

    expect(container.querySelectorAll('li').length).toEqual(3)
    fireEvent.click(container.querySelectorAll('li')[0])

    expect(input.value).toEqual('pe')
    expect(container.querySelectorAll('li').length).toEqual(3)
  })
  it('should clear the current filter and the input value after menu is closed', async () => {
    const { container } = render(<SelectTest />)
    const input = container.querySelector('input')
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'pe' } })
    fireEvent.click(container.querySelectorAll('li')[0])
    fireEvent.blur(input)
    expect(container.querySelectorAll('li').length).toEqual(0)
    expect(input.value).toEqual('')
  })
})

describe('remove item', () => {
  it('should call onChange with the new value', () => {
    const onChange = jest.fn()
    const { container } = render(<SelectTest onChange={onChange} isOpen={true} value={[items[0], items[1]]} />)
    fireEvent.click(container.querySelectorAll('span[title="Remove"]')[0])
    expect(onChange).toHaveBeenLastCalledWith([items[1]], expect.anything())
  })
  it('should not focus nor toggle the menu opened state', () => {
    const { container } = render(<SelectTest value={[items[0]]} />)
    const menu = container.querySelector('ul')
    const input = container.querySelector('input')

    expect(menu).toBeFalsy()
    fireEvent.click(container.querySelectorAll('span[title="Remove"]')[0])
    expect(menu).toBeFalsy()

    expect(document.activeElement).not.toEqual(input)
  })
})

describe('error', () => {
  it('should render the error text', () => {
    const { queryByText } = render(<SelectTest error='Some error' />)
    expect(queryByText('Some error')).toBeTruthy()
  })

  it('input should have an "aria-invalid=true" attribute when "error" is provided', () => {
    const { container } = render(<SelectTest error='Some error' />)
    expect(container.querySelector('input').getAttribute('aria-invalid')).toEqual('true')
  })

  it('input should have an "aria-errormessage" attribute when "error" is provided', () => {
    const { container } = render(<SelectTest error='Some error' />)
    expect(container.querySelector('input').getAttribute('aria-errormessage')).toEqual('error-abc')
    expect(container.querySelector('#error-abc').textContent).toEqual('Some error')
  })
})

describe('input label', () => {
  it('label should have a htmlFor prop equals to the used id', () => {
    const { container } = render(<SelectTest id='foo' label='Foo' />)

    expect(container.querySelector('label').getAttribute('for')).toEqual('foo')
    expect(container).toMatchSnapshot()
  })

  it('should use aria-labelledby equals to an auto-assigned label id, if "id" is not provided', () => {
    const { container } = render(<SelectTest label='test' />)

    expect(container.querySelector('label').getAttribute('id')).toEqual('label-abc')
    expect(container.querySelector('input').getAttribute('aria-labelledby')).toEqual('label-abc')
    expect(container).toMatchSnapshot()
  })

  it('should not have aria description if "label" prop is not provided', () => {
    const { container } = render(<SelectTest />)
    expect(container.querySelector('input').getAttribute('aria-labelledby')).toBeFalsy()
  })
})
