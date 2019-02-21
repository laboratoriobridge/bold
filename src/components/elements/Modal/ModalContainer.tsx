import { Interpolation } from 'emotion'
import React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Tooltip } from '../Tooltip'

export interface ModalContainerProps extends WithStylesProps {
    style?: Interpolation
    onClose?(): any
}

@withStyles
export class ModalContainer extends React.PureComponent<ModalContainerProps> {

    static defaultProps: ModalContainerProps = {
        onClose: () => null,
    }

    render() {
        const { css, theme, style, onClose } = this.props
        const styles: Styles = {
            wrapper: {
                border: `1px solid ${theme.pallete.divider}`,
                boxShadow: theme.shadows.outer['160'],
                borderRadius: theme.radius.modal,
                backgroundColor: theme.pallete.surface.main,
                minWidth: 520,
                pointerEvents: 'auto',
            },
            closeButton: {
                float: 'right',
                marginTop: '0.5rem',
                marginRight: '0.5rem',
            },
        }
        return (
            <div className={css(styles.wrapper, style)}>
                <Tooltip text='Fechar'>
                    <Button
                        aria-label='Fechar'
                        size='small'
                        skin='ghost'
                        style={styles.closeButton}
                        onClick={onClose}
                    >
                        <Icon icon='timesDefault' />
                    </Button>
                </Tooltip>

                {this.props.children}
            </div>
        )
    }
}
