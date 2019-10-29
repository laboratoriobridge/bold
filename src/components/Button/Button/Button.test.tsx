import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import waait from 'waait'

import { Icon } from '../../Icon'

import { Button } from './Button'

it('should render correctly with label', () => {
  const { container } = render(<Button>Button</Button>)
  expect(container).toMatchSnapshot()
})

it('should have the "button" type to avoid default submit behaviour inside forms', () => {
  const { container } = render(<Button>Button</Button>)
  expect(container.querySelector('button').getAttribute('type')).toEqual('button')
})

it('should render correctly with icon', () => {
  const { container } = render(
    <Button>
      <Icon icon='adjust' />
    </Button>
  )
  expect(container).toMatchSnapshot()
})

it('should render the default skin', () => {
  expect(
    render(
      <Button skin='default' kind='normal'>
        Button
      </Button>
    ).container
  ).toMatchSnapshot()
  expect(
    render(
      <Button skin='default' kind='primary'>
        Button
      </Button>
    ).container
  ).toMatchSnapshot()
  expect(
    render(
      <Button skin='default' kind='danger'>
        Button
      </Button>
    ).container
  ).toMatchSnapshot()
})

it('should render the ghost skin', () => {
  expect(
    render(
      <Button skin='ghost' kind='normal'>
        Button
      </Button>
    ).container
  ).toMatchSnapshot()
  expect(
    render(
      <Button skin='ghost' kind='primary'>
        Button
      </Button>
    ).container
  ).toMatchSnapshot()
  expect(
    render(
      <Button skin='ghost' kind='danger'>
        Button
      </Button>
    ).container
  ).toMatchSnapshot()
})

it('should render the outline skin', () => {
  expect(
    render(
      <Button skin='outline' kind='normal'>
        Button
      </Button>
    ).container
  ).toMatchSnapshot()
  expect(
    render(
      <Button skin='outline' kind='primary'>
        Button
      </Button>
    ).container
  ).toMatchSnapshot()
  expect(
    render(
      <Button skin='outline' kind='danger'>
        Button
      </Button>
    ).container
  ).toMatchSnapshot()
})

it('should have a "loading" animation when onClick return is a Promise', () => {
  const delayedFunction = () => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 10)
    })
  }

  const { container } = render(<Button onClick={delayedFunction}>Button</Button>)
  const button = container.querySelector('button')
  expect(button.getAttribute('data-loading')).toBeFalsy()

  fireEvent.click(button)
  expect(button.getAttribute('data-loading')).toEqual('true')
})

it('shoud not emit a "setState while unmounted" react warning when component is unmounted while loading', async () => {
  const delayedFunction = () => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 10)
    })
  }

  const { container, unmount } = render(<Button onClick={delayedFunction}>Button</Button>)
  const button = container.querySelector('button')

  fireEvent.click(button)
  unmount()

  await waait(20)
})

it('should NOT have animation when onClick return is not a Promise', () => {
  const func = () => undefined
  const { container } = render(<Button onClick={func}>Button</Button>)
  const button = container.querySelector('button')
  expect(button.getAttribute('data-loading')).toBeFalsy()

  fireEvent.click(button)
  expect(button.getAttribute('data-loading')).toBeFalsy()
})

it('should accept the loading prop', () => {
  const { container } = render(<Button loading={true}>Button</Button>)
  expect(container).toMatchSnapshot()
})

it('should disable click event when loading', () => {
  const click = jest.fn()
  const { container, rerender } = render(
    <Button onClick={click} loading={true}>
      Button
    </Button>
  )
  fireEvent.click(container.querySelector('button'))
  expect(click).not.toHaveBeenCalled()

  rerender(
    <Button onClick={click} loading={false}>
      Button
    </Button>
  )
  fireEvent.click(container.querySelector('button'))
  expect(click).toHaveBeenCalledTimes(1)
})

it('shoud allow override of the "component" prop', () => {
  const { container } = render(<Button component='a'>A link button</Button>)
  expect(container).toMatchSnapshot()
})
