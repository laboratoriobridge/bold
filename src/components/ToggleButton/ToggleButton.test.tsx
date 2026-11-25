import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { ToggleButton } from './ToggleButton'

it('should render correctly', () => {
  const { container } = render(<ToggleButton>Button</ToggleButton>)
  expect(container).toMatchSnapshot()
})

it('should render correctly when selected', () => {
  const { container } = render(<ToggleButton defaultSelected>Button</ToggleButton>)
  expect(container).toMatchSnapshot()
})

it('should render correctly with ghost skin and colors', () => {
  const { container } = render(
    <>
      <ToggleButton skin='ghost' color='red' defaultSelected>
        Red
      </ToggleButton>
      <ToggleButton skin='ghost' color='green' defaultSelected>
        Green
      </ToggleButton>
    </>
  )
  expect(container).toMatchSnapshot()
})

it('should toggle when clicked (uncontrolled)', () => {
  const onChange = jest.fn()
  const { getByRole } = render(<ToggleButton onChange={onChange}>Button</ToggleButton>)
  const button = getByRole('button')

  expect(button.getAttribute('aria-pressed')).toEqual('false')

  fireEvent.click(button)
  expect(button.getAttribute('aria-pressed')).toEqual('true')
  expect(onChange).toHaveBeenLastCalledWith(true)

  fireEvent.click(button)
  expect(button.getAttribute('aria-pressed')).toEqual('false')
  expect(onChange).toHaveBeenLastCalledWith(false)
})

it('should not change by itself when controlled', () => {
  const onChange = jest.fn()
  const { getByRole, rerender } = render(
    <ToggleButton selected={false} onChange={onChange}>
      Button
    </ToggleButton>
  )
  const button = getByRole('button')

  fireEvent.click(button)
  expect(onChange).toHaveBeenCalledWith(true)
  expect(button.getAttribute('aria-pressed')).toEqual('false')

  rerender(
    <ToggleButton selected onChange={onChange}>
      Button
    </ToggleButton>
  )
  expect(button.getAttribute('aria-pressed')).toEqual('true')
})

it('should call onClick', () => {
  const onClick = jest.fn()
  const { getByRole } = render(<ToggleButton onClick={onClick}>Button</ToggleButton>)
  fireEvent.click(getByRole('button'))
  expect(onClick).toHaveBeenCalledTimes(1)
})

it('should not toggle when onClick prevents default', () => {
  const onChange = jest.fn()
  const { getByRole } = render(
    <ToggleButton onClick={(e) => e.preventDefault()} onChange={onChange}>
      Button
    </ToggleButton>
  )
  fireEvent.click(getByRole('button'))
  expect(onChange).not.toHaveBeenCalled()
  expect(getByRole('button').getAttribute('aria-pressed')).toEqual('false')
})

it('should be removed from tab order and ignore clicks when disabled', () => {
  const onChange = jest.fn()
  const { getByRole } = render(
    <ToggleButton disabled onChange={onChange}>
      Button
    </ToggleButton>
  )
  const button = getByRole('button')

  expect(button.getAttribute('disabled')).not.toBeNull()
  expect(button.getAttribute('tabindex')).toEqual('-1')

  fireEvent.click(button)
  expect(onChange).not.toHaveBeenCalled()
})

it('should render icon-only variant with aria-label', () => {
  const { getByRole, container } = render(<ToggleButton icon='bold' aria-label='Bold' />)
  expect(getByRole('button').getAttribute('aria-label')).toEqual('Bold')
  expect(container.querySelector('svg')).not.toBeNull()
  expect(container).toMatchSnapshot()
})

it('should show a tooltip with the aria-label on icon-only variant', () => {
  const { getByRole } = render(<ToggleButton icon='bold' aria-label='Bold' />)
  expect(getByRole('button').getAttribute('title')).toEqual('Bold')
})

it('should use selectedIcon when selected', () => {
  const { container, getByRole } = render(
    <ToggleButton icon='gearOutline' selectedIcon='gearFilled' aria-label='Settings' />
  )
  const before = container.querySelector('svg').innerHTML

  fireEvent.click(getByRole('button'))
  const after = container.querySelector('svg').innerHTML

  expect(after).not.toEqual(before)
})

it('should accept the tooltip prop and HTML button props', () => {
  const { getByRole } = render(
    <ToggleButton tooltip='Some tip' id='test'>
      Button
    </ToggleButton>
  )
  expect(getByRole('button').getAttribute('id')).toEqual('test')
  expect(getByRole('button').getAttribute('title')).toEqual('Some tip')
})
