import * as React from 'react'
import * as classnames from 'classnames'
import { Modal } from '../Modal'
import { Icon } from '../Icon'
import { Button } from '../Button/Button'
import { Linha } from '../../layout/Linha'
import { AlertModalButtonBar } from './AlertModalButtonBar'
import { AlertModalContent } from './AlertModalContent'

export interface AlertModalProps {
    active?: boolean
    error?: boolean
    icon?: string
    info?: boolean
    success?: boolean
}

export class AlertModal extends React.Component<AlertModalProps, any> {

    getIcon = () => {
        if (this.props.icon) {
            return this.props.icon
        }
        if (this.props.success) {
            return 'modal-sucesso'
        } else if (this.props.error) {
            return 'modal-erro'
        } else if (this.props.info) {
            return 'modal-atencao'
        }
        return ''
    }

    render() {
        const tipo = classnames('alertmodal-card modal-content', {
            ' is-success': this.props.success,
            ' is-error': this.props.error,
            ' is-info': this.props.info
        })

        return (
            <Modal active={this.props.active}>
                <div className={tipo}>
                    <Icon icon={this.getIcon()} className='alertmodal-icon' />
                    {this.props.children}
                </div>
            </Modal>
        )
    }

}

export interface AlertModalErrorProps {
    active?: boolean
    error?: any
    icon?: string
    onClose: () => void
    title?: string
}

export const AlertModalError: React.SFC<AlertModalErrorProps> = (props) => {

    return (
        <AlertModal active={props.active} icon={props.icon} error>
            <AlertModalContent title={props.title}>
                {props.children}
            </AlertModalContent>
            <AlertModalButtonBar>
                <Button type='primary' size='medium' onClick={props.onClose}>OK</Button>
            </AlertModalButtonBar>
        </AlertModal>
    )

}

export interface AlertModalLeaveProps {
    active?: boolean
    callback: (shouldNavigate: boolean) => void
}

export class AlertModalLeave extends React.Component<AlertModalLeaveProps, any> {

    constructor(props, context?) {
        super(props, context)

        this.state = {
            active: true
        }
    }

    componentWillReceiveProps() {
        this.state = {
            active: true
        }
    }

    onCancel = () => {
        this.props.callback(false)
        this.close()
    }

    onLeave = () => {
        this.props.callback(true)
        this.close()
    }

    close() {
        this.setState({ active: false })
    }

    render() {
        return (
            <AlertModal active={this.state.active} info>
                <AlertModalContent title='Deseja sair?'>
                    Você preencheu alguns dados, se você sair agora esses dados serão perdidos. Tem certeza que deseja sair?
                </AlertModalContent>
                <AlertModalButtonBar >
                    <Button
                        size='medium'
                        onClick={this.onCancel}>Cancelar</Button>
                    <Button
                        type='primary'
                        size='medium'
                        onClick={this.onLeave}>Sair</Button>
                </AlertModalButtonBar>
            </AlertModal>
        )
    }

}

export interface AlertModalSuccessProps {
    active?: boolean
    icon?: string
    onClose: () => void
    result?: any
    title?: string
}

export const AlertModalSuccess: React.SFC<AlertModalSuccessProps> = (props) => {
    return (
        <AlertModal active={props.active} icon={props.icon} success>
            <AlertModalContent title={props.title}>
                {props.children}
            </AlertModalContent>
            <AlertModalButtonBar >
                <Linha />
                <Button
                    type='success'
                    size='medium'
                    onClick={props.onClose}>OK</Button>
            </AlertModalButtonBar>
        </AlertModal>
    )
}

export interface AlertModalDeleteProps {
    active?: boolean
    onClose: () => void
    onOk: () => void
}

export const AlertModalDelete: React.SFC<AlertModalDeleteProps> = (props) => {
    return (
        <AlertModalConfirmacao {...props} title='Confirmar exclusão!'>
            Tem certeza que deseja excluir esse item?
        </AlertModalConfirmacao>
    )
}

export interface AlertModalConfirmacaoProps {
    active?: boolean
    icon?: string
    onClose: () => void
    onOk: () => void
    title?: string
}

export const AlertModalConfirmacao: React.SFC<AlertModalConfirmacaoProps> = (props) => {
    return (
        <AlertModal active={props.active} icon={props.icon} info>
            <AlertModalContent title={props.title}>
                {props.children}
            </AlertModalContent>
            <AlertModalButtonBar>
                <Button size='medium' onClick={props.onClose}>Cancelar</Button>
                <Button type='primary' size='medium' onClick={props.onOk}>Confirmar</Button>
            </AlertModalButtonBar>
        </AlertModal>
    )
}
