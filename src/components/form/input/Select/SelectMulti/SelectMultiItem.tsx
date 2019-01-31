import { Interpolation } from 'emotion'
import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../../../styles'
import Times from '../../../../elements/Icon/generated/Times'

export interface SelectMultiItemProps extends WithStylesProps {
    style?: Interpolation
    disabled?: boolean
    onRemove(e: React.MouseEvent<HTMLSpanElement>): void
}

@withStyles
export class SelectMultiItem extends React.Component<SelectMultiItemProps> {
    render() {
        const { theme, css, style, children, onRemove, disabled, ...rest } = this.props
        const styles: Styles = {
            root: {
                border: `1px solid ${theme.pallete.divider}`,
                borderRadius: theme.radius.button,
                display: 'inline-flex',
                alignItems: 'center',
                fontWeight: 'bold',
            },
            text: {
                padding: disabled ? 'calc(0.25rem - 1px) 0.25rem' : 'calc(0.125rem - 1px) 0.25rem',
            },
            button: {
                background: theme.pallete.surface.background,
                cursor: 'pointer',
                fontSize: '1.25rem',
                display: 'inline-flex',
                alignItems: 'center',
                padding: 'calc(0.125rem - 1px) 0',
                '&:hover': {
                    color: theme.pallete.status.danger.main,
                },
                'svg': {
                    fill: 'currentColor',
                },
            },
        }
        return (
            <span className={css(styles.root, style)} {...rest}>
                <span className={css(styles.text)}>
                    {children}
                </span>
                {!disabled &&
                    <span className={css(styles.button)} onClick={onRemove} title='Remover'>
                        <Times />
                    </span>
                }
            </span>
        )
    }
}
