import { render } from '@testing-library/react'
import React from 'react'

import { Stepper } from './Stepper'
import { StepperContextValue, useStepperContext } from './useStepperContext'
import { Step } from './Step'

it('should render correctly', () => {
  const { container } = render(<Stepper>Stepper content</Stepper>)
  expect(container).toMatchSnapshot()
})

it('should accept "style" prop', () => {
  const { container } = render(<Stepper style={{ color: 'red' }}>Stepper content</Stepper>)
  expect(container).toMatchSnapshot()
})

it('should allow override of "Root" component', () => {
  const RootOverride = (props) => <span id='root' {...props} />
  const { container } = render(<Stepper overrides={{ Root: RootOverride }}>Stepper content</Stepper>)
  expect(container.querySelector('#root')).toBeTruthy()
  expect(container.querySelector('#root').textContent).toEqual('Stepper content')
})

it('should render with vertical direction and apply correct grid styles', () => {
  const { getByTestId } = render(
    <Stepper direction='vertical' data-testid='stepper'>
      <div />
    </Stepper>
  )

  const stepper = getByTestId('stepper')

  expect(getComputedStyle(stepper).height).toBe('100%')
})

it('should apply gap styles when gap is provided', () => {
  const { getByTestId } = render(
    <Stepper gap={2} data-testid='stepper'>
      <div />
    </Stepper>
  )

  const stepper = getByTestId('stepper')

  expect(getComputedStyle(stepper).gap).toBe('2rem')
})

it('should correctly compute number of steps and template columns', () => {
  const Step = ({ children }: any) => <div>{children}</div>

  const { getByTestId } = render(
    <Stepper direction='horizontal' data-testid='stepper'>
      <Step />
      <Step />
      <Step />
    </Stepper>
  )

  const stepper = getByTestId('stepper')

  expect(getComputedStyle(stepper).gridTemplateColumns).toBe('repeat(3,1fr)')
})

it('should increment stepCounterRef when registerStep is called', () => {
  let contextValue!: StepperContextValue

  const Consumer = () => {
    contextValue = useStepperContext()
    return null
  }

  render(
    <Stepper>
      <Consumer />
    </Stepper>
  )

  const idx1 = contextValue.registerStep()
  const idx2 = contextValue.registerStep()
  expect(idx1).toBe(0)
  expect(idx2).toBe(1)
})

it('should return correct next step status', () => {
  let contextValue!: StepperContextValue

  const Consumer = () => {
    contextValue = useStepperContext()
    return null
  }

  render(
    <Stepper>
      <Step status='active' title='Active step' />
      <Step status='completed' title='Completed step' />
      <Consumer />
    </Stepper>
  )

  // next step of index 0 is status of index 1
  expect(contextValue.getNextStepStatus(0)).toBe('completed')
})
