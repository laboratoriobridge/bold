import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'

import { ModalBackdrop } from './ModalBackdrop'
import { ModalBody } from './ModalBody'
import { ModalContainer, ModalContainerProps } from './ModalContainer'
import { ModalFooter } from './ModalFooter'

export interface ModalProps extends WithStylesProps, ModalContainerProps {
    open: boolean
    renderFooter?(): React.ReactNode
    onBackdropClick?(): any
}

@withStyles
export class Modal extends React.PureComponent<ModalProps> {

    static defaultProps = {
        onBackdropClick: () => null,
    }

    render() {
        const { open, renderFooter, onBackdropClick, css, theme, ...rest } = this.props
        const styles = {
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
            container: {
                zIndex: theme.zIndex.modalContainer,
                position: 'fixed',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
            },
        }

        return (
            <div className={css(styles.wrapper, open ? styles.open : styles.close)}>
                <ModalContainer styles={styles.container} {...rest}>
                    <ModalBody>
                        {this.props.children}
                    </ModalBody>

                    {renderFooter &&
                        <ModalFooter>
                            {renderFooter()}
                        </ModalFooter>
                    }
                </ModalContainer>

                <ModalBackdrop onClick={onBackdropClick} />
            </div>
        )
    }
}
