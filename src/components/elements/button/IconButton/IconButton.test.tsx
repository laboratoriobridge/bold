import { mount, render, shallow } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { IconButton } from './IconButton'

describe('IconButton', () => {
    it('deve renderizar corretamente', () => {
        const wrapper = render(withTheme(<IconButton icon='lapis' />))
        expect(wrapper).toMatchSnapshot()
    })

    it('deve ter animação de "carregando" ao especificar onClick com retorno do tipo Promise', () => {
        const delayedFunction = () => {
            return new Promise((resolve, reject) => {
                setTimeout(resolve, 10)
            })
        }

        const wrapper = mount(withTheme(<IconButton icon='lapis' onClick={delayedFunction} />))
        expect(wrapper).toMatchSnapshot()

        wrapper.simulate('click')
        expect(wrapper).toMatchSnapshot()
    })

    it('não deve ter animação com "onClick" que não seja promise', () => {
        const func = () => undefined
        const wrapper = mount(withTheme(<IconButton icon='lapis' onClick={func} />))
        expect(wrapper).toMatchSnapshot()

        wrapper.simulate('click')
        expect(wrapper).toMatchSnapshot()
    })

    it('deve adicionar um hint string automaticamente', () => {
        const wrapper = render(withTheme(<IconButton icon='lapis' hint='hint teste' />))
        expect(wrapper).toMatchSnapshot()
    })

    it('deve adicionar um hint custom automaticamente', () => {
        const wrapper = render(withTheme(<IconButton icon='lapis' hint={(<span>hint complexo teste</span>)} />))
        expect(wrapper).toMatchSnapshot()
    })

    it('deve ter animação de loading', () => {
        const wrapper = render(withTheme(<IconButton icon='lapis' loading={true} />))
        expect(wrapper).toMatchSnapshot()
    })
})
