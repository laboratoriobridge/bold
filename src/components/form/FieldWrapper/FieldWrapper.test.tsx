import { render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../test'

import { FieldWrapper } from './'

it('should render correctly', () => {
    expect(render(withTheme(
        <FieldWrapper>
            Test
        </FieldWrapper>
    ))).toMatchSnapshot()

    expect(render(withTheme(
        <FieldWrapper name='test' label='Label' error='Error' required>
            Teste
        </FieldWrapper>
    ))).toMatchSnapshot()
})
