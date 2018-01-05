import * as React from 'react'
import { render } from 'enzyme'
import { TextField } from './TextField'
import { withForm } from '../../../../test/index'

describe('TextField', () => {
    it('deve ser renderizado de forma correta', () => {
        const wrapper = render(withForm(<TextField name='test' placeholder='Test' maxLength={2} disabled={false} />))
        expect(wrapper).toMatchSnapshot()
    })
})
