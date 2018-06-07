import { mount, render, shallow } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { Button } from './Button'

describe('Button', () => {
    it('should render correctly with label', () => {
        const wrapper = render(withTheme(<Button label='Button' />))
        expect(wrapper).toMatchSnapshot()
    })

    it('should render correctly with icon only', () => {
        const wrapper = render(withTheme(<Button icon='adjust' />))
        expect(wrapper).toMatchSnapshot()
    })

    it('should have a "loading" animation when onClick return is a Promise', () => {
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

    it('should NOT have animation when onClick return is not a Promise', () => {
        const func = () => undefined
        const wrapper = mount(withTheme(<Button label='Botão' onClick={func} />))
        expect(wrapper.find('button').prop('data-loading')).toBeUndefined()

        wrapper.simulate('click')
        expect(wrapper.find('button').prop('data-loading')).toBeUndefined()
    })

    it('should automatically have a hint', () => {
        const wrapper = render(withTheme(<Button label='Botão' hint='hint teste' />))
        expect(wrapper).toMatchSnapshot()
    })

    it('shouold automatically have a custom hint', () => {
        const wrapper = render(withTheme(<Button label='Botão' hint={(<span>hint complexo teste</span>)} />))
        expect(wrapper).toMatchSnapshot()
    })

    it('should accept the loading prop', () => {
        const wrapper = render(withTheme(<Button label='Botão' loading={true} />))
        expect(wrapper).toMatchSnapshot()
    })
})
