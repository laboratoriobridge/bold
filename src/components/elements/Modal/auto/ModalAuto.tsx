import React from 'react'

import { HFlow } from '../../../layout/Flow/HFlow'
import { Button, ButtonProps } from '../../Button'
import { Modal, ModalProps } from '../Modal'

export interface ModalAutoProps {
    actions?: ButtonProps[]
    size?: ModalProps['size']
    render(renderProps: ModalAutoRenderProps): React.ReactNode
    dispose(): void
}

export interface ModalAutoState {
    open: boolean
}

export interface ModalAutoRenderProps {
    close(): void
}

export class ModalAuto extends React.PureComponent<ModalAutoProps, ModalAutoState> {

    state = {
        open: false,
    }

    componentDidMount() {
        // Timeout to preserve opening transition
        window.setTimeout(() => {
            this.setState({ open: true })
        }, 1)
    }

    dispose = () => {
        // Disposing with timeout to preserve closing transition
        window.setTimeout(this.props.dispose, 500)
    }

    render() {
        const { render, actions, size } = this.props
        return (
            <Modal
                open={this.state.open}
                size={size}
                renderFooter={actions && this.renderFooter}
                onClose={this.close}
                onBackdropClick={this.close}
            >
                {render({
                    close: this.close,
                })}
            </Modal>
        )
    }

    renderFooter = () => {
        const { actions } = this.props
        return (
            <HFlow justifyContent='flex-end'>
                {actions.map((action, idx) =>
                    <Button
                        key={idx}
                        style={{ minWidth: 144 }}
                        {...action}
                        onClick={this.handleAction(action)}
                    />
                )}
            </HFlow>
        )
    }

    close = () => {
        this.setState({ open: false })
        this.dispose()
    }

    handleAction = (action: ButtonProps) => (e) => {
        if (action.onClick) {
            action.onClick(e)
        }

        this.close()
    }
}
