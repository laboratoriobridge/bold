import { mount, render, shallow } from 'enzyme'
import * as React from 'react'

import { withForm, withTheme } from '../../../../../test'
import { Button } from '../../../../elements/button/Button/Button'

import { WizardFooter } from './WizardFooter'

describe('rendering', () => {
    it('should render correctly', () => {
        expect(render(withForm(withTheme(
            <WizardFooter isFirstStep={false} isLastStep={false} onSubmit={jest.fn()} onPrevious={jest.fn()} />
        )))).toMatchSnapshot()
    })

    it('should have only "next" and "previous" buttons on intermediate steps', () => {
        const wrapper = mount(withForm(withTheme(
            <WizardFooter isFirstStep={false} isLastStep={false} onSubmit={jest.fn()} onPrevious={jest.fn()} />
        )))

        expect(wrapper.find('button')).toHaveLength(2)
        expect(wrapper.find('button').map(e => e.text())).toEqual(['Voltar', 'Avançar'])
    })

    it('should have only "next" button on first step', () => {
        const wrapper = mount(withForm(withTheme(
            <WizardFooter isFirstStep={true} isLastStep={false} onSubmit={jest.fn()} onPrevious={jest.fn()} />
        )))

        expect(wrapper.find('button')).toHaveLength(1)
        expect(wrapper.find('button').text()).toEqual('Avançar')
    })
    it('should have "save" and "previous" button on last step', () => {
        const wrapper = mount(withForm(withTheme(
            <WizardFooter isFirstStep={false} isLastStep={true} onSubmit={jest.fn()} onPrevious={jest.fn()} />
        )))

        expect(wrapper.find('button')).toHaveLength(2)
        expect(wrapper.find('button').map(e => e.text())).toEqual(['Voltar', 'Salvar'])
    })
})
