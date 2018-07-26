import { Interpolation } from 'emotion'
import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles'
import { Button } from '../button/Button/Button'

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
                borderRadius: theme.radius.main,
                backgroundColor: theme.pallete.surface.main,
                position: 'relative',
                minWidth: 520,
            },
            closeButton: {
                position: 'absolute',
                top: '1rem',
                right: '1rem',
            },
        }
        return (
            <div className={css(styles.wrapper, style)}>
                <Button size='small' skin='ghost' style={styles.closeButton} icon='times' onClick={onClose} />
                {this.props.children}
            </div>
        )
    }
}
