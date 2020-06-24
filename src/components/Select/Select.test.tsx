import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import en from '../../i18n/locales/en-US'

import { Select } from '../Select'

import { Button } from '../Button'
import { SelectProps } from './Select'
import { DefaultItemType } from './SelectSingle/SelectSingle'
import { SelectDownshiftComponentCustom } from './SelectSingle/SelectDownshiftMenu'

const items: DefaultItemType[] = [
  { value: 1, label: 'Apple' },
  { value: 2, label: 'Banana' },
  { value: 3, label: 'Grape' },
  { value: 4, label: 'Orange' },
  { value: 5, label: 'Pear' },
]

afterEach(jest.clearAllMocks)

function SelectTest(props: Partial<SelectProps<DefaultItemType>>) {
  return <Select<DefaultItemType> items={items} itemToString={(item) => item && item.label} {...props} />
}

describe('single', () => {
  it('should render without errors', () => {
    render(<SelectTest value={items[3]} />)
  })

  it('should warn when value is an array', () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation(() => null)
    render(<SelectTest value={[]} />)
    expect(spy).toMatchSnapshot()
  })
})

describe('multiple', () => {
  it('should render without errors', () => {
    render(SelectTest({ multiple: true, value: [items[4], items[3]] }))
  })

  it('should warn when value is NOT an array', () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation(() => null)
    render(<SelectTest value={items[0]} multiple />)
    expect(spy).toMatchSnapshot()
  })

  it('should throw an error when createNewItem is set together with multiple prop', () => {
    jest.spyOn(console, 'error').mockImplementation(() => undefined)

    expect(() => {
      render(<SelectTest createNewItem={jest.fn()} multiple />)
    }).toThrowErrorMatchingInlineSnapshot(`"Select does not support props 'createNewItem' and 'multiple' together"`)
  })
})

