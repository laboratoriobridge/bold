import { mount, render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../../test'
import { ModalFooter } from '../ModalFooter'

import { ModalAuto } from './ModalAuto'

// tslint:disable jsx-no-lambda

jest.useFakeTimers()

it('should render correctly', () => {
    expect(render(withTheme(
        <ModalAuto
            dispose={jest.fn()}
            render={() => <span>Body</span>}
            size='small'
            actions={[
                { label: 'Confirm', onClick: jest.fn() },
            ]}
        />
    ))).toMatchSnapshot()
})

it('should mount opened', () => {
    const wrapper = mount(withTheme(
        <ModalAuto dispose={jest.fn()} render={() => <span>Body</span>} />
    ))
    const instance = wrapper.find(ModalAuto).instance() as ModalAuto
    expect(instance.state.open).toEqual(false)
})

it('should call dispose when closed', () => {
    const dispose = jest.fn()
    const wrapper = mount(withTheme(
        <ModalAuto dispose={dispose} render={() => <span>Body</span>} />
    ))
    const instance = wrapper.find(ModalAuto).instance() as ModalAuto
    instance.close()
    jest.runAllTimers()
    expect(dispose).toHaveBeenCalledTimes(1)
})

it('should pass render props', () => {
    const renderModal = jest.fn()
    const wrapper = mount(withTheme(
        <ModalAuto dispose={jest.fn()} render={renderModal} />
    ))
    const instance = wrapper.find(ModalAuto).instance() as ModalAuto
    expect(renderModal).toHaveBeenCalledWith({
        close: instance.close,
    })
})

it('should close modal when a button is clicked', () => {
    const confirmHandler = jest.fn()
    const wrapper = mount(withTheme(
        <ModalAuto
            dispose={jest.fn()}
            render={() => <span>Body</span>}
            actions={[
                { label: 'Cancel' },
                { label: 'Confirm', type: 'primary', onClick: confirmHandler },
            ]}
        />
    ))
    const instance = wrapper.find(ModalAuto).instance() as ModalAuto
    const closeSpy = jest.spyOn(instance, 'close')

    wrapper.find(ModalFooter).find('button').last().simulate('click')
    expect(confirmHandler).toHaveBeenCalled()
    expect(closeSpy).toHaveBeenCalledTimes(1)

    wrapper.find(ModalFooter).find('button').first().simulate('click')
    expect(closeSpy).toHaveBeenCalledTimes(2)
})
