import { mount, render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { StickyContainer } from './StickyContainer'

describe('StickyContainer', () => {
    it('should render correctly', () => {
        const wrapper = render(withTheme(
            <StickyContainer />
        ))
        expect(wrapper).toMatchSnapshot()
    })

    it('should have a button', () => {
        const wrapper = mount(withTheme(
            <StickyContainer>
                <button type='button'>Test</button>
            </StickyContainer>
        ))
        expect(wrapper.find('button').length).toEqual(1)
    })
})
