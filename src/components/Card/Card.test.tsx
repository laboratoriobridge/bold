import React from 'react'
import { render } from '@testing-library/react'
import { Button } from '../Button'
import { Card, CardVariant } from '../Card'

it('should render correctly', () => {
  const { container } = render(<Card>Content</Card>)
  expect(container).toMatchSnapshot()
})

it('should accept "style" prop', () => {
  const { container } = render(<Card style={{ background: 'red' }}>Content</Card>)
  expect(container).toMatchSnapshot()
})

describe('variants', () => {
  it('should render outline variant by default', () => {
    const { getByTestId } = render(<Card data-testid='card-outline'>Content</Card>)
    const card = getByTestId('card-outline')
    expect(getComputedStyle(card).background).toBe('rgb(255, 255, 255)')
    expect(getComputedStyle(card).border).toBe('1px solid #d3d4dd')
    expect(getComputedStyle(card).boxShadow).toBe('')
  })

  it('should render float variant styles when specified', () => {
    const { getByTestId } = render(
      <Card variant='float' data-testid='card-float'>
        Content
      </Card>
    )
    const card = getByTestId('card-float')
    expect(getComputedStyle(card).background).toBe('rgb(255, 255, 255)')
    expect(getComputedStyle(card).border).toBe('1px solid #d3d4dd')
    expect(getComputedStyle(card).boxShadow).toBe(
      '0 2px 4px -1px rgba(0,0,0,0.2),0 1px 10px 0 rgba(0,0,0,0.12),0 4px 5px 0 rgba(0,0,0,0.14)'
    )
  })

  it('should render plain variant styles when specified', () => {
    const { getByTestId } = render(
      <Card variant='plain' data-testid='card-plain'>
        Content
      </Card>
    )
    const card = getByTestId('card-plain')
    expect(getComputedStyle(card).background).toBe('rgb(255, 255, 255)')
    expect(getComputedStyle(card).border).toBe('0px')
    expect(getComputedStyle(card).boxShadow).toBe('')
  })
})

describe('states', () => {
  it.each<CardVariant>(['outline', 'float', 'plain'])(
    'should apply disabled styles in each variant when is disabled',
    (variant) => {
      const { getByTestId } = render(
        <Card variant={variant} disabled data-testid='card-disabled'>
          Content
        </Card>
      )
      const card = getByTestId('card-disabled')
      expect(getComputedStyle(card).cursor).toBe('not-allowed')
      expect(getComputedStyle(card).borderColor).toBe('#d3d4dd')
      expect(getComputedStyle(card).background).toBe('rgb(255, 255, 255)')
    }
  )

  it('should apply pointer-events none to children elements when is disabled', () => {
    const { getByTestId } = render(
      <Card disabled>
        <Button data-testid='card-button'>Button</Button>
      </Card>
    )
    const button = getByTestId('card-button')
    expect(getComputedStyle(button).pointerEvents).toBe('none')
  })

  it('should apply invalid styles in outline variant when error specified', () => {
    const { getByTestId } = render(
      <Card variant='outline' error='Error' data-testid='card-outline-invalid'>
        Content
      </Card>
    )
    const card = getByTestId('card-outline-invalid')
    expect(getComputedStyle(card).borderColor).toBe('#d01e29')
  })

  it('should apply invalid styles in float variant when error specified', () => {
    const { getByTestId } = render(
      <Card variant='float' error='Error' data-testid='card-float-invalid'>
        Content
      </Card>
    )
    const card = getByTestId('card-float-invalid')
    expect(getComputedStyle(card).borderColor).toBe('#d01e29')
  })

  it('should apply invalid styles in plain variant when error specified', () => {
    const { getByTestId } = render(
      <Card variant='plain' error='Error' data-testid='card-plain-invalid'>
        Content
      </Card>
    )
    const card = getByTestId('card-plain-invalid')
    expect(getComputedStyle(card).background).toBe('rgb(254, 236, 237)')
  })
})
