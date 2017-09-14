import * as React from 'react'
import MaskedInputDefault, * as MaskedInput from 'react-maskedinput'
import { WrappedFieldProps } from 'redux-form'
import { FormFieldProps } from '../../components/form/FormField'
import field, { FieldProps } from '../hoc/field'

export interface MaskedFieldProps extends FormFieldProps, Partial<WrappedFieldProps<any>> {
    mask: string
    placeholder?: string
    placeholderChar?: string
    onKeyPress?: () => void
}

const cleanMask = value => value.replace(/[^A-Za-z\d]/g, '')

class MaskedFieldCmp extends React.Component<MaskedFieldProps> {

    render() {
        const MI = MaskedInputDefault || MaskedInput
        return (
            <MI
                className='input'
                {...this.props.input}
                onKeyPress={this.props.onKeyPress}
                placeholderChar={this.props.placeholderChar}
                placeholder={this.props.placeholder}
                mask={this.props.mask}
                disabled={this.props.disabled}
            />
        )
    }
}

export const MaskedField: React.ComponentClass<FieldProps & MaskedFieldProps> = field({ parse: cleanMask })(MaskedFieldCmp)
