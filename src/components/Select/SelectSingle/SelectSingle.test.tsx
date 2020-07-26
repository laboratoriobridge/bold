import { fireEvent, render } from '@testing-library/react'
import { resetIdCounter } from 'downshift'
import React from 'react'
import en from '../../../i18n/locales/en-US'
import { DefaultItemType, SelectSingle, SelectSingleProps } from './SelectSingle'

jest.mock('../../../util/string')

const items: DefaultItemType[] = [
  { value: 1, label: 'Apple' },
  { value: 2, label: 'Banana' },
  { value: 3, label: 'Grape' },
  { value: 4, label: 'Orange' },
  { value: 5, label: 'Pear' },
]

function SelectTest(props: Partial<SelectSingleProps>) {
  return (
    <SelectSingle
      items={items}
      itemToString={(item) => item && item.label}
      placeholder='Select a value...'
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
  const { container } = render(<SelectTest value={items[4]} />)
  expect(container.querySelector('input').value).toEqual(items[4].label)
})

it('should open the select menu when input is focused', () => {
  const { container } = render(<SelectTest />)
  expect(container.querySelector('ul')).toBeFalsy()
  fireEvent.focus(container.querySelector('input'))
  expect(container.querySelector('ul')).toBeTruthy()
})

it('should respect the specified menu min-width', () => {
  const { container } = render(<SelectTest menuMinWidth={577} isOpen={true} />)
  expect(container).toMatchSnapshot()
})

it('should call the onChange event when an item is clicked', () => {
  const onChange = jest.fn()
  const { getByText } = render(<SelectTest onChange={onChange} isOpen={true} />)
  expect(onChange).not.toHaveBeenCalled()
  fireEvent.click(getByText(items[2].label))
  expect(onChange).toHaveBeenLastCalledWith(items[2], expect.anything())
})

it('should call the onChange event with target.value empty when text input is cleared', () => {
  const onChange = jest.fn()
  const { container } = render(<SelectTest onChange={onChange} value={items[0]} />)

  fireEvent.change(container.querySelector('input'), { target: { value: '' } })
  expect(onChange).toHaveBeenLastCalledWith(null, expect.anything())
})

it('should render current value and allow changes via prop', () => {
  const { container, rerender } = render(<SelectTest />)
  const input = container.querySelector('input')
  expect(input.value).toEqual('')
  rerender(<SelectTest value={{ value: 42, label: 'Foo' }} />)
  expect(input.value).toEqual('Foo')
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

it('should open menu and focus input when input icon is clicked', () => {
  const { container } = render(<SelectTest />)
  const iconButton = container.querySelector('button')
  const input = container.querySelector('input')
  expect(document.activeElement).toEqual(document.body)
  fireEvent.click(iconButton)
  expect(container.querySelector('ul')).toBeTruthy()
  expect(document.activeElement).toEqual(input)
  fireEvent.click(iconButton)
  expect(container.querySelector('ul')).toBeFalsy()
})

describe('clear button', () => {
  it('should clear the input value', () => {
    const { container, getByTitle } = render(<SelectTest value={items[0]} />)
    const input = container.querySelector('input')
    const clearButton = getByTitle('Clear')

    expect(input.value).toEqual(items[0].label)

    fireEvent.click(clearButton)

    expect(input.value).toEqual('')
  })
  it('should call onChange with null value', () => {
    const onChange = jest.fn()
    const { getByTitle } = render(<SelectTest onChange={onChange} value={items[0]} />)
    const clearButton = getByTitle('Clear')

    expect(onChange).not.toHaveBeenCalled()
    fireEvent.click(clearButton)
    expect(onChange).toHaveBeenLastCalledWith(null, expect.anything())
  })
  it('should call prop onClear if exists', () => {
    const onClear = jest.fn()
    const { getByTitle } = render(<SelectTest onClear={onClear} value={items[0]} />)
    const clearButton = getByTitle('Clear')

    expect(onClear).not.toHaveBeenCalled()
    fireEvent.click(clearButton)
    expect(onClear).toHaveBeenCalled()
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

describe('createNewItem', () => {
  it('should allow selectedItem to become whatever is typed on text input', () => {
    const createNewItem = jest.fn((text) => ({ value: -1, label: text }))
    const change = jest.fn()
    const { container } = render(<SelectTest id='foo' createNewItem={createNewItem} onChange={change} />)

    fireEvent.change(container.querySelector('input'), { target: { value: 'my item' } })

    expect(createNewItem).toHaveBeenCalledWith('my item')
    expect(change).toHaveBeenCalledWith({ value: -1, label: 'my item' }, expect.anything())
  })
  it('should render CreateItemSelect message', () => {
    const createNewItem = jest.fn((text) => ({ value: -1, label: text }))
    const { queryByText } = render(<SelectTest id='foo' createNewItem={createNewItem} isOpen />)
    expect(queryByText(en.select.createItem)).toBeTruthy()
  })
  it('should NOT render CreateItemSelect message when suggestion list is empty', () => {
    const createNewItem = jest.fn((text) => ({ value: -1, label: text }))
    const { container, queryByText } = render(<SelectTest id='foo' createNewItem={createNewItem} isOpen />)
    fireEvent.change(container.querySelector('input'), { target: { value: 'empty suggestion' } })
    expect(queryByText(en.select.createItem)).toBeFalsy()
  })
  it('should NOT open select when focus by default', () => {
    const createNewItem = jest.fn((text) => ({ value: -1, label: text }))
    const { container } = render(<SelectTest id='foo' createNewItem={createNewItem} />)
    fireEvent.focus(container.querySelector('input'))
    expect(container.querySelector('ul')).toBeFalsy()
  })
  it('should open select when focus and openOnFocus is true', () => {
    const createNewItem = jest.fn((text) => ({ value: -1, label: text }))
    const { container } = render(<SelectTest id='foo' createNewItem={createNewItem} openOnFocus />)
    fireEvent.focus(container.querySelector('input'))
    expect(container.querySelector('ul')).toBeTruthy()
  })
  it('should call "createNewItem" only when change type is "changeInput"', async () => {
    const createNewItem = jest.fn((text) => ({ label: text } as any))
    const { rerender } = render(
      <SelectTest id='foo' createNewItem={createNewItem} value={items[0]} onChange={jest.fn()} />
    )
    rerender(
      <SelectTest id='foo' createNewItem={createNewItem} value={{ ...items[0], label: 'a' }} onChange={jest.fn()} />
    )
    expect(createNewItem).not.toHaveBeenCalled()
  })
  it('should NOT render when loading is true', () => {
    const createNewItem = jest.fn((text) => ({ value: -1, label: text }))
    const { queryByText } = render(<SelectTest createNewItem={createNewItem} isOpen loading={true} />)
    expect(queryByText(en.select.createItem)).toBeFalsy()
  })
  it('should NOT render when items is empty', () => {
    const createNewItem = jest.fn((text) => ({ value: -1, label: text }))
    const { queryByText } = render(<SelectTest createNewItem={createNewItem} isOpen items={[]} />)
    expect(queryByText(en.select.createItem)).toBeFalsy()
  })
  it('should NOT render when items is NULL', () => {
    const createNewItem = jest.fn((text) => ({ value: -1, label: text }))
    const { queryByText } = render(<SelectTest createNewItem={createNewItem} isOpen items={null} />)
    expect(queryByText(en.select.createItem)).toBeFalsy()
  })
})
