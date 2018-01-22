import * as React from 'react'
import { Field as FinalFormField, FieldProps, FieldRenderProps } from 'react-final-form'

import { FormField, FormFieldProps } from '../FormField'

export interface FieldProps extends FormFieldProps, Pick<FieldProps,
    'parse' | 'format' | 'validate'> {
    hasWrapper?: boolean
    name: string
    render(props: FieldRenderProps): JSX.Element
}

interface FieldComponentProps extends FormFieldProps, FieldRenderProps {
    custom: {
        onChange: <T>(event: React.ChangeEvent<T> | any) => void
    }
}

export class Field extends React.PureComponent<FieldProps> {

    static defaultProps: Partial<FieldProps> = {
        hasWrapper: true,
    }

    render() {
        const { onChange, ...rest } = this.props as any
        return (
            <FinalFormField {...rest} custom={{ onChange }} component={this.renderComponent} />
        )
    }

    private renderComponent = (props: FieldComponentProps) => {
        const { input: { onChange, ...inputRest },
            custom,
            meta,
            ...rest } = props

        const mergedOnChange = (value) => {
            onChange(value)
            custom.onChange && custom.onChange(value)
        }

        if (this.props.hasWrapper) {
            return (
                <FormField
                    {...rest}
                    error={meta.touched && (meta.error || !(meta as any).dirtySinceLastSubmit && meta.submitError)}
                    name={inputRest.name}
                >
                    {this.props.render({ meta, input: { onChange: mergedOnChange, ...inputRest } })}
                </FormField>
            )
        }
        return this.props.render({ meta, input: { onChange: mergedOnChange, ...inputRest } })
    }

}
