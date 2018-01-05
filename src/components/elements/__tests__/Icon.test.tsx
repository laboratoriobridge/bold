import { render } from 'enzyme'
import * as React from 'react'
import { Icon } from '../Icon'

describe('Icon', () => {
    it('deve renderizar corretamente', () => {
        expect(render(<Icon icon='login' />)).toMatchSnapshot()
    })
    it('deve renderizar tamanho grande', () => {
        expect(render(<Icon icon='login' size='large' />)).toMatchSnapshot()
    })
})
