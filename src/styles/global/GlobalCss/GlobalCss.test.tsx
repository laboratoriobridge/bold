import { sheet } from 'emotion'
import React from 'react'
import { render } from 'react-testing-library'

import { DefaultGlobalCss, GlobalCss } from './GlobalCss'

describe('GlobalCss', () => {
  it('should inject global CSS styles', () => {
    render(<GlobalCss styles={{ body: { color: 'red' } }} />)
    expect(sheet.container).toMatchSnapshot()
  })
})

describe('DefaultGlobalCss', () => {
  it('should inject default CSS styles from theme', () => {
    render(<DefaultGlobalCss />)
    expect(sheet.container).toMatchSnapshot()
  })
})
