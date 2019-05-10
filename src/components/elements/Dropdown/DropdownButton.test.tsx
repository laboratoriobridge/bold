import React from 'react'
import { fireEvent, render } from 'react-testing-library'

import * as stringUtils from '../../../util/string'
import { Icon } from '../Icon'

import { DropdownButton, DropdownButtonProps } from './DropdownButton'
;(stringUtils as any).randomStr = jest.fn(() => 'abc')

const createDropdownButton = (props: Partial<DropdownButtonProps> = {}) => (
  <DropdownButton
    size='small'
    skin='ghost'
    items={[{ content: <span>Item #1</span> }, { content: <span>Item #2</span> }]}
    {...props}
  >
    <Icon icon='dots' />
  </DropdownButton>
)

it('should render correctly when closed', () => {
  render(createDropdownButton())
  expect(document.body).toMatchSnapshot()
})

it('should accept popper props', () => {
  render(createDropdownButton({ popperProps: { placement: 'left-end' } }))
})

it('should open the dropdown on click', async () => {
  const { container } = render(createDropdownButton())
  const button = container.querySelector('button')

  expect(document.body.querySelector('ul')).toBeFalsy()
  fireEvent.click(button)
  expect(document.body.querySelector('ul')).toBeTruthy()
})

it('should render correctly when opened', () => {
  const { container } = render(createDropdownButton())
  const button = container.querySelector('button')
  fireEvent.click(button)
  expect(document.body).toMatchSnapshot()
})
