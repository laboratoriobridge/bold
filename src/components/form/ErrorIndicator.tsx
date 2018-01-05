import { Map } from 'immutable'
import * as React from 'react'
import { findDOMNode } from 'react-dom'
import { Icon } from '../elements/Icon'
import { Popover } from '../elements/Popover'

export interface ErrorIndicatorProps {
    error: Map<string, string>
}

export class ErrorIndicator extends React.Component<ErrorIndicatorProps, any> {

    private icon: Icon

    constructor(props) {
        super(props)
        this.state = {
            showErrorPopover: false,
        }
    }

    handleMouseOver = () => {
        this.setState({ showErrorPopover: true })
    }

    handleMouseLeave = () => {
        this.setState({ showErrorPopover: false })
    }

    findTarget = () => {
        return findDOMNode(this.icon)
    }

    render() {
        return (
            <span>
                <Icon
                    ref={icon => this.icon = icon}
                    className='error-indicator'
                    size='small'
                    icon='invalido'
                    onMouseOver={this.handleMouseOver}
                    onMouseLeave={this.handleMouseLeave}
                />
                <Popover
                    show={this.state.showErrorPopover}
                    placement='right'
                    target={this.findTarget}
                    className='error-popover'
                >
                    <p className='error-title'>{this.props.error.get('titulo')}</p>
                    <p className='error-message'>{this.props.error.get('mensagem')}</p>
                </Popover>
            </span>
        )
    }

}
