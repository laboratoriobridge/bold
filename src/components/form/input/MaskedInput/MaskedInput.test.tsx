import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { MaskedInput } from './MaskedInput'

it('deve renderizar corretamente', () => {
    const wrapper = render(withTheme(<MaskedInput mask={['(', /\d/, ')']} />))
    expect(wrapper).toMatchSnapshot()
})