describe('select custom components', () => {
  it('should render only the list', () => {
    const { container } = render(<SelectTest value={items} />)

    const input = container.querySelector('input')
    fireEvent.focus(input)

    const dropdown = container.querySelector('[role="listbox"]')
    expect(dropdown.childElementCount).toBe(1)
    expect(dropdown.firstElementChild.nodeName).toEqual('UL')
  })
  it('should render PrependItem component and list only', () => {
    const { container } = render(
      <SelectTest
        value={items}
        components={{
          PrependItem: (props) => (
            <SelectDownshiftComponentCustom data-testid='prepend-item'>Prepend item</SelectDownshiftComponentCustom>
          ),
        }}
      />
    )

    const input = container.querySelector('input')
    fireEvent.focus(input)

    const dropdown = container.querySelector('[role="listbox"]')
    expect(dropdown.childElementCount).toBe(2)
    expect(dropdown.firstElementChild.getAttribute('data-testid')).toEqual('prepend-item')
    expect(dropdown.lastElementChild.nodeName).toEqual('UL')
  })
  it('should render AppendItem component and list only', () => {
    const { container } = render(
      <SelectTest
        value={items}
        components={{
          AppendItem: (props) => (
            <SelectDownshiftComponentCustom data-testid='append-item'>Prepend item</SelectDownshiftComponentCustom>
          ),
        }}
      />
    )

    const input = container.querySelector('input')
    fireEvent.focus(input)

    const dropdown = container.querySelector('[role="listbox"]')
    expect(dropdown.childElementCount).toBe(2)
    expect(dropdown.firstElementChild.nodeName).toEqual('UL')
    expect(dropdown.lastElementChild.getAttribute('data-testid')).toEqual('append-item')
  })
  it('should render both AppendItem and PrependItem components and list', () => {
    const { container } = render(
      <SelectTest
        value={items}
        components={{
          PrependItem: (props) => (
            <SelectDownshiftComponentCustom data-testid='prepend-item'>Prepend item</SelectDownshiftComponentCustom>
          ),
          AppendItem: (props) => (
            <SelectDownshiftComponentCustom data-testid='append-item'>Append item</SelectDownshiftComponentCustom>
          ),
        }}
      />
    )

    const input = container.querySelector('input')
    fireEvent.focus(input)

    const dropdown = container.querySelector('[role="listbox"]')
    expect(dropdown.childElementCount).toBe(3)
    expect(dropdown.firstElementChild.getAttribute('data-testid')).toEqual('prepend-item')
    expect(dropdown.childNodes[1].nodeName).toEqual('UL')
    expect(dropdown.lastElementChild.getAttribute('data-testid')).toEqual('append-item')
  })
  it('should work with select multiple', () => {
    const { container } = render(
      <SelectTest
        multiple
        value={items}
        components={{
          PrependItem: (props) => (
            <SelectDownshiftComponentCustom data-testid='prepend-item'>Prepend item</SelectDownshiftComponentCustom>
          ),
          AppendItem: (props) => (
            <SelectDownshiftComponentCustom data-testid='append-item'>Append item</SelectDownshiftComponentCustom>
          ),
        }}
      />
    )

    const input = container.querySelector('input')
    fireEvent.focus(input)

    const dropdown = container.querySelector('[role="listbox"]')
    expect(dropdown.childElementCount).toBe(3)
    expect(dropdown.firstElementChild.getAttribute('data-testid')).toEqual('prepend-item')
    expect(dropdown.childNodes[1].nodeName).toEqual('UL')
    expect(dropdown.lastElementChild.getAttribute('data-testid')).toEqual('append-item')
  })
  it('should accept actions inside PrependItem', () => {
    const click = jest.fn()

    const { container, getByTestId } = render(
      <SelectTest
        value={items}
        components={{
          PrependItem: (props) => (
            <SelectDownshiftComponentCustom>
              <Button kind='primary' size='small' data-testid='button' onClick={click}>
                New item
              </Button>
            </SelectDownshiftComponentCustom>
          ),
        }}
      />
    )

    const input = container.querySelector('input')
    fireEvent.focus(input)
    expect(container).toMatchSnapshot()

    fireEvent.click(getByTestId('button'))
    expect(click).toHaveBeenCalledTimes(1)
  })
  it('should accept actions inside AppendItem', () => {
    const click = jest.fn()

    const { container, getByTestId } = render(
      <SelectTest
        value={items}
        components={{
          AppendItem: (props) => (
            <SelectDownshiftComponentCustom>
              <Button kind='primary' size='small' data-testid='button' onClick={click}>
                New item
              </Button>
            </SelectDownshiftComponentCustom>
          ),
        }}
      />
    )

    const input = container.querySelector('input')
    fireEvent.focus(input)
    expect(container).toMatchSnapshot()

    fireEvent.click(getByTestId('button'))
    expect(click).toHaveBeenCalledTimes(1)
  })
})

describe('emptyItem', () => {
  it('should render when items is empty', () => {
    const { container, queryByText } = render(<SelectTest items={[]} />)
    const input = container.querySelector('input')
    fireEvent.focus(input)
    expect(queryByText(en.select.emptyItem)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
  it('should render when items is null', () => {
    const { container, queryByText } = render(<SelectTest items={null} />)
    const input = container.querySelector('input')
    fireEvent.focus(input)
    expect(queryByText(en.select.emptyItem)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
  it('should NOT render when items is set', () => {
    const { container, queryByText } = render(<SelectTest items={items} />)
    const input = container.querySelector('input')
    fireEvent.focus(input)
    expect(queryByText(en.select.emptyItem)).toBeFalsy()
  })
  it('should NOT render when createNewItem is set', () => {
    const createNewItem = jest.fn((text) => ({ value: -1, label: text }))
    const { queryByText } = render(<SelectTest createNewItem={createNewItem} isOpen />)
    expect(queryByText(en.select.emptyItem)).toBeFalsy()
  })
  it('should NOT render when loading is true', () => {
    const { container, queryByText } = render(<SelectTest loading={true} />)
    const input = container.querySelector('input')
    fireEvent.focus(input)
    expect(queryByText(en.select.emptyItem)).toBeFalsy()
  })
})
