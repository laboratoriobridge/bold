import { Interpolation } from 'emotion'
import * as React from 'react'
import { Manager, Reference } from 'react-popper'

import { withStyles, WithStylesProps } from '../../../styles'

import { PopperContent, PopperContentProps } from './PopperContent'

export interface PopperProps extends WithStylesProps {
    closeOnOutsideClick?: boolean
    placement?: PopperContentProps['placement']
    offset?: PopperContentProps['offset']
    style?: Interpolation
    block?: boolean
    renderTarget(controller: PopperController): React.ReactNode
    children(controller: PopperController): React.ReactNode
    control?(controller: PopperController): void
}

export interface PopperController {
    show(): any
    hide(): any
    toggle(): any
    isShown(): boolean
}

export interface PopperState {
    show: boolean
}

@withStyles
export class Popper extends React.PureComponent<PopperProps, PopperState> {

    static defaultProps: PopperProps = {
        placement: 'bottom',
        closeOnOutsideClick: true,
        offset: 0,
        block: false,
        renderTarget: () => null,
        children: () => null,
        control: () => null,
    }

    private wrapperRef
    private controller: PopperController

    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
        this.controller = {
            show: this.show,
            hide: this.hide,
            toggle: this.toggle,
            isShown: this.isShown,
        }
    }

    componentDidMount() {
        if (this.props.closeOnOutsideClick) {
            document.addEventListener('mousedown', this.handleClickOutside)
        }

        this.props.control(this.controller)
    }

    componentWillUnmount() {
        if (this.props.closeOnOutsideClick) {
            document.removeEventListener('mousedown', this.handleClickOutside)
        }
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
        const { renderTarget, css, children, style, block } = this.props
        const styles = {
            wrapper: {
                display: block ? 'block' : 'inline-block',
            },
        }
        return (
            <div ref={this.setWrapperRef} className={css(styles.wrapper, style)}>
                <Manager>
                    <Reference>
                        {refProps => (
                            <div ref={refProps.ref} className={css(styles.wrapper)}>
                                {renderTarget(this.controller)}
                            </div>
                        )}
                    </Reference>
                    <PopperContent show={this.state.show} placement={this.props.placement} offset={this.props.offset}>
                        {children(this.controller)}
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

    isShown = () => {
        return this.state.show
    }
}
