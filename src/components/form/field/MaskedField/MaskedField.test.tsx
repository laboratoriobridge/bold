import { render } from 'enzyme'
import * as React from 'react'

import { withForm } from '../../../../test/index'

import { MaskedField } from './MaskedField'

it('deve ser renderizado de forma correta', () => {
    const wrapper = render(withForm(
        <MaskedField mask={['(', /\w/, ')']} label='Mask test' name='test' placeholder='Test' disabled={false} />
    ))
    expect(wrapper).toMatchSnapshot()
})
