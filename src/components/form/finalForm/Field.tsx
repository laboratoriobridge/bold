import * as React from 'react'
import {
    Field as FinalFormField,
    FieldProps as FinalFieldProps,
    FieldRenderProps as FinalRenderProps
} from 'react-final-form'

import { FormField, FormFieldProps } from '../FormField'

export interface RenderProps extends FinalRenderProps {
    hasError?: boolean
}

export interface FieldProps extends FormFieldProps, FinalFieldProps {
    hasWrapper?: boolean
    name: string
    render(props: RenderProps): JSX.Element
}

interface FieldComponentProps extends FormFieldProps, FinalRenderProps {
    custom: {
        onChange: <T>(event: React.ChangeEvent<T> | any) => void
    }
}

export class Field extends React.Component<FieldProps> {

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
                    error={meta.touched && meta.error || !meta.dirtySinceLastSubmit && meta.submitError}
                    name={inputRest.name}
                >
                    {this.props.render({
                        meta,
                        input: { onChange: mergedOnChange, ...inputRest },
                        hasError: meta.touched && !!meta.error || !meta.dirtySinceLastSubmit && !!meta.submitError,
                    })}
                </FormField>
            )
        }
        return this.props.render({ meta, input: { onChange: mergedOnChange, ...inputRest } })
    }

}
