import { Interpolation } from 'emotion'
import * as React from 'react'
import ReactTextMask, { MaskedInputProps as ReactMaskedInputProps } from 'react-text-mask'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Omit } from '../../../../util/types'
import { InputIconDecorator, InputIconDecoratorProps } from '../InputIconDecorator/InputIconDecorator'
import { createStyles, InputStatus } from '../TextInput/TextInput'

export type MaskType = ReactMaskedInputProps['mask']

export interface MaskedInputProps extends Omit<ReactMaskedInputProps, 'css' | 'style'>, WithStylesProps {
    status?: InputStatus
    icon?: InputIconDecoratorProps
    style?: Interpolation
}

@withStyles
export class MaskedInput extends React.Component<MaskedInputProps> {
    static defaultProps: Partial<MaskedInputProps> = {
    }

    render() {
        const { css, theme, style, status, icon, ...rest } = this.props
        const styles = createStyles(theme)
        const classes = css(styles.input,
            status === 'error' && styles.error,
            style)

        const input = (
            <ReactTextMask
                className={classes}
                {...rest}
            />
        )

        if (icon) {
            return (
                <InputIconDecorator {...icon}>
                    {input}
                </InputIconDecorator>
            )
        }

        return input
    }
}
