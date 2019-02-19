import React from 'react'
import { render } from 'react-testing-library'

import { withTheme } from '../../../test'

import { Popper, PopperController, PopperProps } from './Popper'

const createComponent = (props: Partial<PopperProps> = {}) => {
    return withTheme(
        // tslint:disable jsx-no-lambda
        <Popper
            placement='left'
            offset={0.25}
            closeOnOutsideClick={true}
            renderTarget={(ctrl: PopperController) => <span />}
            {...props}
        >
            {(ctrl: PopperController) => (
                <div>Test</div>
            )}
        </Popper>
    )
}

describe('render', () => {
    it('should render correctly', () => {
        const { container } = render(createComponent())
        expect(container).toMatchSnapshot()
    })
})

describe('controller', () => {
    it('#isShown should return the visibility status when called', () => {
        const control = jest.fn()
        render(createComponent({ control }))
        const controller = control.mock.calls[0][0] as PopperController
        expect(controller.isShown()).toEqual(false)
    })
    it('#show should show children when called', () => {
        const control = jest.fn()
        render(createComponent({ control }))
        const controller = control.mock.calls[0][0] as PopperController

        expect(controller.isShown()).toEqual(false)
        controller.show()
        expect(controller.isShown()).toEqual(true)
    })
    it('#hide should hide children when called', () => {
        const control = jest.fn()
        render(createComponent({ control }))
        const controller = control.mock.calls[0][0] as PopperController

        controller.show()
        expect(controller.isShown()).toEqual(true)
        controller.hide()
        expect(controller.isShown()).toEqual(false)
    })
    it('#toggle should toggle the visibility of children when called', () => {
        const control = jest.fn()
        render(createComponent({ control }))
        const controller = control.mock.calls[0][0] as PopperController

        expect(controller.isShown()).toEqual(false)
        controller.toggle()
        expect(controller.isShown()).toEqual(true)
        controller.toggle()
        expect(controller.isShown()).toEqual(false)
    })
})
