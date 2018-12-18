import { mount, shallow } from 'enzyme'
import * as React from 'react'
import * as waait from 'waait'

import { FocusManagerContainer } from './FocusManagerContainer'

it('should render children', () => {
    expect(shallow(<FocusManagerContainer><span>Children</span></FocusManagerContainer>)).toMatchSnapshot()
})

it('should call onFocusIn prop when focus enter the first element of the container', () => {
    const focusIn = jest.fn()
    const wrapper = mount(
        <FocusManagerContainer onFocusIn={focusIn}>
            <input id='input1' />
            <input id='input2' />
        </FocusManagerContainer>
    )
    expect(focusIn).not.toHaveBeenCalled()
    wrapper.find('#input1').simulate('focus')
    expect(focusIn).toHaveBeenCalledTimes(1)
    wrapper.find('#input2').simulate('focus')
    expect(focusIn).toHaveBeenCalledTimes(1)
})

it('should call onFocusOut prop when focus leaves the container', async () => {
    const focusOut = jest.fn()
    const wrapper = mount(
        <FocusManagerContainer onFocusOut={focusOut}>
            <input id='input1' />
            <input id='input2' />
        </FocusManagerContainer>
    )
    expect(focusOut).not.toHaveBeenCalled()

    wrapper.find('#input1').simulate('focus')
    await waait(0)
    expect(focusOut).not.toHaveBeenCalled()

    wrapper.find('#input2').simulate('focus')
    await waait(0)
    expect(focusOut).not.toHaveBeenCalled()

    wrapper.find('#input2').simulate('blur')
    await waait(0)
    expect(focusOut).toHaveBeenCalledTimes(1)
})
