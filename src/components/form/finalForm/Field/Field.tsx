import * as PropTypes from 'prop-types'
import * as React from 'react'
import {
    Field as FinalFormField,
    FieldProps as FinalFieldProps,
    FieldRenderProps as FinalRenderProps,
    ReactContext
} from 'react-final-form'

import { FormField, FormFieldProps } from '../../FormField'

export interface RenderProps extends FinalRenderProps {
    hasError?: boolean
}

export interface FieldProps extends FormFieldProps, FinalFieldProps {
    name: string
    hasWrapper?: boolean
    render(props: RenderProps): React.ReactNode

    /**
     * Converts the field value to another before sending it to submit handler.
     * @param value The field original value.
     * @return The converted value.
     */
    convert?(value: any): any
}

interface FieldComponentProps extends FormFieldProps, FinalRenderProps {
    custom: {
        onChange: <T>(event: React.ChangeEvent<T> | any) => void
    }
}

export class Field extends React.Component<FieldProps> {

    static contextTypes = {
        reactFinalForm: PropTypes.object,
    }

    static defaultProps: Partial<FieldProps> = {
        hasWrapper: true,
    }

    componentDidMount() {
        if (this.props.convert) {
            const setFieldData = this.getFormApi().mutators.setFieldData
            if (setFieldData) {
                setFieldData(this.props.name, {
                    convert: this.props.convert,
                })
            } else {
                throw new Error('Form must have a setFielData mutator so Field can define a convert function')
            }
        }
    }

    render() {
        const { onChange, ...rest } = this.props as any
        return (
            <FinalFormField {...rest} custom={{ onChange }} component={this.renderComponent} />
        )
    }

    private renderComponent = (props: FieldComponentProps) => {
        const {
            input: { onChange, ...inputRest },
            custom,
            meta,
            ...rest
        } = props

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

    private getFormApi(): ReactContext['reactFinalForm'] {
        return this.context.reactFinalForm
    }
}
