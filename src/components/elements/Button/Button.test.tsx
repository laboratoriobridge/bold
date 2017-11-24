import * as React from 'react'
import { shallow } from 'enzyme'
import { Button, ButtonComponent } from './Button'
import { shallowRenderAndMatch } from '../../../__tests__/test.defaults'

jest.useFakeTimers()

describe('Button', () => {
    it('deve renderizar corretamente', function () {
        shallowRenderAndMatch(<ButtonComponent />)
    })

    it('deve ter animação de "carregando" ao especificar onClick com retorno do tipo Promise', () => {
        const delayedFunction = () => {
            return new Promise((resolve, reject) => {
                setTimeout(resolve, 10)
            })
        }

        const wrapper = shallow(<ButtonComponent onClick={delayedFunction} />)
        expect(wrapper.state().loading).toBe(false)

        wrapper.simulate('click')
        expect(wrapper.state().loading).toBe(true)
    })

    it('não deve ter animação com "onClick" que não seja promise', () => {
        const func = jest.fn()

        const wrapper = shallow(<ButtonComponent onClick={func} />)
        expect(wrapper.state().loading).toBe(false)

        wrapper.simulate('click')
        expect(func).toBeCalled()
        expect(wrapper.state().loading).toBe(false)
    })

    it('deve adicionar um hint string automaticamente', () => {
        shallowRenderAndMatch(<Button hint='hint teste' />)
    })

    it('deve adicionar um hint custom automaticamente', () => {
        shallowRenderAndMatch(<Button hint={(<span>hint complexo teste</span>)} />)
    })
})
