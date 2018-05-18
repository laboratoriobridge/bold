import { mount, render, shallow } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { Button } from './Button'

describe('Button', () => {
    it('deve renderizar corretamente', () => {
        const wrapper = render(withTheme(<Button label='Botão' />))
        expect(wrapper).toMatchSnapshot()
    })

    it('deve ter animação de "carregando" ao especificar onClick com retorno do tipo Promise', () => {
        const delayedFunction = () => {
            return new Promise((resolve, reject) => {
                setTimeout(resolve, 10)
            })
        }

        const wrapper = mount(withTheme(<Button label='Botão' onClick={delayedFunction} />))
        expect(wrapper.find('button').prop('data-loading')).toBeUndefined()

        wrapper.simulate('click')
        expect(wrapper.find('button').prop('data-loading')).toEqual(true)
    })

    it('não deve ter animação com "onClick" que não seja promise', () => {
        const func = () => undefined
        const wrapper = mount(withTheme(<Button label='Botão' onClick={func} />))
        expect(wrapper.find('button').prop('data-loading')).toBeUndefined()

        wrapper.simulate('click')
        expect(wrapper.find('button').prop('data-loading')).toBeUndefined()
    })

    it('deve adicionar um hint string automaticamente', () => {
        const wrapper = render(withTheme(<Button label='Botão' hint='hint teste' />))
        expect(wrapper).toMatchSnapshot()
    })

    it('deve adicionar um hint custom automaticamente', () => {
        const wrapper = render(withTheme(<Button label='Botão' hint={(<span>hint complexo teste</span>)} />))
        expect(wrapper).toMatchSnapshot()
    })

    it('deve ter animação de loading', () => {
        const wrapper = render(withTheme(<Button label='Botão' loading={true} />))
        expect(wrapper).toMatchSnapshot()
    })
})
