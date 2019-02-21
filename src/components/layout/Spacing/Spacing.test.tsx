import { render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../test'

import { Spacing } from './Spacing'

describe('Spacing', () => {
    it('deve renderizar corretamente', () => {
        const wrapper = render(withTheme(
            <Spacing top={1} right={2} bottom={3} left={4}>
                Content
            </Spacing>
        ))
        expect(wrapper).toMatchSnapshot()

        const wrapper2 = render(withTheme(
            <Spacing top={1} right={2} bottom={3} left={4} block>
                Content
            </Spacing>
        ))
        expect(wrapper2).toMatchSnapshot()
    })
})
