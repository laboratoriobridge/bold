import * as React from 'react'

import { Popper, PopperController, PopperProps } from '../Popper'

import { DropdownMenu, DropdownMenuProps } from './DropdownMenu'

export interface DropdownProps extends DropdownMenuProps, PopperProps {
    placement?: PopperProps['placement']
    renderTarget: PopperProps['renderTarget']
    children: PopperProps['children']
}

export class Dropdown extends React.PureComponent<DropdownProps> {

    static defaultProps: DropdownProps = {
        placement: 'bottom',
        renderTarget: () => null,
        children: () => null,
    }

    render() {
        const { placement, renderTarget, children, ...rest } = this.props

        return (
            <Popper placement={placement} renderTarget={renderTarget}>
                {(ctrl: PopperController) => (
                    <DropdownMenu {...rest}>
                        {children(ctrl)}
                    </DropdownMenu>
                )}
            </Popper>
        )
    }
}
