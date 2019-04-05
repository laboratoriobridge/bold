import React from 'react'
import { fireEvent, render } from 'react-testing-library'

import { Button } from '../Button'

import { Dropdown } from './Dropdown'
import { DropdownItem } from './DropdownItem'
import { DropdownMenu } from './DropdownMenu'

// tslint:disable jsx-no-lambda

const createDropdown = () => (
  <Dropdown renderTarget={({ ref }) => <Button innerRef={ref}>Menu</Button>}>
    {() => (
      <DropdownMenu>
        <DropdownItem>Item #1</DropdownItem>
        <DropdownItem>Item #2</DropdownItem>
      </DropdownMenu>
    )}
  </Dropdown>
)

it('should render correctly', () => {
  render(createDropdown())

  expect(document.body).toMatchSnapshot()
})

it('should open menu on click', () => {
  const { getByText } = render(createDropdown())

  fireEvent.click(getByText('Menu'))

  expect(document.body).toMatchSnapshot()
})
