import * as React from 'react'
import { findDOMNode } from 'react-dom'
import { Map } from 'immutable'
import { Icon } from '../elements/Icon'
import { Popover } from '../elements/Popover'

export interface ErrorIndicatorProps {
    error: Map<string, string>
}

export class ErrorIndicator extends React.Component<ErrorIndicatorProps, any> {

    constructor(props) {
        super(props)
        this.state = {
            showErrorPopover: false
        }
    }

    render() {
        return (
            <span>
                <Icon ref='errorIndicator' className='error-indicator' size='small' icon='invalido'
                    onMouseOver={() => this.setState({ showErrorPopover: true })}
                    onMouseLeave={() => this.setState({ showErrorPopover: false })}
                />
                <Popover
                    show={this.state.showErrorPopover}
                    placement='right'
                    target={props => findDOMNode(this.refs['errorIndicator'])}
                    className='error-popover'
                >
                    <p className='error-title'>{this.props.error.get('titulo')}</p>
                    <p className='error-message'>{this.props.error.get('mensagem')}</p>
                </Popover>
            </span>
        )
    }

}
