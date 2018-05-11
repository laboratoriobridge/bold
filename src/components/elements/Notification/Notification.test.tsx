import { mount, render, shallow } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'
import { IconButton } from '../button/IconButton/IconButton'
import { Icon } from '../Icon/Icon'

import { Notification } from './Notification'

const f = jest.fn()

describe('Notification', () => {
    it('should render correctly', () => {
        const wrapper = render(withTheme(
            <div>
                <Notification message='Information.' type='info' onCloseClick={f} />
                <Notification message='Success message.' type='success' onCloseClick={f} />
                <Notification message='Alert message.' type='alert' onCloseClick={f} />
                <Notification message='Error message.' type='error' onCloseClick={f} />
            </div>
        ))
        expect(wrapper).toMatchSnapshot()
    })

    it('should have close button', () => {
        const wrapper = mount(withTheme(<Notification message='Information.' type='info' onCloseClick={f} />))
        expect(wrapper.find(IconButton).length).toEqual(1)
    })

    it('should NOT have close button', () => {
        const wrapper = mount(withTheme(<Notification message='Information.' type='info' />))
        expect(wrapper.find(IconButton).length).toEqual(0)
    })

    it('should call function on close click', () => {
        const wrapper = mount(withTheme(<Notification message='Information.' type='info' onCloseClick={f} />))
        wrapper.find(IconButton).forEach((e) => {
            e.simulate('click')
        })
        expect(f).toHaveBeenCalled()
    })

})
