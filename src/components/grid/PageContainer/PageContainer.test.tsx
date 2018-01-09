import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { PageContainer } from './PageContainer'

describe('PageContainer', () => {
    it('deve renderizar corretamente', () => {
        const wrapper = render(withTheme(<PageContainer>Content</PageContainer>))
        expect(wrapper).toMatchSnapshot()
    })
})
