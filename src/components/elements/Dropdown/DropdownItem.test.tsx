import * as React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { withTheme } from '../../../test';
import { DropdownItem } from './DropdownItem';



it('should render correctly', () => {
    const { container } = render(withTheme(
        <DropdownItem>Item</DropdownItem>
    ))
    expect(container).toMatchSnapshot()
})

it('should provide an innerRef to the underlying li element', () => {
    const ref = React.createRef<HTMLLIElement>()
    render(withTheme(
        <DropdownItem innerRef={ref}>Item</DropdownItem>
    ))
    expect(ref.current.tagName).toEqual('LI')
})

describe('onClick', () => {
    it('should call onClick when clicked', () => {
        const handleClick = jest.fn()
        const { container } = render(withTheme(
            <DropdownItem onClick={handleClick}>Item</DropdownItem>
        ))
        fireEvent.click(container.querySelector('li'))
        expect(handleClick).toHaveBeenCalled()
    })

    it('should NOT call onClick when disabled', () => {
        const handleClick = jest.fn()
        const { container } = render(withTheme(
            <DropdownItem onClick={handleClick} disabled>Item</DropdownItem>
        ))
        fireEvent.click(container.querySelector('li'))
        expect(handleClick).not.toHaveBeenCalled()
    })

    it('should call onClick when focused and enter is pressed', () => {
        const handleClick = jest.fn()
        const { container } = render(withTheme(
            <DropdownItem onClick={handleClick}>Item</DropdownItem>
        ))
        fireEvent.focus(container.querySelector('li'))
        fireEvent.keyDown(container.querySelector('li'), { key: 'Enter' })
        expect(handleClick).toHaveBeenCalled()
    })
})
