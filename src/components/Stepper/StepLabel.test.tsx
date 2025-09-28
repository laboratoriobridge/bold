import { render } from '@testing-library/react'
import React from 'react'
import { createMockStepperContext } from '../../test/utils/createMockStepperContext'
import { StepLabel } from './StepLabel'
import { StepperContextProvider } from './useStepperContext'

it('should render correctly', () => {
  const mockContextValue = createMockStepperContext()

  const { container } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepLabel status='active' title='Step label' />
    </StepperContextProvider>
  )
  expect(container).toMatchSnapshot()
})

it('should should accept style prop', () => {
  const mockContextValue = createMockStepperContext()

  const { container } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepLabel status='active' title='Step label' style={{ color: 'red' }} />
    </StepperContextProvider>
  )

  expect(container).toMatchSnapshot()
})

it('should render title text', () => {
  const mockContextValue = createMockStepperContext()

  const { getByText } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepLabel status='active' title='Step 1' />
    </StepperContextProvider>
  )

  expect(getByText('Step 1')).toBeInTheDocument()
})

it('should render subtitle when provided', () => {
  const mockContextValue = createMockStepperContext()

  const { getByText } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepLabel status='active' title='Step 1' subtitle='Optional subtitle' />
    </StepperContextProvider>
  )

  expect(getByText('Optional subtitle')).toBeInTheDocument()
})

it('should apply primary color when status is active', () => {
  const mockContextValue = createMockStepperContext()

  const { getByText } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepLabel status='active' title='Step 1' />
    </StepperContextProvider>
  )

  const stepLabel = getByText('Step 1')

  expect(getComputedStyle(stepLabel).color).toBe('rgb(0, 105, 208)')
})

it('should apply disabled text color when status is inactive', () => {
  const mockContextValue = createMockStepperContext()

  const { getByText } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepLabel status='inactive' title='Step 1' />
    </StepperContextProvider>
  )

  const stepLabel = getByText('Step 1')

  expect(getComputedStyle(stepLabel).color).toBe('rgb(170, 170, 185)')
})

it('should apply main text color when status is completed', () => {
  const mockContextValue = createMockStepperContext()

  const { getByText } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepLabel status='completed' title='Step 1' />
    </StepperContextProvider>
  )

  const stepLabel = getByText('Step 1')

  expect(getComputedStyle(stepLabel).color).toBe('rgb(36, 37, 46)')
})

it('should apply main text color when status is incompleted', () => {
  const mockContextValue = createMockStepperContext()

  const { getByText } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepLabel status='incompleted' title='Step 1' />
    </StepperContextProvider>
  )

  const stepLabel = getByText('Step 1')

  expect(getComputedStyle(stepLabel).color).toBe('rgb(36, 37, 46)')
})
