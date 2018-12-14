import * as React from 'react'
import { Manager, PopperProps, Reference } from 'react-popper'

import { withStyles, WithStylesProps } from '../../../styles'

import { PopperContent, PopperContentProps } from './PopperContent'

export interface PopperFocusProps extends WithStylesProps {
    placement?: PopperProps['placement']
    offset?: PopperContentProps['offset']
    renderPopper?(): React.ReactNode
}

export interface PopperFocusState {
    show: boolean
}

/**
 * Creates a popper element when the children is hovered or focused.
 */
@withStyles
export class PopperFocus extends React.PureComponent<PopperFocusProps, PopperFocusState> {

    static defaultProps: Partial<PopperFocusProps> = {
        placement: 'right',
    }

    constructor(props: PopperFocusProps) {
        super(props)
        this.state = {
            show: false,
        }
    }

    render() {
        const { css, placement, offset } = this.props
        const styles = {
            wrapper: {
                display: 'inline-block',
            },
        }

        return (
            <Manager>
                <Reference>
                    {refProps => (
                        <div
                            className={css(styles.wrapper)}
                            onMouseEnter={this.show}
                            onMouseLeave={this.hide}
                            onFocus={this.show}
                            onBlur={this.hide}
                            data-show={this.state.show}
                            ref={refProps.ref}
                        >
                            {React.Children.only(this.props.children)}
                        </div>
                    )}
                </Reference>
                {this.props.renderPopper &&
                    <PopperContent show={this.state.show} placement={placement} offset={offset}>
                        {this.props.renderPopper()}
                    </PopperContent>
                }
            </Manager>
        )
    }

    show = () => {
        this.setState({ show: true })
    }

    hide = () => {
        this.setState({ show: false })
    }
}
