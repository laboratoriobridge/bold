import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { FormField } from './'

it('should render correctly', () => {
    expect(render(withTheme(
        <FormField>
            Test
        </FormField>
    ))).toMatchSnapshot()

    expect(render(withTheme(
        <FormField name='test' label='Label' error='Error' required>
            Teste
        </FormField>
    ))).toMatchSnapshot()
})
