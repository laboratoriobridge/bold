import { render } from '@testing-library/react'
import React from 'react'
import { StepIcon } from './StepIcon'

it('should render correctly', () => {
  const { container } = render(<StepIcon status='active' />)
  expect(container).toMatchSnapshot()
})

it('should accept style prop', () => {
  const { container } = render(<StepIcon status='active' style={{ background: 'red' }} />)

  expect(container).toMatchSnapshot()
})

it('should render custom Icon when provided', () => {
  const CustomIcon = (props: any) => <svg data-testid='custom-icon' {...props} />
  const { getByTestId, queryByTestId } = render(<StepIcon status='completed' overrides={{ Icon: CustomIcon }} />)
  expect(getByTestId('custom-icon')).toBeInTheDocument()
  expect(queryByTestId('check-icon')).not.toBeInTheDocument()
  expect(queryByTestId('minus-icon')).not.toBeInTheDocument()
})

it('should render CheckIcon when status is completed and no custom icon', () => {
  const { getByTestId } = render(<StepIcon status='completed' />)
  expect(getByTestId('check-icon')).toBeInTheDocument()
})

it('should render MinusCircleFilled when status is inactive and no custom icon', () => {
  const { getByTestId } = render(<StepIcon status='inactive' />)
  expect(getByTestId('minus-icon')).toBeInTheDocument()
})

it('should render background when status is active', () => {
  const { getByTestId } = render(<StepIcon status='active' />)
  const background = getByTestId('background')
  expect(background).toBeInTheDocument()
})

it('should render background when status is completed', () => {
  const { getByTestId } = render(<StepIcon status='completed' />)
  const background = getByTestId('background')
  expect(background).toBeInTheDocument()
})

it('should render background when status is incompleted without custom icon', () => {
  const { getByTestId } = render(<StepIcon status='incompleted' />)
  const background = getByTestId('background')
  expect(background).toBeInTheDocument()
})

it('should not render background when status is incompleted with custom icon', () => {
  const CustomIcon = () => <svg data-testid='custom-icon' />
  const { queryByTestId } = render(<StepIcon status='incompleted' overrides={{ Icon: CustomIcon }} />)
  const background = queryByTestId('background')
  expect(background).toBeNull()
})
