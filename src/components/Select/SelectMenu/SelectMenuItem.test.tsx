import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { LocaleContext } from '../../../i18n'
import ptBr from '../../../i18n/locales/pt-BR'

import { SelectEmptyItem, SelectHelperMenuItem, SelectLoadingItem, SelectMenuItem } from './SelectMenuItem'

describe('SelectMenuItem', () => {
  it('should render correctly', () => {
    const { container } = render(<SelectMenuItem>Item</SelectMenuItem>)
    expect(container).toMatchSnapshot()
  })

  it('should have "aria-selected=true" attribute when selected', () => {
    const { container } = render(<SelectMenuItem selected>Item</SelectMenuItem>)
    expect(container.querySelector('li').getAttribute('aria-selected')).toEqual('true')
  })

  it('should render correctly when custom style defined', () => {
    const { container } = render(<SelectMenuItem style={{ color: 'red' }}>Item</SelectMenuItem>)
    expect(container).toMatchSnapshot()
  })

  it('should call `onSelect` when clicked', () => {
    const select = jest.fn()
    const { container } = render(<SelectMenuItem onSelect={select}>Item</SelectMenuItem>)
    fireEvent.click(container.querySelector('li'))
    expect(select).toHaveBeenCalled()
  })

  it('should call `onSelect` when `Enter` key is pressed', () => {
    const select = jest.fn()
    const { container } = render(<SelectMenuItem onSelect={select}>Item</SelectMenuItem>)
    const item = container.querySelector('li')
    fireEvent.keyDown(item, { key: 'Enter' })
    expect(select).toHaveBeenCalled()
  })

  it('should call `onSelect` when `Space` key is pressed', () => {
    const select = jest.fn()
    const { container } = render(<SelectMenuItem onSelect={select}>Item</SelectMenuItem>)
    const item = container.querySelector('li')
    fireEvent.keyDown(item, { key: ' ' })
    expect(select).toHaveBeenCalled()
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
  it('should be localizable', () => {
    const { container } = render(
      <LocaleContext.Provider value={ptBr}>
        <SelectLoadingItem />
      </LocaleContext.Provider>
    )
    expect(container.textContent).toEqual(ptBr.select.loadingItem)
  })
})

describe('SelectEmptyItem', () => {
  it('should render correctly', () => {
    const { container } = render(<SelectEmptyItem />)
    expect(container).toMatchSnapshot()
  })
  it('should be localizable', () => {
    const { container } = render(
      <LocaleContext.Provider value={ptBr}>
        <SelectEmptyItem />
      </LocaleContext.Provider>
    )
    expect(container.textContent).toEqual(ptBr.select.emptyItem)
  })
})
