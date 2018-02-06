import * as React from 'react'
import ReactTextMask from 'react-text-mask'

import { withStyles, WithStylesProps } from '../../../../styles'
import { createStyles, InputStatus } from '../TextInput/TextInput'

// types from: https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md
type MaskArray = Array<string | RegExp>
type MaskFunction = (rawValue: string) => MaskArray
interface ConformedResult {
    conformedValue: string
    meta: any
}

interface MaskedTextConfig {
    mask: MaskArray | MaskFunction
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
}

@withStyles
export class MaskedInput extends React.Component<MaskedInputProps> {
    static defaultProps: Partial<MaskedInputProps> = {
    }

    render() {
        const { css, theme, status, ...rest } = this.props
        const styles = createStyles(theme)
        const classes = css(styles.input,
            status === 'error' && styles.error)

        return (
            <ReactTextMask
                className={classes}
                {...rest}
            />
        )
    }
}
