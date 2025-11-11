import React from 'react'
import { render } from '@testing-library/react'
import { createMockStepperContext } from '../../test/utils/createMockStepperContext'
import { StepperContextProvider, useStepperContext } from './useStepperContext'

function TestComponent() {
  const { direction, gap } = useStepperContext()

  return (
    <div>
      <span data-testid='stepper-context-direction-value'>{direction}</span>
      <span data-testid='stepper-context-gap-value'>{gap}</span>
    </div>
  )
}

it('should return provided context values when inside ModalContextProvider', () => {
  const mockContextValue = createMockStepperContext({ direction: 'horizontal', gap: 10 })

  const { getByTestId } = render(
    <StepperContextProvider value={mockContextValue}>
      <TestComponent />
    </StepperContextProvider>
  )

  expect(getByTestId('stepper-context-direction-value').textContent).toBe('horizontal')
  expect(getByTestId('stepper-context-gap-value').textContent).toBe('10')
})

it('should throw an error when used outside StepperContextProvider', () => {
  const renderWithoutProvider = () => render(<TestComponent />)

  expect(renderWithoutProvider).toThrow(
    'Stepper subcomponents (like Step, StepLabel, StepConnector and StepContent) must be used inside <Stepper>'
  )
})
