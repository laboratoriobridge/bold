import * as React from 'react'
import MaskedInputDefault, * as MaskedInput from 'react-maskedinput'
import { FormFieldProps } from '../../components/form/FormField'
import { Field } from '../hoc/Field'

export interface MaskedFieldProps extends FormFieldProps {
    mask: string
    name: string
    placeholder?: string
    placeholderChar?: string
    onKeyPress?: () => void
}

const cleanMask = value => value.replace(/[^A-Za-z\d]/g, '')

export class MaskedField extends React.Component<MaskedFieldProps> {

    render() {
        const MI = MaskedInputDefault || MaskedInput
        return (
            <Field
                {...this.props}
                parse={cleanMask}
                render={props =>
                    <MI
                        className='input'
                        {...this.props}
                        {...props.input}
                    />
                }
            />
        )
    }
}
