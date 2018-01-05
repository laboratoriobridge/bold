import * as React from 'react'
import { Icon } from '../Icon'
import { render } from 'enzyme'

describe('Icon', () => {
    it('deve renderizar corretamente', function () {
        expect(render(<Icon icon='login' />)).toMatchSnapshot()
    })
    it('deve renderizar tamanho grande', function () {
        expect(render(<Icon icon='login' size='large' />)).toMatchSnapshot()
    })
})
