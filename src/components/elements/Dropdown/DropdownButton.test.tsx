import { mount, render, shallow } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'
import { PopperController } from '../Popper'

import { DropdownButton, DropdownButtonItem, DropdownButtonItemProps } from './DropdownButton'

describe('DropdownButtonItem', () => {
    const createMockController = (): PopperController => {
        return {
            show: jest.fn(),
            hide: jest.fn(),
            toggle: jest.fn(),
            isShown: jest.fn(),
        }
    }

    const createItem = (props: Partial<DropdownButtonItemProps> = {}) => {
        return mount(withTheme(<DropdownButtonItem controller={createMockController()} content='Item' {...props} />))
    }

    it('should render correctly', () => {
        expect(createItem().render()).toMatchSnapshot()
    })

    it('should call controller#hide when clicked and autoClose is true', () => {
        const controller = createMockController()
        const wrapper = createItem({ controller })
        wrapper.find('a').simulate('click')
        expect(controller.hide).toHaveBeenCalled()
    })

    it('should NOT call controller#hide when clicked and autoClose is false', () => {
        const controller = createMockController()
        const wrapper = createItem({ controller, autoClose: false })
        wrapper.find('a').simulate('click')
        expect(controller.hide).not.toHaveBeenCalled()
    })

})

describe('DropdownButton', () => {
    it('should render correctly', () => {
        expect(render(withTheme(
            <DropdownButton
                icon='dots'
                size='small'
                skin='ghost'
                items={[
                    { content: <span>Item #1</span> },
                    { content: <span>Item #2</span>, onClick: jest.fn(), autoClose: false },
                ]}
            />
        ))).toMatchSnapshot()
    })
})
