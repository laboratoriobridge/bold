import * as React from 'react'
import { Manager, Reference } from 'react-popper'

import { withStyles, WithStylesProps } from '../../../styles'

import { PopperContent, PopperContentProps } from './PopperContent'

export interface PopperProps extends WithStylesProps {
    placement?: PopperContentProps['placement']
    renderTarget(controller: PopperController): React.ReactNode
    children(controller: PopperController): React.ReactNode
}

export interface PopperController {
    show(): any
    hide(): any
    toggle(): any
}

export interface PopperState {
    show: boolean
}

@withStyles
export class Popper extends React.PureComponent<PopperProps, PopperState> {

    static defaultProps: PopperProps = {
        placement: 'bottom',
        renderTarget: () => null,
        children: () => null,
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
        const { renderTarget, css, children } = this.props
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
                    <PopperContent show={this.state.show} placement={this.props.placement}>
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
}
