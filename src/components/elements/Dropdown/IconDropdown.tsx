import * as React from 'react'
import { Overlay } from 'react-overlays'

import { withStyles, WithStylesProps } from '../../../styles'
import { DropdownItem, DropdownMenu } from '../Dropdown/DropdownMenu'
import { Icons } from '../Icon/generated/Icons'
import { Icon } from '../Icon/Icon'
import { OverlayContent } from '../Overlay/OverlayContent'

export interface OptionItem {
    title: string
    onClick(): any
}

export interface IconDropdownProps extends WithStylesProps {
    icon?: Icons
    options: OptionItem[]
}

export interface IconDropdownState {
    show: boolean
}

@withStyles
export class IconDropdown extends React.Component<IconDropdownProps, IconDropdownState> {

    static defaultProps: Partial<IconDropdownProps> = {
        icon: 'dots',
    }

    private trigger

    constructor(props: IconDropdownProps) {
        super(props)
        this.state = {
            show: false,
        }
    }

    render() {
        const { icon, options, css } = this.props
        const styles = {
            container: {
                position: 'relative',
                marginLeft: '0.5rem',
            },
            button: {
                fontWeight: 'bold',
            },
            icon: {
                marginLeft: '0.25rem',
            },
        }

        return (
            <span className={css(styles.container)}>
                <a className={css(styles.button)} onClick={this.toggleShow} ref={this.triggerRef}>
                    <span className={css(styles.icon)}><Icon icon={icon} /></span>
                </a>
                <Overlay
                    show={this.state.show}
                    placement='bottom'
                    container={this}
                    target={this.trigger}
                    rootClose={true}
                    onHide={this.toggleShow}
                >
                    <OverlayContent>
                        <DropdownMenu>
                            {options.map((option, idx) => (
                                <DropdownItem key={idx} onClick={this.handleClick(option)}>{option.title}</DropdownItem>
                            ))}
                        </DropdownMenu>
                    </OverlayContent>
                </Overlay>
            </span>
        )
    }

    handleClick = (option: OptionItem) => (e) => {
        option.onClick()
        this.toggleShow()
    }

    toggleShow = () => {
        this.setState({ show: !this.state.show })
    }

    triggerRef = (elem) => {
        this.trigger = elem
    }
}
