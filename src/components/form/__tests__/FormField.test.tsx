import { shallow } from 'enzyme'
import * as React from 'react'
import { FormField } from '../FormField'
import { Input } from '../input/Input/Input'

describe('FormField', () => {
    it('deve renderizar corretamente', () => {
        expect(shallow(<FormField />)).toMatchSnapshot()
    })
    it('deve renderizar o label', () => {
        expect(shallow(<FormField label='label teste' />)).toMatchSnapshot()
    })
    it('deve renderizar os filhos', () => {
        expect(shallow(<FormField><Input type='text' /></FormField>)).toMatchSnapshot()
    })
})
