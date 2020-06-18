import { fireEvent, render } from '@testing-library/react'
import { resetIdCounter } from 'downshift'
import React from 'react'
import { HFlow } from '../../HFlow'
import { Button } from '../../Button'
import { Text } from '../../Text'
import { Select, SelectProps } from './../Select'
import { DefaultItemType } from './SelectSingle'
import { SelectDownshiftComponentCustom } from './SelectDownshiftMenu'

jest.mock('../../../util/string')

const items: DefaultItemType[] = [
  { value: 1, label: 'Apple' },
  { value: 2, label: 'Banana' },
  { value: 3, label: 'Grape' },
  { value: 4, label: 'Orange' },
  { value: 5, label: 'Pear' },
]

beforeEach(() => resetIdCounter())

function SelectTest(props: Partial<SelectProps>) {
  return <Select items={items} itemToString={(item) => item && item.label} placeholder='Select a value...' {...props} />
}

describe('downshift', () => {
  it('should render the menu as a DIV with the list inside as a UL', () => {
    const { container } = render(<SelectTest value={items} />)

    const input = container.querySelector('input')
    fireEvent.focus(input)

    const dropdown = container.querySelector('[role="listbox"]')
    expect(dropdown.nodeName).toEqual('DIV')
    expect(dropdown.firstElementChild.nodeName).toEqual('UL')
  })
  it('should render the menu with width equal or greater than 1000px', () => {
    const { container } = render(<SelectTest menuMinWidth={1000} value={items} />)

    const input = container.querySelector('input')
    fireEvent.focus(input)

    const styleDropdown = container.querySelector('[role="listbox"]').getAttribute('style')
    expect(styleDropdown).toContain('min-width: 1000px')
  })
})

describe('SelectDownshiftComponentCustom', () => {
  it('should render correctly', () => {
    const { container } = render(<SelectDownshiftComponentCustom>Prepend Item</SelectDownshiftComponentCustom>)
    expect(container).toMatchSnapshot()
  })
  it('should accept actions inside children prop', () => {
    const click = jest.fn()

    const { container } = render(
      <SelectDownshiftComponentCustom>
        <HFlow alignItems='center' justifyContent='space-between'>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quod modi, inventore quasi aut sed beatae
            corrupti repellendus minima voluptatem debitis, quibusdam repudiandae totam voluptatum odit.
          </Text>
          <Button kind='primary' size='small' onClick={click}>
            New item
          </Button>
        </HFlow>
      </SelectDownshiftComponentCustom>
    )

    expect(container).toMatchSnapshot()

    fireEvent.click(container.querySelector('button'))
    expect(click).toHaveBeenCalledTimes(1)
  })
})
