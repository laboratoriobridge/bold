import { render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../test'

import { HFlow } from './HFlow'

it('deve renderizar corretamente', () => {
    const wrapper = render(withTheme(
        <HFlow>
            <span>1</span>
            <span>2</span>
            <span>3</span>
        </HFlow>
    ))
    expect(wrapper).toMatchSnapshot()
})

it('deve aceitar Flow props', () => {
    const wrapper = render(withTheme(
        <HFlow vSpacing={2} hSpacing={1}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
        </HFlow>
    ))
    expect(wrapper).toMatchSnapshot()
})
