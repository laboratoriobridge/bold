import { render } from '@testing-library/react'
import React from 'react'
import { createMockStepperContext } from '../../test/utils/createMockStepperContext'
import { StepContent } from './StepContent'
import { StepperContextProvider } from './useStepperContext'

it('should render correctly', () => {
  const mockContextValue = createMockStepperContext()

  const { container } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepContent>Step content</StepContent>
    </StepperContextProvider>
  )

  expect(container).toMatchSnapshot()
})

it('should accept style prop', () => {
  const mockContextValue = createMockStepperContext()

  const { container } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepContent style={{ background: 'red' }}>Step content</StepContent>
    </StepperContextProvider>
  )

  expect(container).toMatchSnapshot()
})

it('should render children inside div', () => {
  const mockContextValue = createMockStepperContext()

  const { getByTestId } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepContent>
        <span data-testid='child'>Step content div</span>
      </StepContent>
    </StepperContextProvider>
  )

  expect(getByTestId('child')).toHaveTextContent('Step content div')
})

it('should add left padding when direction is vertical', () => {
  const mockContextValue = createMockStepperContext({ direction: 'vertical' })

  const { getByTestId } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepContent data-testid='step-content'>Vertical</StepContent>
    </StepperContextProvider>
  )

  const stepContent = getByTestId('step-content')

  expect(getComputedStyle(stepContent).paddingLeft).toBe('2rem')
})

it('should calculate padding bottom as 0 when direction is horizontal', () => {
  const mockContextValue = createMockStepperContext({ direction: 'horizontal' })

  const { getByTestId } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepContent data-testid='step-content'>Vertical</StepContent>
    </StepperContextProvider>
  )

  const stepContent = getByTestId('step-content')

  expect(getComputedStyle(stepContent).paddingBottom).toBe('0rem')
})

it('should calculate padding bottom when direction is vertical and gap is less than default padding', () => {
  const mockContextValue = createMockStepperContext({ direction: 'vertical', gap: 0.25 })

  const { getByTestId } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepContent data-testid='step-content'>Vertical</StepContent>
    </StepperContextProvider>
  )

  const stepContent = getByTestId('step-content')

  expect(getComputedStyle(stepContent).paddingBottom).toBe('1rem')
})

it('should calculate padding bottom when direction is vertical and gap is equal default padding', () => {
  const mockContextValue = createMockStepperContext({ direction: 'vertical', gap: 1.25 })

  const { getByTestId } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepContent data-testid='step-content'>Vertical</StepContent>
    </StepperContextProvider>
  )

  const stepContent = getByTestId('step-content')

  expect(getComputedStyle(stepContent).paddingBottom).toBe('0rem')
})

it('should calculate padding bottom as 0 when direction is vertical and gap is greater than default padding', () => {
  const mockContextValue = createMockStepperContext({ direction: 'vertical', gap: 2 })

  const { getByTestId } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepContent data-testid='step-content'>Vertical</StepContent>
    </StepperContextProvider>
  )

  const stepContent = getByTestId('step-content')

  expect(getComputedStyle(stepContent).paddingBottom).toBe('0rem')
})
