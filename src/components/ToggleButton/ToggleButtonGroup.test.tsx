import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { ToggleButton } from './ToggleButton'
import { ToggleButtonGroup } from './ToggleButtonGroup'

const pressed = (el: Element) => el.getAttribute('aria-pressed')

it('should render correctly', () => {
  const { container } = render(
    <ToggleButtonGroup aria-label='Group' defaultValue={['a']}>
      <ToggleButton value='a'>A</ToggleButton>
      <ToggleButton value='b'>B</ToggleButton>
    </ToggleButtonGroup>
  )
  expect(container).toMatchSnapshot()
})

it('should allow only one selected button by default', () => {
  const onChange = jest.fn()
  const { getAllByRole } = render(
    <ToggleButtonGroup onChange={onChange}>
      <ToggleButton value='a'>A</ToggleButton>
      <ToggleButton value='b'>B</ToggleButton>
    </ToggleButtonGroup>
  )
  const [a, b] = getAllByRole('button')

  fireEvent.click(a)
  expect(onChange).toHaveBeenLastCalledWith(['a'])
  expect([pressed(a), pressed(b)]).toEqual(['true', 'false'])

  fireEvent.click(b)
  expect(onChange).toHaveBeenLastCalledWith(['b'])
  expect([pressed(a), pressed(b)]).toEqual(['false', 'true'])

  fireEvent.click(b)
  expect(onChange).toHaveBeenLastCalledWith([])
  expect([pressed(a), pressed(b)]).toEqual(['false', 'false'])
})

it('should allow multiple selected buttons when "multiple"', () => {
  const onChange = jest.fn()
  const { getAllByRole } = render(
    <ToggleButtonGroup multiple onChange={onChange}>
      <ToggleButton value='a'>A</ToggleButton>
      <ToggleButton value='b'>B</ToggleButton>
    </ToggleButtonGroup>
  )
  const [a, b] = getAllByRole('button')

  fireEvent.click(a)
  fireEvent.click(b)
  expect(onChange).toHaveBeenLastCalledWith(['a', 'b'])
  expect([pressed(a), pressed(b)]).toEqual(['true', 'true'])

  fireEvent.click(a)
  expect(onChange).toHaveBeenLastCalledWith(['b'])
})

it('should be controllable', () => {
  const onChange = jest.fn()
  const { getAllByRole, rerender } = render(
    <ToggleButtonGroup value={['a']} onChange={onChange}>
      <ToggleButton value='a'>A</ToggleButton>
      <ToggleButton value='b'>B</ToggleButton>
    </ToggleButtonGroup>
  )
  const [a, b] = getAllByRole('button')

  fireEvent.click(b)
  expect(onChange).toHaveBeenCalledWith(['b'])
  expect([pressed(a), pressed(b)]).toEqual(['true', 'false'])

  rerender(
    <ToggleButtonGroup value={['b']} onChange={onChange}>
      <ToggleButton value='a'>A</ToggleButton>
      <ToggleButton value='b'>B</ToggleButton>
    </ToggleButtonGroup>
  )
  expect([pressed(a), pressed(b)]).toEqual(['false', 'true'])
})

it('should disable all buttons when the group is disabled', () => {
  const { getAllByRole } = render(
    <ToggleButtonGroup disabled>
      <ToggleButton value='a'>A</ToggleButton>
      <ToggleButton value='b'>B</ToggleButton>
    </ToggleButtonGroup>
  )
  getAllByRole('button').forEach((button) => expect(button.getAttribute('disabled')).not.toBeNull())
})

it('should have a roving tabindex that skips disabled buttons', () => {
  const { getByRole, getAllByRole } = render(
    <ToggleButtonGroup>
      <ToggleButton value='a'>A</ToggleButton>
      <ToggleButton value='b' disabled>
        B
      </ToggleButton>
      <ToggleButton value='c'>C</ToggleButton>
    </ToggleButtonGroup>
  )
  const group = getByRole('group')
  const [a, b, c] = getAllByRole('button')

  expect(a.getAttribute('tabindex')).toEqual('0')
  expect(b.getAttribute('tabindex')).toEqual('-1')
  expect(c.getAttribute('tabindex')).toEqual('-1')

  a.focus()
  fireEvent.keyDown(group, { key: 'ArrowRight' })
  expect(document.activeElement).toBe(c)
  expect(c.getAttribute('tabindex')).toEqual('0')
  expect(a.getAttribute('tabindex')).toEqual('-1')

  // wraps around
  fireEvent.keyDown(group, { key: 'ArrowRight' })
  expect(document.activeElement).toBe(a)

  fireEvent.keyDown(group, { key: 'ArrowLeft' })
  expect(document.activeElement).toBe(c)
})

it('should keep the group tabindex when the selection changes', () => {
  const { getAllByRole } = render(
    <ToggleButtonGroup>
      <ToggleButton value='a'>A</ToggleButton>
      <ToggleButton value='b'>B</ToggleButton>
    </ToggleButtonGroup>
  )
  const [a, b] = getAllByRole('button')

  b.focus()
  fireEvent.click(b)
  expect(b.getAttribute('tabindex')).toEqual('0')
  expect(a.getAttribute('tabindex')).toEqual('-1')
})

it('should pass skin and color down to buttons', () => {
  const { container } = render(
    <ToggleButtonGroup skin='ghost' color='red' defaultValue={['a']}>
      <ToggleButton value='a'>A</ToggleButton>
    </ToggleButtonGroup>
  )
  expect(container).toMatchSnapshot()
})

it('should accept HTML div props', () => {
  const { container } = render(<ToggleButtonGroup id='test' />)
  expect(container.querySelector('div').getAttribute('id')).toEqual('test')
})
