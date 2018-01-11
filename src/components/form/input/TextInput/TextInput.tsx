import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Input, PublicInputProps } from '../Input/Input'

export interface TextInputProps extends PublicInputProps, WithStylesProps {
    status?: '' | 'error'
}

@withStyles
export class TextInput extends React.Component<TextInputProps> {
    public input: Input

    focus() {
        this.input.focus()
    }

    blur() {
        this.input.blur()
    }

    render() {
        const { createStyles, css, status, ...rest } = this.props
        const styles = createStyles(theme => ({
            input: {
                backgroundColor: theme.color.white,
                border: 'solid 1px ' + theme.color.gray30,
                borderRadius: 2,
                fontSize: '0.75rem',
                lineHeight: '1',
                padding: '0.5rem 1rem',
                ':hover': {
                    borderColor: theme.color.gray40,
                },
                ':focus': {
                    borderColor: theme.color.primary,
                    outline: 'none',
                },
                ':active': {
                    borderColor: theme.color.primary,
                    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
                },
            },
            error: {
                border: 'solid 1px ' + theme.color.red,
            },
        }))

        const classes = css(styles.input,
            status === 'error' && styles.error)

        return (
            <Input ref={input => this.input = input} {...rest} className={classes} type='text' />
        )
    }

}
