import { Interpolation } from 'emotion'
import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles'

import { ModalBackdrop } from './ModalBackdrop'
import { ModalBody } from './ModalBody'
import { ModalContainer, ModalContainerProps } from './ModalContainer'
import { ModalFooter } from './ModalFooter'

export type ModalSize = 'small' | 'large' | 'auto'

export interface ModalProps extends WithStylesProps {
    open: boolean
    size?: ModalSize
    onClose?: ModalContainerProps['onClose']
    style?: Interpolation
    renderFooter?(): React.ReactNode
    onBackdropClick?(): any
}

@withStyles
export class Modal extends React.PureComponent<ModalProps> {

    static defaultProps = {
        size: 'large',
        onBackdropClick: () => null,
    }

    render() {
        const { open, renderFooter, onClose, onBackdropClick, css, theme, size, style } = this.props
        const styles: Styles = {
            wrapper: {
                transition: 'all .2s',
            },
            open: {
                visibility: 'visible',
                opacity: 1,
            },
            close: {
                visibility: 'hidden',
                opacity: 0,
            },
            modal: {
                position: 'fixed',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                pointerEvents: 'none',
                zIndex: theme.zIndex.modalContainer,
                display: 'flex',
                justifyContent: 'center',
            },
            container: {
                maxHeight: '80vh',
                overflow: 'auto',
            },
            sizes: {
                large: { width: 850 },
                small: { width: 520 },
                auto: { maxWidth: '80%' },
            },
        }

        return (
            <div className={css(styles.wrapper, open ? styles.open : styles.close)}>
                <div className={css(styles.modal)}>
                    <ModalContainer style={css(styles.container, styles.sizes[size], style)} onClose={onClose}>
                        <ModalBody>
                            {this.props.children}
                        </ModalBody>

                        {renderFooter &&
                            <ModalFooter>
                                {renderFooter()}
                            </ModalFooter>
                        }
                    </ModalContainer>
                </div>

                <ModalBackdrop onClick={onBackdropClick} />
            </div>
        )
    }
}
