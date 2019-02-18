import React from 'react'
import ReactTextMask, { MaskedInputProps as ReactMaskedInputProps } from 'react-text-mask'

import { Omit } from '../../../../util/types'
import { TextInput, TextInputProps } from '../TextInput/TextInput'

export type MaskType = ReactMaskedInputProps['mask']

export interface MaskedInputProps extends Omit<ReactMaskedInputProps, 'style'>, TextInputProps {
}

export class MaskedInput extends React.PureComponent<MaskedInputProps> {
    static defaultProps: Partial<MaskedInputProps> = {
    }

    render() {
        const { css, style, inputRef, ...rest } = this.props
        return (
            <ReactTextMask render={this.renderInput} {...rest} />
        )
    }

    attachRef = (ref: (inputElement: HTMLElement) => void) => (el: HTMLInputElement) => {
        ref(el)

        if (this.props.inputRef) {
            (this.props.inputRef as any).current = el
        }
    }

    renderInput = (ref: (inputElement: HTMLElement) => void, props: any) => {
        return (
            <TextInput style={this.props.style} inputRef={this.attachRef(ref)} {...props} />
        )
    }
}
