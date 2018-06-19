import { render } from 'enzyme'
import * as React from 'react'

import { withForm } from '../../../../test/index'

import { HiddenField } from './HiddenField'

describe('HiddenField', () => {
    it('should be rendered correctly', () => {
        const wrapper = render(withForm(<HiddenField name='test' />))
        expect(wrapper).toMatchSnapshot()
    })
})
