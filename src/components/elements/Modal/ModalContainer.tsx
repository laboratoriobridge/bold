import { Interpolation } from 'emotion'
import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles'
import { Button } from '../button/Button/Button'

export type ModalSize = 'small' | 'large'

export interface ModalContainerProps extends WithStylesProps {
    size?: ModalSize
    style?: Interpolation
    onClose?(): any
}

@withStyles
export class ModalContainer extends React.PureComponent<ModalContainerProps> {

    static defaultProps: ModalContainerProps = {
        size: 'large',
        onClose: () => null,
    }

    render() {
        const { css, theme, size, style, onClose } = this.props
        const styles: Styles = {
            wrapper: {
                border: `1px solid ${theme.pallete.divider}`,
                boxShadow: `0px 2px 4px 0 rgba(0, 0, 0, 0.08)`,
                borderRadius: theme.radius.main,
                backgroundColor: theme.pallete.surface.main,
                position: 'relative',
            },
            sizes: {
                large: { width: 768 },
                small: { width: 480 },
            },
            closeButton: {
                position: 'absolute',
                top: '1rem',
                right: '1rem',
            },
        }
        return (
            <div className={css(styles.wrapper, styles.sizes[size], style)}>
                <Button size='small' skin='ghost' style={styles.closeButton} icon='times' onClick={onClose} />
                {this.props.children}
            </div>
        )
    }
}
