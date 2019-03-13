import { render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../test'

import { ProgressIndicator } from './ProgressIndicator'

it('should render correctly', () => {
    expect(render(withTheme(<ProgressIndicator value={40} />))).toMatchSnapshot()
})

it('should accept color prop', () => {
    expect(render(withTheme(<ProgressIndicator value={40} color='danger' />))).toMatchSnapshot()
})

it('should accept style prop', () => {
    expect(render(withTheme(<ProgressIndicator value={40} style={{ height: 36 }} />))).toMatchSnapshot()
})