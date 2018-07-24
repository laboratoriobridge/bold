import * as React from 'react'

import { Popper, PopperController, PopperProps } from '../Popper'

import { DropdownMenu, DropdownMenuProps } from './DropdownMenu'

export interface DropdownProps extends DropdownMenuProps {
    renderTarget: PopperProps['renderTarget']
    children: PopperProps['children']
    closeOnOutsideClick?: PopperProps['closeOnOutsideClick']
    placement?: PopperProps['placement']
    offset?: PopperProps['offset']
}

export class Dropdown extends React.PureComponent<DropdownProps> {

    static defaultProps: DropdownProps = {
        offset: 0.25,
        closeOnOutsideClick: true,
        placement: 'bottom',
        renderTarget: () => null,
        children: () => null,
    }

    render() {
        const { renderTarget, children, closeOnOutsideClick, placement, offset, ...rest } = this.props

        return (
            <Popper
                renderTarget={renderTarget}
                placement={placement}
                offset={offset}
                closeOnOutsideClick={closeOnOutsideClick}
            >
                {(ctrl: PopperController) => (
                    <DropdownMenu {...rest}>
                        {children(ctrl)}
                    </DropdownMenu>
                )}
            </Popper>
        )
    }
}
