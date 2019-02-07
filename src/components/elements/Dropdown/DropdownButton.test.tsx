import * as React from 'react'
import { fireEvent, render, wait } from 'react-testing-library'

import { withTheme } from '../../../test'

import { DropdownButton, DropdownButtonProps } from './DropdownButton'

const createDropdownButton = (props: Partial<DropdownButtonProps> = {}) => withTheme(
    <DropdownButton
        icon='dots'
        size='small'
        skin='ghost'
        items={[
            { content: <span>Item #1</span> },
            { content: <span>Item #2</span>, onSelected: jest.fn(), autoClose: false },
        ]}
        {...props}
    />
)

describe('DropdownButton', () => {

    it('should render correctly', () => {
        render(createDropdownButton())

        expect(document.body).toMatchSnapshot()
    })

    it('should open the dropdown on click', () => {
        const { container } = render(createDropdownButton())

        const button = container.querySelector('button')

        fireEvent.click(button)

        expect(document.body).toMatchSnapshot()
    })

    it('should allow navigation and select by keyboard', async () => {
        const handleSelectItem1 = jest.fn()
        const handleSelectItem2 = jest.fn()
        const { container } = render(createDropdownButton({
            items: [
                { content: <span>Item #1</span>, onSelected: handleSelectItem1 },
                { content: <span>Item #2</span>, onSelected: handleSelectItem2 },
            ],
        }))

        const button = container.querySelector('button')

        fireEvent.click(button)
        fireEvent.keyDown(button, { key: 'ArrowDown' })
        fireEvent.keyDown(button, { key: 'ArrowDown' })
        fireEvent.keyDown(button, { key: 'Enter' })

        await wait()

        expect(handleSelectItem1).toHaveBeenCalledTimes(0)
        expect(handleSelectItem2).toHaveBeenCalledTimes(1)
    })

})
