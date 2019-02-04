import { Interpolation } from 'emotion'
import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles'

export interface TooltipPopperProps extends WithStylesProps {
    text: string
    style?: Interpolation
}

@withStyles
export class TooltipPopper extends React.PureComponent<TooltipPopperProps> {

    render() {
        const { css, theme, style, text } = this.props
        const styles: Styles = {
            base: {
                borderRadius: theme.radius.popper,
                maxWidth: theme.breakpoints.size.small,
                background: theme.pallete.gray.c20,
                color: '#fff',
                fontWeight: 'bold',
                lineHeight: 1.5,
            },
            small: {
                textAlign: 'center',
                padding: '0.5rem',
            },
            big: {
                textAlign: 'left',
                padding: '1rem',
                maxWidth: 277,
            },
        }

        const size = text.length > 60 ? 'big' : 'small'

        return (
            <div className={css(styles.base, styles[size], style)}>{text}</div>
        )
    }
}
