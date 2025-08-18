import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { ClickableCard, CardVariant } from '../Card'

it('should render correctly', () => {
  const { container } = render(<ClickableCard>Content</ClickableCard>)
  expect(container).toMatchSnapshot()
})

it('should accept "style" prop', () => {
  const { container } = render(<ClickableCard style={{ background: 'red' }}>Content</ClickableCard>)
  expect(container).toMatchSnapshot()
})

describe('variants', () => {
  it('should render outline variant by default', () => {
    const { getByTestId } = render(<ClickableCard data-testid='clickable-card-outline'>Content</ClickableCard>)
    const card = getByTestId('clickable-card-outline')
    expect(getComputedStyle(card).background).toBe('rgb(255, 255, 255)')
    expect(getComputedStyle(card).borderColor).toBe('#8f8fa2')
    expect(getComputedStyle(card).boxShadow).toBe('')
  })

  it('should render float variant styles when specified', () => {
    const { getByTestId } = render(
      <ClickableCard variant='float' data-testid='clickable-card-float'>
        Content
      </ClickableCard>
    )
    const card = getByTestId('clickable-card-float')
    expect(getComputedStyle(card).background).toBe('rgb(255, 255, 255)')
    expect(getComputedStyle(card).border).toBe('1px solid #d3d4dd')
    expect(getComputedStyle(card).boxShadow).toBe(
      '0 2px 4px -1px rgba(0,0,0,0.2),0 1px 10px 0 rgba(0,0,0,0.12),0 4px 5px 0 rgba(0,0,0,0.14)'
    )
  })

  it('should render plain variant styles when specified', () => {
    const { getByTestId } = render(
      <ClickableCard variant='plain' data-testid='clickable-card-plain'>
        Content
      </ClickableCard>
    )
    const card = getByTestId('clickable-card-plain')
    expect(getComputedStyle(card).background).toBe('rgb(255, 255, 255)')
    expect(getComputedStyle(card).border).toBe('0px')
    expect(getComputedStyle(card).boxShadow).toBe('')
  })
})

describe('click events', () => {
  it('should trigger click event when clicked', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(
      <ClickableCard onClick={handleClick} data-testid='clickable-card-click'>
        Content
      </ClickableCard>
    )
    const card = getByTestId('clickable-card-click')
    fireEvent.click(card)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should not trigger click event when disabled', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(
      <ClickableCard disabled onClick={handleClick} data-testid='clickable-card-disabled-click'>
        Content
      </ClickableCard>
    )
    const card = getByTestId('clickable-card-disabled-click')
    fireEvent.click(card)
    expect(handleClick).not.toHaveBeenCalled()
  })
})

describe('states', () => {
  it.each<CardVariant>(['outline', 'float'])(
    'should apply selected styles in outline and float variants when is selected',
    (variant) => {
      const { getByTestId } = render(
        <ClickableCard variant={variant} selected data-testid='clickable-card-selected'>
          Content
        </ClickableCard>
      )
      const card = getByTestId('clickable-card-selected')
      expect(getComputedStyle(card).borderColor).toBe('#0069d0')
      expect(getComputedStyle(card).background).toBe('rgb(236, 240, 255)')
    }
  )

  it('should apply selected styles in plain variant when is selected', () => {
    const { getByTestId } = render(
      <ClickableCard variant='plain' selected data-testid='clickable-card-selected'>
        Content
      </ClickableCard>
    )
    const card = getByTestId('clickable-card-selected')
    expect(getComputedStyle(card).background).toBe('rgb(236, 240, 255)')
  })

  it.each<CardVariant>(['outline', 'float'])(
    'should apply invalid styles in outline and float variants when error specified',
    (variant) => {
      const { getByTestId } = render(
        <ClickableCard variant={variant} error='Error' data-testid='clickable-card-invalid'>
          Content
        </ClickableCard>
      )
      const card = getByTestId('clickable-card-invalid')
      expect(getComputedStyle(card).borderColor).toBe('#d01e29')
      expect(getComputedStyle(card).background).toBe('rgb(255, 255, 255)')
    }
  )

  it('should apply invalid styles in plain variant when error specified', () => {
    const { getByTestId } = render(
      <ClickableCard variant='plain' error='Error' data-testid='clickable-card-invalid'>
        Content
      </ClickableCard>
    )
    const card = getByTestId('clickable-card-invalid')
    expect(getComputedStyle(card).background).toBe('rgb(254, 236, 237)')
  })

  it.each<CardVariant>(['outline', 'float', 'plain'])(
    'should apply disabled styles in each variant when is disabled',
    (variant) => {
      const { getByTestId } = render(
        <ClickableCard variant={variant} disabled data-testid='clickable-card-disabled'>
          Content
        </ClickableCard>
      )
      const card = getByTestId('clickable-card-disabled')
      expect(getComputedStyle(card).cursor).toBe('not-allowed')
      expect(card).toHaveStyle('border-color: #d3d4dd')
      expect(card).toHaveStyle('background: rgb(255, 255, 255)')
    }
  )

  it.each<CardVariant>(['outline', 'float', 'plain'])(
    'should prioritize disabled styles when the card is disabled and error specified',
    (variant) => {
      const { getByTestId } = render(
        <ClickableCard variant={variant} disabled error='Error' data-testid='clickable-card-disabled-invalid'>
          Content
        </ClickableCard>
      )
      const card = getByTestId('clickable-card-disabled-invalid')
      expect(getComputedStyle(card).cursor).toBe('not-allowed')
      expect(card).toHaveStyle('border-color: #d3d4dd')
      expect(card).toHaveStyle('background: rgb(255, 255, 255)')
    }
  )

  it.each<CardVariant>(['outline', 'float'])(
    'should apply correctly styles in outline and float variants when is selected and error specified',
    (variant) => {
      const { getByTestId } = render(
        <ClickableCard variant={variant} selected error='Error' data-testid='clickable-card-selected-invalid'>
          Content
        </ClickableCard>
      )
      const card = getByTestId('clickable-card-selected-invalid')
      expect(card).toHaveStyle('border-color: #d01e29')
      expect(card).toHaveStyle('background: rgb(254, 236, 237)')
    }
  )

  it('should apply correctly styles in plain variant when is selected and error specified', () => {
    const { getByTestId } = render(
      <ClickableCard variant='plain' selected error='Error' data-testid='clickable-card-selected-invalid'>
        Content
      </ClickableCard>
    )
    const card = getByTestId('clickable-card-selected-invalid')
    expect(card).toHaveStyle('background: rgb(254, 236, 237)')
  })

  it.each<CardVariant>(['outline', 'float', 'plain'])(
    'should apply correctly styles in each variant when is selected and disabled',
    (variant) => {
      const { getByTestId } = render(
        <ClickableCard variant={variant} selected disabled data-testid='clickable-card-selected-disabled'>
          Content
        </ClickableCard>
      )
      const card = getByTestId('clickable-card-selected-disabled')
      expect(getComputedStyle(card).cursor).toBe('not-allowed')
      expect(card).toHaveStyle('border-color: #c5d4ff')
      expect(card).toHaveStyle('background: rgb(236, 240, 255)')
    }
  )
})
