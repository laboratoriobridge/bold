import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Input, InputProps } from '../Input/Input'

export interface TextInputProps extends InputProps, WithStylesProps {
    status?: '' | 'error'
    type?: 'text' | 'password'
}

@withStyles
export class TextInput extends React.Component<TextInputProps> {

    static defaultProps: Partial<TextInputProps> = {
        type: 'text',
    }

    public input: Input

    focus() {
        this.input.focus()
    }

    blur() {
        this.input.blur()
    }

    render() {
        const { css, status, theme, ...rest } = this.props
        const styles = {
            input: {
                backgroundColor: theme.color.white,
                border: 'solid 1px ' + theme.color.gray80,
                borderRadius: 2,
                fontSize: '0.75rem',
                lineHeight: '1',
                padding: '0.5rem 1rem',
                '::placeholder': {
                    color: theme.color.gray80,
                },
                ':disabled': {
                    backgroundColor: theme.color.background,
                },
                ':not(:disabled):hover': {
                    borderColor: theme.color.gray60,
                },
                ':not(:disabled):focus': {
                    borderColor: theme.color.primary,
                    outline: 'none',
                },
                ':not(:disabled):active': {
                    borderColor: theme.color.primary,
                    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
                },
            },
            error: {
                border: 'solid 1px ' + theme.color.red,
            },
        }

        const classes = css(styles.input,
            status === 'error' && styles.error)

        return (
            <Input ref={input => this.input = input} {...rest} className={classes} />
        )
    }

}
