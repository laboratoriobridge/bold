import { Interpolation } from 'emotion'
import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../../styles'
import { Omit } from '../../../../util/types'
import { createStyles, InputStatus } from '../TextInput/TextInput'

export interface TextAreaProps extends WithStylesProps,
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'css' | 'style'> {
    status?: InputStatus
    style?: Interpolation
}

@withStyles
export class TextArea extends React.PureComponent<TextAreaProps> {
    render() {
        const { css, theme, status, style, ...rest } = this.props
        const styles: Styles = {
            ...createStyles(theme),
            counter: {
                textAlign: 'right',
                color: status === 'error' && theme.pallete.status.danger.main,
            },
        }
        const classes = css(styles.input,
            status === 'error' && styles.error,
            style
        )

        const currentLength = this.valueLength() || this.defaultValueLength() || 0

        return (
            <div>
                <textarea className={classes} {...rest} />
                {this.props.maxLength &&
                    <div className={css(styles.counter)}>{currentLength}/{this.props.maxLength} caracteres</div>
                }
            </div>
        )
    }

    valueLength = () => {
        return this.props.value && typeof this.props.value === 'string' && this.props.value.length
    }

    defaultValueLength = () => {
        return this.props.defaultValue && typeof this.props.defaultValue === 'string' && this.props.defaultValue.length
    }
}
