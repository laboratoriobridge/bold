import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { LocaleContext } from '../../i18n'
import ptBr from '../../i18n/locales/pt-BR'

import { Alert } from './Alert'

jest.mock('../../util/string')

const click = jest.fn()
const enter = jest.fn()
const leave = jest.fn()

it('should render correctly', () => {
  const { container } = render(
    <div>
      <Alert type='info' onCloseClick={click}>
        Information.
      </Alert>
      <Alert type='success' onCloseClick={click}>
        Success message.
      </Alert>
      <Alert type='warning' onCloseClick={click}>
        Alert message.
      </Alert>
      <Alert type='danger' onCloseClick={click}>
        Error message.
      </Alert>
    </div>
  )
  expect(container).toMatchSnapshot()
})

it('should render correctly when inline', () => {
  const { container } = render(
    <div>
      <Alert type='info' inline>
        Information.
      </Alert>
      <Alert type='success' inline>
        Success message.
      </Alert>
      <Alert type='warning' inline>
        Alert message.
      </Alert>
      <Alert type='danger' inline>
        Error message.
      </Alert>
    </div>
  )
  expect(container).toMatchSnapshot()
})

it('should allow styles override', () => {
  const { container } = render(
    <Alert type='info' styles={{ wrapper: { color: 'red' }, container: { color: 'blue' } }}>
      Information.
    </Alert>
  )
  expect(container).toMatchSnapshot()
})

it('should have close button if onCloseClick is defined', () => {
  const { container } = render(
    <Alert type='info' onCloseClick={click}>
      Information.
    </Alert>
  )
  expect(container.querySelectorAll('button').length).toEqual(1)
})

it('should NOT have close button if onCloseClick is undefined', () => {
  const { container } = render(<Alert type='info'>Information.</Alert>)
  expect(container.querySelectorAll('button').length).toEqual(0)
})

it('should call onCloseClick prop when button is clicked', () => {
  const { container } = render(
    <Alert type='info' onCloseClick={click}>
      Information.
    </Alert>
  )
  fireEvent.click(container.querySelector('button'))
  expect(click).toHaveBeenCalled()
})

it('should call function on mouse enter', () => {
  const { container } = render(
    <Alert type='info' onMouseEnter={enter}>
      Information.
    </Alert>
  )
  fireEvent.mouseEnter(container.querySelector('[role="alert"]'))
  expect(enter).toHaveBeenCalled()
})

it('should call function on mouse leave', () => {
  const { container } = render(
    <Alert type='info' onMouseLeave={leave}>
      Information.
    </Alert>
  )
  fireEvent.mouseLeave(container.querySelector('[role="alert"]'))
  expect(leave).toHaveBeenCalled()
})

it('should allow message customization via locale context', () => {
  const { container } = render(
    <LocaleContext.Provider value={ptBr}>
      <Alert type='warning' onCloseClick={click}>
        Information.
      </Alert>
    </LocaleContext.Provider>
  )
  expect(container.querySelector('button').getAttribute('aria-label')).toEqual(ptBr.alert.close)
})
