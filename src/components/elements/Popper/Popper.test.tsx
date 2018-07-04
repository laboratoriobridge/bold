import { mount } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { Popper, PopperController } from './Popper'

const createComponent = () => {
    let controller: PopperController = null
    const wrapper = mount(withTheme(
        // tslint:disable jsx-no-lambda
        <Popper
            placement='left'
            offset={0.25}
            closeOnOutsideClick={true}
            control={(ctrl) => controller = ctrl}
            renderTarget={(ctrl: PopperController) => <span />}
        >
            {(ctrl: PopperController) => (
                <div>Test</div>
            )}
        </Popper>
    ))
    return { wrapper, controller }
}

describe('render', () => {
    it('should render correctly', () => {
        const { wrapper } = createComponent()
        expect(wrapper.render()).toMatchSnapshot()
    })
})

describe('controller', () => {
    it('#isShown should return the visibility status when called', () => {
        const { wrapper, controller } = createComponent()
        expect(controller.isShown()).toEqual(false)
    })
    it('#show should show children when called', () => {
        const { wrapper, controller } = createComponent()
        expect(controller.isShown()).toEqual(false)
        controller.show()
        expect(controller.isShown()).toEqual(true)
    })
    it('#hide should hide children when called', () => {
        const { wrapper, controller } = createComponent()
        controller.show()
        expect(controller.isShown()).toEqual(true)
        controller.hide()
        expect(controller.isShown()).toEqual(false)
    })
    it('#toggle should toggle the visibility of children when called', () => {
        const { wrapper, controller } = createComponent()
        expect(controller.isShown()).toEqual(false)
        controller.toggle()
        expect(controller.isShown()).toEqual(true)
        controller.toggle()
        expect(controller.isShown()).toEqual(false)
    })
})
