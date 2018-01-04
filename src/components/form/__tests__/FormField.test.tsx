import * as React from 'react'
import { FormField } from '../FormField'
import { Input } from '../input/Input/Input'
import { shallow } from 'enzyme'

describe('FormField', () => {
    it('deve renderizar corretamente', function () {
        expect(shallow(<FormField />)).toMatchSnapshot()
    })
    it('deve renderizar o label', function () {
        expect(shallow(<FormField label='label teste' />)).toMatchSnapshot()
    })
    it('deve renderizar os filhos', function () {
        expect(shallow(<FormField><Input type='text' /></FormField>)).toMatchSnapshot()
    })
})
