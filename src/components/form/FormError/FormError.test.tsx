import { render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../test'

import { FormError } from './'

it('should render correctly', () => {
    expect(render(withTheme(<FormError error='Error' />))).toMatchSnapshot()
})

it('should accept the style prop', () => {
    expect(render(withTheme(<FormError error='Error' style={{ color: 'blue' }} />))).toMatchSnapshot()
})
