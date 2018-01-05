import * as classnames from 'classnames'
import * as React from 'react'

import { Placement, Popover } from './Popover'

export interface HintProps {
    placement?: Placement
    componente: any,
    type?: 'normal' | 'primary',
    className?: string
}

export interface HintState {
    showPopover: boolean
}

export class Hint extends React.Component<HintProps, HintState> {

    static defaultProps: Partial<HintProps> = {
        type: 'normal',
    }

    private instance: any

    constructor(props) {
        super(props)
        this.state = {
            showPopover: false,
        }
    }

    render() {
        const classes = classnames('hint', this.props.type)
        return (
            <span className={classnames('hint-wrapper', this.props.className)}>
                <Popover
                    className={classes}
                    color='dark-grey'
                    show={this.state.showPopover}
                    placement={this.props.placement}
                    target={this.instance}
                >
                    {this.props.children}
                </Popover>
                {this.props.componente && this.cloneComponent()}

            </span>
        )
    }

    cloneComponent() {
        return React.cloneElement(this.props.componente, {
            onMouseOver: () => this.setState({ showPopover: true }),
            onMouseLeave: () => this.setState({ showPopover: false }),
            ref: elem => this.instance = elem,
        })
    }

}
