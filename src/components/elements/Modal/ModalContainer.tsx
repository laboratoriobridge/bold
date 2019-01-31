import { Interpolation } from 'emotion'
import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles'
import { Button } from '../Button'

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
            },
        }
        return (
            <div className={css(styles.wrapper, style)}>
                <Button size='small' skin='ghost' style={styles.closeButton} icon='timesDefault' onClick={onClose} />
                {this.props.children}
            </div>
        )
    }
}
