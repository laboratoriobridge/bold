import * as React from 'react'
import ReactTextMask from 'react-text-mask'

import { withStyles, WithStylesProps } from '../../../../styles'
import { InputIconDecorator, InputIconDecoratorProps } from '../InputIconDecorator/InputIconDecorator'
import { createStyles, InputStatus } from '../TextInput/TextInput'

// types from: https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md
export type MaskArray = Array<string | RegExp>
export type MaskFunction = (rawValue: string) => MaskArray
export type MaskType = MaskArray | MaskFunction
export interface ConformedResult {
    conformedValue: string
    meta: any
}

export interface MaskedTextConfig {
    mask: MaskType
    guide?: boolean
    placeholderChar?: string
    keepCharPositions?: boolean
    showMask?: boolean
    pipe?(conformedValue: string, config: MaskedTextConfig): false | string | object
    conformToMask?(text: string, mask: MaskArray, config?: MaskedTextConfig): ConformedResult
}

export interface MaskedInputProps extends MaskedTextConfig, WithStylesProps {
    status?: InputStatus
    placeholder?: string
    disabled?: boolean
    icon?: InputIconDecoratorProps
}

@withStyles
export class MaskedInput extends React.Component<MaskedInputProps> {
    static defaultProps: Partial<MaskedInputProps> = {
    }

    render() {
        const { css, theme, status, icon, ...rest } = this.props
        const styles = createStyles(theme)
        const classes = css(styles.input,
            status === 'error' && styles.error)

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
