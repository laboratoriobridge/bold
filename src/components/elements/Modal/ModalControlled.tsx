import * as React from 'react'

import { withStyles } from '../../../styles'
import { Omit } from '../../../util/types'

import { Modal, ModalProps } from './Modal'

export interface ModalControlledProps extends Omit<ModalProps, 'open' | 'renderFooter'> {
    control(controller: ModalController): any
    renderFooter?(controller: ModalController): React.ReactNode
}

export interface ModalControlledState {
    open: boolean
}

export interface ModalController {
    open(): void
    close(): void
}

@withStyles
export class ModalControlled extends React.PureComponent<ModalControlledProps, ModalControlledState> {
    private controller: ModalController

    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }

        this.controller = {
            open: () => this.setState({ open: true }),
            close: () => this.setState({ open: false }),
        }
    }

    componentDidMount() {
        this.props.control(this.controller)
    }

    render() {
        const { control, renderFooter, ...rest } = this.props
        return (
            <Modal
                open={this.state.open}
                renderFooter={renderFooter && this.renderFooter}
                onClose={this.controller.close}
                onBackdropClick={this.controller.close}
                {...rest}
            />
        )
    }

    renderFooter = () => {
        return this.props.renderFooter && this.props.renderFooter(this.controller)
    }
}
