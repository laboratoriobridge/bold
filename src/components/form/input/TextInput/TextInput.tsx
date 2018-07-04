import { Interpolation } from 'emotion'
import * as React from 'react'

import { focusBoxShadow, Styles, Theme, withStyles, WithStylesProps } from '../../../../styles'
import { Input, PublicInputProps } from '../Input/Input'
import { InputIconDecorator, InputIconDecoratorProps } from '../InputIconDecorator/InputIconDecorator'

export type InputStatus = '' | 'error'

export interface TextInputProps extends PublicInputProps, WithStylesProps {
    status?: InputStatus
    password?: boolean
    icon?: InputIconDecoratorProps
    style?: Interpolation
}

export const createStyles = (theme: Theme): Styles => ({
    input: {
        backgroundColor: theme.pallete.surface.main,
        border: 'solid 1px ' + theme.pallete.gray.c80,
        borderRadius: theme.radius.main,
        color: theme.pallete.text.main,
        fontFamily: theme.typography.fontFamily,
        fontSize: '0.75rem',
        lineHeight: '1rem',
        padding: 'calc(0.5rem - 1px) 1rem',
        width: '100%',
        transition: 'all .2s',
        backfaceVisibility: 'hidden', // fixes box-shadow transition bug
        '::placeholder': {
            color: theme.pallete.gray.c80,
        },
        ':disabled': {
            backgroundColor: theme.pallete.surface.background,
        },
        ':not(:disabled):hover': {
            borderColor: theme.pallete.gray.c60,
        },
        ':not(:disabled):focus': {
            outline: 'none',
            boxShadow: focusBoxShadow(theme),
        },
        ':not(:disabled):active': {
            borderColor: theme.pallete.primary.main,
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
        },
    },
    error: {
        border: 'solid 1px ' + theme.pallete.status.danger.main,
        ':not(:disabled):focus': {
            border: 'solid 1px ' + theme.pallete.gray.c80,
            boxShadow: focusBoxShadow(theme, 'danger'),
        },
    },
})

@withStyles
export class TextInput extends React.Component<TextInputProps> {

    render() {
        const { css, password, status, theme, icon, style, ...rest } = this.props
        const styles = createStyles(theme)

        const classes = css(styles.input,
            status === 'error' && styles.error,
            style
        )

        const input = (
            <Input
                {...rest}
                className={classes}
                type={password ? 'password' : 'text'}
            />
        )

        if (icon) {
            return (
                <InputIconDecorator {...icon}>
                    {input}
                </InputIconDecorator>
            )
        } else {
            return input
        }
    }

}
