import * as React from 'react'
import { Overlay } from 'react-overlays'
import * as classnames from 'classnames'

export interface PopoverProps {
    borderColor?: string
    className?: string
    color?: string
    onHide?: Function
    placement?: string
    rootClose?: boolean
    show?: boolean
    target?: Function
}

export class Popover extends React.Component<PopoverProps> {
    render() {
        return (
            <Overlay
                onHide={this.props.onHide}
                placement={this.props.placement}
                rootClose={this.props.rootClose}
                show={this.props.show}
                target={this.props.target}
            >
                <PopoverContent
                    className={this.props.className}
                    borderColor={this.props.borderColor}
                    color={this.props.color}
                >
                    {this.props.children}
                </PopoverContent>
            </Overlay>
        )
    }

}

const PopoverContent = props => {
    let {
        style,
        children
    } = props

    const classes = classnames('popover', props.className, props.placement, {
        'grey': props.color && props.color === 'grey',
        'dark-grey': props.color && props.color === 'dark-grey'
    })

    return (
        <div className={classes} style={{ ...style }}>
            <div className='popover-content'>
                {children}
            </div>
        </div>
    )
}
