import * as React from 'react'

import { Omit } from '../../../util/types'
import { Button, ButtonProps } from '../Button'

import { Dropdown, DropdownTargetRenderProps } from './Dropdown'
import { DropdownItem, DropdownItemProps, DropdownMenu } from './DropdownMenu'

export type DropdownItemConfig = Omit<DropdownButtonItemProps, 'closeMenu'>

export interface DropdownButtonProps extends ButtonProps {
    items: DropdownItemConfig[]
}

export class DropdownButton extends React.PureComponent<DropdownButtonProps> {

    render() {
        const { items } = this.props
        return (
            <Dropdown renderTarget={this.renderButton} onChange={this.handleChange}>
                {({ closeMenu, highlightedIndex, getMenuProps, getItemProps }) => (
                    <DropdownMenu highlightedIndex={highlightedIndex} {...getMenuProps()}>
                        {items.map((item, idx) => (
                            <DropdownButtonItem
                                key={idx}
                                closeMenu={closeMenu}
                                {...getItemProps({ item })}
                                highlighted={highlightedIndex === idx}
                                {...item}
                            />
                        ))}
                    </DropdownMenu>
                )}
            </Dropdown>
        )
    }

    renderButton = ({ ref, getRootProps, getToggleButtonProps }: DropdownTargetRenderProps) => {
        const { items, ...other } = this.props
        return (
            <Button
                innerRef={ref}
                {...getRootProps()}
                {...getToggleButtonProps()}
                {...other}
            />
        )
    }

    handleChange = (item: DropdownItemConfig) => {
        item.onSelected && item.onSelected()
    }
}

export interface DropdownButtonItemProps extends DropdownItemProps {
    content: React.ReactNode
    autoClose?: boolean
    closeMenu?(): void
}

export class DropdownButtonItem extends React.PureComponent<DropdownButtonItemProps> {

    static defaultProps: Partial<DropdownButtonItemProps> = {
        content: '',
        autoClose: true,
    }

    render() {
        const { content, closeMenu, autoClose, ...other } = this.props
        return <DropdownItem {...other} onSelected={this.handleClick}>{content}</DropdownItem>
    }

    handleClick = () => {
        const { onSelected, autoClose, closeMenu } = this.props
        if (autoClose) {
            closeMenu()
        }
        onSelected && onSelected()
    }

}
