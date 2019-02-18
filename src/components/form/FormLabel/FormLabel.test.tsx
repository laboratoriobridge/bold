import { render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../test'

import { FormLabel } from './'

it('should render correctly', () => {
    expect(render(withTheme(<FormLabel label='Label' />))).toMatchSnapshot()
    expect(render(withTheme(<FormLabel label='Label' htmlFor='test' required />))).toMatchSnapshot()
})

it('should accept the style prop', () => {
    expect(render(withTheme(<FormLabel label='Label' style={{ color: 'blue' }} />))).toMatchSnapshot()
})
