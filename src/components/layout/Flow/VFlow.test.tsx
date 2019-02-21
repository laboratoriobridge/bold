import { render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../test'

import { VFlow } from './VFlow'

it('deve renderizar corretamente', () => {
    const wrapper = render(withTheme(
        <VFlow>
            <span>1</span>
            <span>2</span>
            <span>3</span>
        </VFlow>
    ))
    expect(wrapper).toMatchSnapshot()
})

it('deve aceitar Flow props', () => {
    const wrapper = render(withTheme(
        <VFlow vSpacing={2} hSpacing={1}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
        </VFlow>
    ))
    expect(wrapper).toMatchSnapshot()
})
