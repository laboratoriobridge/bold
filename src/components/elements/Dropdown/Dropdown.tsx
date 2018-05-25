import * as React from 'react'
import { Manager, Reference } from 'react-popper'

import { withStyles, WithStylesProps } from '../../../styles'
import { PopperContent } from '../poppers/PopperContent'

import { DropdownMenu, DropdownMenuProps } from './DropdownMenu'

export interface DropdownProps extends DropdownMenuProps, WithStylesProps {
    renderTarget(controller: DropdownController): React.ReactNode
    children(controller: DropdownController): React.ReactNode
}

export interface DropdownController {
    show(): any
    hide(): any
    toggle(): any
}

export interface DropdownState {
    show: boolean
}

@withStyles
export class Dropdown extends React.PureComponent<DropdownProps, DropdownState> {
    private wrapperRef
    private controller: DropdownController

    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
        this.controller = {
            show: this.show,
            hide: this.hide,
            toggle: this.toggle,
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside)
    }

    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.hide()
        }
    }

    setWrapperRef = (node) => {
        this.wrapperRef = node
    }

    render() {
        const { renderTarget, css, theme, children, ...rest } = this.props
        const styles = {
            wrapper: {
                display: 'inline-block',
            },
        }
        return (
            <div ref={this.setWrapperRef} className={css(styles.wrapper)}>
                <Manager>
                    <Reference>
                        {refProps => (
                            <div ref={refProps.ref} className={css(styles.wrapper)}>
                                {renderTarget(this.controller)}
                            </div>
                        )}
                    </Reference>
                    <PopperContent show={this.state.show} placement='bottom'>
                        <DropdownMenu {...rest}>
                            {children(this.controller)}
                        </DropdownMenu>
                    </PopperContent>
                </Manager>
            </div>
        )
    }

    toggle = () => {
        this.setState({ show: !this.state.show })
    }

    show = () => {
        this.setState({ show: true })
    }

    hide = () => {
        this.setState({ show: false })
    }
}
