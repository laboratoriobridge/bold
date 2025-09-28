import { render } from '@testing-library/react'
import React from 'react'

import { createMockStepperContext } from '../../test/utils/createMockStepperContext'
import { Step } from './Step'
import { Stepper } from './Stepper'
import { StepperContextProvider } from './useStepperContext'

it('should render correctly when status is incompleted', () => {
  const mockContextValue = createMockStepperContext()

  const { container } = render(
    <StepperContextProvider value={mockContextValue}>
      <Step status='incompleted' title='Incompleted step' />
    </StepperContextProvider>
  )

  expect(container).toMatchSnapshot()
})

it('should render correctly when status is completed', () => {
  const mockContextValue = createMockStepperContext()

  const { container } = render(
    <StepperContextProvider value={mockContextValue}>
      <Step status='completed' title='Completed step' />
    </StepperContextProvider>
  )

  expect(container).toMatchSnapshot()
})

it('should render correctly when status is active', () => {
  const mockContextValue = createMockStepperContext()

  const { container } = render(
    <StepperContextProvider value={mockContextValue}>
      <Step status='active' title='Active step' />
    </StepperContextProvider>
  )

  expect(container).toMatchSnapshot()
})

it('should render correctly when status is inactive', () => {
  const mockContextValue = createMockStepperContext()

  const { container } = render(
    <StepperContextProvider value={mockContextValue}>
      <Step status='inactive' title='Inactive step' />
    </StepperContextProvider>
  )

  expect(container).toMatchSnapshot()
})

it('should accept "style" prop', () => {
  const mockContextValue = createMockStepperContext()

  const { container } = render(
    <StepperContextProvider value={mockContextValue}>
      <Step style={{ color: 'red' }} title='Step red' />
    </StepperContextProvider>
  )

  expect(container).toMatchSnapshot()
})

it('should allow override of components', () => {
  const mockContextValue = createMockStepperContext()
  const RootOverride = (props) => <span id='root' {...props} />
  const IconOverride = (props) => <span id='icon' {...props} />

  const { container } = render(
    <StepperContextProvider value={mockContextValue}>
      <Step
        title='Step with overrides'
        overrides={{
          Root: RootOverride,
          Icon: IconOverride,
        }}
      />
    </StepperContextProvider>
  )
  expect(container).toMatchSnapshot()
})

it('should not render connector when is last step', async () => {
  const { container } = render(
    <Stepper>
      <Step title='First step' data-testid='first-step' />
      <Step title='Second step' data-testid='second-step' />
      <Step title='Last step' data-testid='last-step' />
    </Stepper>
  )

  expect(container.querySelector('[data-testid="first-step"] [data-testid="step-connector"]')).toBeTruthy()
  expect(container.querySelector('[data-testid="second-step"] [data-testid="step-connector"]')).toBeTruthy()
  expect(container.querySelector('[data-testid="last-step"] [data-testid="step-connector"]')).toBeFalsy()
})
