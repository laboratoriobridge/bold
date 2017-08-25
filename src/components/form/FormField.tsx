import * as React from 'react'
import * as classnames from 'classnames'
import { ControlProps, Control } from './Control'
import { FormLabelProps, FormLabel } from './FormLabel'

export interface FormFieldProps extends ControlProps, FormLabelProps {
    name?: string
    hasAddons?: boolean
    hasControl?: boolean
    unit?: string
    title?: string
}

export class FormField extends React.Component<FormFieldProps, any> {

    static defaultProps: FormFieldProps = {
        hasControl: true
    }

    render() {
        const fieldClasses = classnames('field is-vertical', this.props.className, {
            'has-error': this.props.error,
        })

        const internalFieldClasses = classnames('field', {
            'is-grouped': this.props.unit !== undefined,
            'has-addons': this.props.hasAddons
        })

        const { hasControl, ...rest } = this.props

        return (
            <div title={this.props.title} data-name={this.props.name} className={fieldClasses}>
                {this.props.label && <FormLabel {...rest } />}
                <div className={internalFieldClasses}>
                    {hasControl ? <Control {...rest} /> :
                        this.props.children}
                    {this.props.unit && <p className='control'><span className='unit'>{this.props.unit}</span></p>}
                </div>
            </div>
        )
    }

}
