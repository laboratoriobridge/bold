import * as React from 'react'

import { Omit } from '../../../util/types'
import { Button, ButtonProps } from '../button'
import { PopperController } from '../Popper'

import { Dropdown } from './Dropdown'
import { DropdownItem, DropdownItemProps } from './DropdownMenu'

export type DropdownItemConfig = Omit<DropdownButtonItemProps, 'controller'>

export interface DropdownButtonProps extends ButtonProps {
    items: DropdownItemConfig[]
}

export class DropdownButton extends React.PureComponent<DropdownButtonProps> {

    render() {
        const { items } = this.props
        return (
            <Dropdown renderTarget={this.renderButton}>
                {(ctrl: PopperController) =>
                    items.map((item, idx) => <DropdownButtonItem key={idx} controller={ctrl} {...item} />)
                }
            </Dropdown>
        )
    }

    renderButton = (ctrl: PopperController) => {
        const { items, ...other } = this.props
        return (
            <Button
                onClick={ctrl.toggle}
                {...other}
            />
        )
    }
}

export interface DropdownButtonItemProps extends DropdownItemProps {
    content: React.ReactNode
    controller: PopperController
    autoClose?: boolean
}

export class DropdownButtonItem
    extends React.PureComponent<DropdownButtonItemProps> {

    static defaultProps: Partial<DropdownButtonItemProps> = {
        content: '',
        autoClose: true,
    }

    render() {
        const { content, controller, autoClose, ...other } = this.props
        return <DropdownItem {...other} onClick={this.handleClick}>{content}</DropdownItem>
    }

    handleClick = (e) => {
        const { controller, onClick, autoClose } = this.props
        if (autoClose) {
            controller.hide()
        }
        onClick && onClick(e)
    }

}
