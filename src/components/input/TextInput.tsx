import * as React from 'react'
import { Input, PublicInputProps } from './Input'

export interface TextInputProps extends PublicInputProps {

}

export class TextInput extends React.Component<TextInputProps> {
    public input: Input

    focus() {
        this.input.focus()
    }

    blur() {
        this.input.blur()
    }

    render() {
        return (
            <Input ref={input => this.input = input} {...this.props} type='text' />
        )
    }

}
