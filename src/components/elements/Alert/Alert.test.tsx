import { mount, render } from 'enzyme'
import * as React from 'react'

import { PageContainer } from '../../..'
import { withTheme } from '../../../test'
import { Button } from '../button/Button/Button'

import { Alert } from './Alert'

const click = jest.fn()
const enter = jest.fn()
const leave = jest.fn()

describe('Alert', () => {
    it('should render correctly', () => {
        const wrapper = render(withTheme(
            <div>
                <Alert type='info' onCloseClick={click} >Information.</Alert>
                <Alert type='success' onCloseClick={click} >Success message.</Alert>
                <Alert type='alert' onCloseClick={click} >Alert message.</Alert>
                <Alert type='error' onCloseClick={click} >Error message.</Alert>
            </div>
        ))
        expect(wrapper).toMatchSnapshot()
    })

    it('should have close button', () => {
        const wrapper = mount(withTheme(<Alert type='info' onCloseClick={click} >Information.</Alert>))
        expect(wrapper.find(Button).length).toEqual(1)
    })

    it('should NOT have close button', () => {
        const wrapper = mount(withTheme(<Alert type='info' >Information.</Alert>))
        expect(wrapper.find(Button).length).toEqual(0)
    })

    it('should call function on close click', () => {
        const wrapper = mount(withTheme(<Alert type='info' onCloseClick={click} >Information.</Alert>))
        wrapper.find(Button).simulate('click')
        expect(click).toHaveBeenCalled()
    })

    it('should call function on mouse enter', () => {
        const wrapper = mount(withTheme(<Alert type='info' onMouseEnter={enter} >Information.</Alert>))
        wrapper.find(Alert).simulate('mouseEnter')
        expect(enter).toHaveBeenCalled()
    })

    it('should call function on mouse leave', () => {
        const wrapper = mount(withTheme(<Alert type='info' onMouseLeave={leave} >Information.</Alert>))
        wrapper.find(Alert).simulate('mouseLeave')
        expect(leave).toHaveBeenCalled()
    })

    it('should have page container', () => {
        const wrapper = mount(withTheme(
            <Alert type='info' onCloseClick={click} contentContainer >Information.</Alert>)
        )
        expect(wrapper.find(PageContainer).length).toEqual(1)
    })

})
