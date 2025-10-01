import { render } from '@testing-library/react'
import React from 'react'
import { createMockStepperContext } from '../../test/utils/createMockStepperContext'
import { StepConnector } from './StepConnector'
import { StepperContextProvider } from './useStepperContext'

it('should render correctly', () => {
  const mockContextValue = createMockStepperContext()

  const { container } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepConnector status='active' direction='horizontal' labelHeight={10} />
    </StepperContextProvider>
  )
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      position: absolute;
      -webkit-transition: border-color .4s ease;
      transition: border-color .4s ease;
      width: calc(100% - 1rem);
      top: calc(0.75rem - 1px);
      left: calc(50% + 0.5rem);
      border-top-width: 2px;
      border-top-style: solid;
      border-top-color: #0069D0;
    }

    <div>
      <span
        class="emotion-0"
        data-testid="step-connector"
      />
    </div>
  `)
})

it('should render span with data-testid', () => {
  const mockContextValue = createMockStepperContext()

  const { getByTestId } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepConnector status='active' direction='horizontal' labelHeight={10} />
    </StepperContextProvider>
  )
  expect(getByTestId('step-connector')).toBeInTheDocument()
})

it('should apply correct styles when direction is horizontal', () => {
  const mockContextValue = createMockStepperContext()

  const { getByTestId } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepConnector status='active' direction='horizontal' labelHeight={10} />
    </StepperContextProvider>
  )

  const connector = getByTestId('step-connector')

  expect(getComputedStyle(connector).width).toBe('calc(100% - 1rem)')
  expect(getComputedStyle(connector).height).toBe('')
  expect(getComputedStyle(connector).borderTopWidth).toBe('2px')
  expect(getComputedStyle(connector).borderRightWidth).toBe('')
  expect(getComputedStyle(connector).top).toBe('calc(0.75rem - 1px)')
  expect(getComputedStyle(connector).left).toBe('calc(50% + 0.5rem)')
})

it('should apply correct styles when direction is vertical', () => {
  const mockContextValue = createMockStepperContext()

  const { getByTestId } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepConnector status='active' direction='vertical' labelHeight={10} />
    </StepperContextProvider>
  )

  const connector = getByTestId('step-connector')

  expect(getComputedStyle(connector).height).toBe('calc(100% - 1rem)')
  expect(getComputedStyle(connector).width).toBe('')
  expect(getComputedStyle(connector).borderRightWidth).toBe('2px')
  expect(getComputedStyle(connector).borderTopWidth).toBe('')
  expect(getComputedStyle(connector).top).toBe('calc(10px / 2 + 0.5rem)')
  expect(getComputedStyle(connector).left).toBe('calc(0.75rem - 1px)')
})

it('should use gap from context when defined', () => {
  const gap = 2
  const mockContextValue = createMockStepperContext({ gap })

  const { getByTestId } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepConnector status='active' direction='horizontal' labelHeight={10} />
    </StepperContextProvider>
  )

  const connector = getByTestId('step-connector')

  expect(getComputedStyle(connector).width).toBe(`calc(100% + ${gap}rem - 1rem)`)
})

it('should change border when status is active', () => {
  const mockContextValue = createMockStepperContext()

  const { getByTestId } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepConnector status='active' direction='horizontal' labelHeight={10} />
    </StepperContextProvider>
  )

  const connector = getByTestId('step-connector')

  expect(getComputedStyle(connector).borderTopStyle).toBe('solid')
  expect(getComputedStyle(connector).borderTopColor).toBe('#0069D0')
})

it('should change border when status is completed', () => {
  const mockContextValue = createMockStepperContext()

  const { getByTestId } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepConnector status='completed' direction='horizontal' labelHeight={10} />
    </StepperContextProvider>
  )

  const connector = getByTestId('step-connector')

  expect(getComputedStyle(connector).borderTopStyle).toBe('solid')
  expect(getComputedStyle(connector).borderTopColor).toBe('#0069D0')
})

it('should change border when status is incompleted', () => {
  const mockContextValue = createMockStepperContext()

  const { getByTestId } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepConnector status='incompleted' direction='horizontal' labelHeight={10} />
    </StepperContextProvider>
  )

  const connector = getByTestId('step-connector')

  expect(getComputedStyle(connector).borderTopStyle).toBe('solid')
  expect(getComputedStyle(connector).borderTopColor).toBe('#D3D4DD')
})

it('should change border when status is inactive', () => {
  const mockContextValue = createMockStepperContext()

  const { getByTestId } = render(
    <StepperContextProvider value={mockContextValue}>
      <StepConnector status='inactive' direction='horizontal' labelHeight={10} />
    </StepperContextProvider>
  )

  const connector = getByTestId('step-connector')

  expect(getComputedStyle(connector).borderTopStyle).toBe('dashed')
  expect(getComputedStyle(connector).borderTopColor).toBe('#D3D4DD')
})
