import * as React from 'react'
import { Modal as OverlayModal } from 'react-overlays'
import * as ModalManager from 'react-overlays/lib/ModalManager'

export interface ModalProps {
    active: boolean
}

export class Modal extends React.Component<ModalProps> {

    render() {
        /**
         * Os types estão errados pra essa lib, por isso o cast.
         * 'onHide' está como required e 'manager' não existe.
         */
        const BootstrapModal = OverlayModal as any

        return (
            <BootstrapModal
                autoFocus={false}
                className='modal'
                backdropClassName='modal-background'
                show={this.props.active}
                manager={new ModalManager({ handleContainerOverflow: false })}
            >
                {this.props.children}
            </BootstrapModal>
        )
    }

}
