import * as React from 'react'
import { ErrorIndicator } from './ErrorIndicator'
import { Icon } from '../elements/Icon'
import { Label } from '../elements/Label'

export interface FormLabelProps {
    error?: any
    label?: React.ReactNode
    required?: boolean
}

export class FormLabel extends React.Component<FormLabelProps> {

    render() {
        const errorIndicator = (
            this.props.error && <ErrorIndicator error={this.props.error} />
        )

        const fieldRequired = (
            this.props.required && !this.props.error && <Icon className='field-required' size='small' icon='obrigatorio' />
        )

        const label =
            <>
            {this.props.label}
            {fieldRequired}
            {errorIndicator}
            </>

        return (
            <Label value={label} />
        )
    }

}
