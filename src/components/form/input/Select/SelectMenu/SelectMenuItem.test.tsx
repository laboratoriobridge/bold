import React from 'react'
import { render } from 'react-testing-library'

import { SelectEmptyItem, SelectHelperMenuItem, SelectLoadingItem, SelectMenuItem } from './SelectMenuItem'

describe('SelectMenuItem', () => {
  it('should render correctly', () => {
    const { container } = render(<SelectMenuItem>Item</SelectMenuItem>)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly when selected', () => {
    const { container } = render(<SelectMenuItem selected>Item</SelectMenuItem>)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly when highlighted', () => {
    const { container } = render(<SelectMenuItem highlighted>Item</SelectMenuItem>)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly when custom style defined', () => {
    const { container } = render(<SelectMenuItem style={{ color: 'red' }}>Item</SelectMenuItem>)
    expect(container).toMatchSnapshot()
  })
})

describe('SelectHelperMenuItem', () => {
  it('should render correctly', () => {
    const { container } = render(<SelectHelperMenuItem style={{}}>Loading</SelectHelperMenuItem>)
    expect(container).toMatchSnapshot()
  })
})

describe('SelectLoadingItem', () => {
  it('should render correctly', () => {
    const { container } = render(<SelectLoadingItem />)
    expect(container).toMatchSnapshot()
  })
})

describe('SelectEmptyItem', () => {
  it('should render correctly', () => {
    const { container } = render(<SelectEmptyItem />)
    expect(container).toMatchSnapshot()
  })
})
