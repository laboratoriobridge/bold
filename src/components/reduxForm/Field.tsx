import * as React from 'react'
import { ChangeEvent } from 'react'
import { Field as ReduxFormField } from 'redux-form/immutable'
import { WrappedFieldProps, EventOrValueHandler, BaseFieldProps } from 'redux-form'
import { FormField, FormFieldProps } from '../form/FormField'

export interface FieldProps extends FormFieldProps, Pick<BaseFieldProps, 'parse' | 'format' | 'normalize' | 'validate' | 'warn' | 'withRef'> {
    hasWrapper?: boolean
    name: string
    type?: string
    render(props: WrappedFieldProps): JSX.Element
}

interface FieldComponentProps extends FormFieldProps, WrappedFieldProps {
    custom: {
        onChange: EventOrValueHandler<ChangeEvent<any>>
    }
}

export class Field extends React.PureComponent<FieldProps> {

    static defaultProps: Partial<FieldProps> = {
        hasWrapper: true
    }

    render() {
        const { onChange, ...rest } = this.props as any
        return (
            <ReduxFormField {...rest} custom={{ onChange }} component={this.renderComponent} />
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
                    error={meta.touched && meta.error}
                    name={inputRest.name}
                >
                    {this.props.render({ meta, input: { onChange: mergedOnChange, ...inputRest } })}
                </FormField>
            )
        }
        return this.props.render({ meta, input: { onChange: mergedOnChange, ...inputRest } })
    }

}
