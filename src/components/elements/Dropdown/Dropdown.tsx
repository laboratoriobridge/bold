import * as React from 'react'

import { Popper, PopperController, PopperProps } from '../Popper'

import { DropdownMenu, DropdownMenuProps } from './DropdownMenu'

export interface DropdownProps extends DropdownMenuProps {
    renderTarget: PopperProps['renderTarget']
    children: PopperProps['children']
}

export class Dropdown extends React.PureComponent<DropdownProps> {

    static defaultProps: DropdownProps = {
        renderTarget: () => null,
        children: () => null,
    }

    render() {
        const { renderTarget, children, ...rest } = this.props

        return (
            <Popper renderTarget={renderTarget} placement='bottom' offset={0.25}>
                {(ctrl: PopperController) => (
                    <DropdownMenu {...rest}>
                        {children(ctrl)}
                    </DropdownMenu>
                )}
            </Popper>
        )
    }
}
