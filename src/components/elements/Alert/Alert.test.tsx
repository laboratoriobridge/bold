import { mount, render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../test'
import { Button } from '../Button'

import { Alert } from './Alert'

const click = jest.fn()
const enter = jest.fn()
const leave = jest.fn()

describe('Alert', () => {
    it('should render correctly', () => {
        const wrapper = render(withTheme(
            <div>
                <Alert type='info' onCloseClick={click}>Information.</Alert>
                <Alert type='success' onCloseClick={click}>Success message.</Alert>
                <Alert type='warning' onCloseClick={click}>Alert message.</Alert>
                <Alert type='danger' onCloseClick={click}>Error message.</Alert>
            </div>
        ))
        expect(wrapper).toMatchSnapshot()
    })

    it('should render correctly when inline', () => {
        const wrapper = render(withTheme(
            <div>
                <Alert type='info' inline>Information.</Alert>
                <Alert type='success' inline>Success message.</Alert>
                <Alert type='warning' inline>Alert message.</Alert>
                <Alert type='danger' inline>Error message.</Alert>
            </div>
        ))
        expect(wrapper).toMatchSnapshot()
    })

    it('should allow styles override', () => {
        expect(render(withTheme(
            <Alert type='info' styles={{ wrapper: { color: 'red' }, container: { color: 'blue' } }}>Information.</Alert>
        ))).toMatchSnapshot()
    })

    it('should have close button if onCloseClick is defined', () => {
        const wrapper = mount(withTheme(<Alert type='info' onCloseClick={click}>Information.</Alert>))
        expect(wrapper.find(Button).length).toEqual(1)
    })

    it('should NOT have close button if onCloseClick is undefined', () => {
        const wrapper = mount(withTheme(<Alert type='info' >Information.</Alert>))
        expect(wrapper.find(Button).length).toEqual(0)
    })

    it('should call onCloseClick prop when button is clicked', () => {
        const wrapper = mount(withTheme(<Alert type='info' onCloseClick={click}>Information.</Alert>))
        wrapper.find(Button).simulate('click')
        expect(click).toHaveBeenCalled()
    })

    it('should call function on mouse enter', () => {
        const wrapper = mount(withTheme(<Alert type='info' onMouseEnter={enter}>Information.</Alert>))
        wrapper.find(Alert).simulate('mouseEnter')
        expect(enter).toHaveBeenCalled()
    })

    it('should call function on mouse leave', () => {
        const wrapper = mount(withTheme(<Alert type='info' onMouseLeave={leave}>Information.</Alert>))
        wrapper.find(Alert).simulate('mouseLeave')
        expect(leave).toHaveBeenCalled()
    })

})
