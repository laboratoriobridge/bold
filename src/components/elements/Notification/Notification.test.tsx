import { mount, render, shallow } from 'enzyme'
import * as React from 'react'

import { PageContainer } from '../../..'
import { withTheme } from '../../../test'
import { Button } from '../button/Button/Button'
import { Icon } from '../Icon/Icon'

import { Notification } from './Notification'

const click = jest.fn()
const enter = jest.fn()
const leave = jest.fn()

describe('Notification', () => {
    it('should render correctly', () => {
        const wrapper = render(withTheme(
            <div>
                <Notification type='info' onCloseClick={click} >Information.</Notification>
                <Notification type='success' onCloseClick={click} >Success message.</Notification>
                <Notification type='alert' onCloseClick={click} >Alert message.</Notification>
                <Notification type='error' onCloseClick={click} >Error message.</Notification>
            </div>
        ))
        expect(wrapper).toMatchSnapshot()
    })

    it('should have close button', () => {
        const wrapper = mount(withTheme(<Notification type='info' onCloseClick={click} >Information.</Notification>))
        expect(wrapper.find(Button).length).toEqual(1)
    })

    it('should NOT have close button', () => {
        const wrapper = mount(withTheme(<Notification type='info' >Information.</Notification>))
        expect(wrapper.find(Button).length).toEqual(0)
    })

    it('should call function on close click', () => {
        const wrapper = mount(withTheme(<Notification type='info' onCloseClick={click} >Information.</Notification>))
        wrapper.find(Button).simulate('click')
        expect(click).toHaveBeenCalled()
    })

    it('should call function on mouse enter', () => {
        const wrapper = mount(withTheme(<Notification type='info' onMouseEnter={enter} >Information.</Notification>))
        wrapper.find(Notification).simulate('mouseEnter')
        expect(enter).toHaveBeenCalled()
    })

    it('should call function on mouse leave', () => {
        const wrapper = mount(withTheme(<Notification type='info' onMouseLeave={leave} >Information.</Notification>))
        wrapper.find(Notification).simulate('mouseLeave')
        expect(leave).toHaveBeenCalled()
    })

    it('should have page container', () => {
        const wrapper = mount(withTheme(
            <Notification type='info' onCloseClick={click} contentContainer >Information.</Notification>)
        )
        expect(wrapper.find(PageContainer).length).toEqual(1)
    })

})
