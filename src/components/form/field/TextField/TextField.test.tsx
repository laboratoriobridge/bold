import { render } from 'enzyme'
import * as React from 'react'

import { withForm } from '../../../../test/index'

import { TextField } from './TextField'

describe('TextField', () => {
    it('deve ser renderizado de forma correta', () => {
        const wrapper = render(withForm(<TextField name='test' placeholder='Test' maxLength={2} disabled={false} />))
        expect(wrapper).toMatchSnapshot()
    })
})
