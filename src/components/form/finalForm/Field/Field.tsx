import * as React from 'react'
import { Field as FinalFormField, FieldProps as FinalFieldProps, FieldRenderProps as FinalRenderProps, ReactContext as ReactFinalFormContext, withReactFinalForm } from 'react-final-form'

import { Omit } from '../../../../util/types'
import { FieldWrapper, FieldWrapperProps } from '../../FieldWrapper'

export interface RenderProps extends FinalRenderProps {
    hasError?: boolean
}

export interface FieldProps extends FieldWrapperProps, FinalFieldProps, ReactFinalFormContext {
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

export class FieldCmp extends React.Component<FieldProps> {

    static defaultProps: Partial<FieldProps> = {
        hasWrapper: true,
    }

    componentDidMount() {
        if (this.props.convert) {
            const setFieldData = this.props.reactFinalForm.mutators.setFieldData
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
        const { onChange, ...rest } = this.props
        return (
            <FinalFormField {...rest} custom={{ onChange }} render={this.renderComponent} />
        )
    }

    private renderComponent = (props: FinalRenderProps & { custom: any }) => {
        const { meta } = props
        const onChange = (value) => {
            // External onChange prop is killed by final-form, so we merge the external and the internal one
            props.input.onChange(value)
            props.custom.onChange && props.custom.onChange(value)
        }
        const renderProps = {
            ...props,
            input: { ...props.input, onChange },
            hasError: meta.touched && !!meta.error || !meta.dirtySinceLastSubmit && !!meta.submitError,
        }

        if (this.props.hasWrapper) {
            return (
                <FieldWrapper
                    error={meta.touched && meta.error || !meta.dirtySinceLastSubmit && meta.submitError}
                    name={props.input.name}
                    label={this.props.label}
                    required={this.props.required}
                >
                    {this.props.render(renderProps)}
                </FieldWrapper>
            )
        }

        return this.props.render(renderProps)
    }
}

export const Field = withReactFinalForm(FieldCmp) as React.ComponentType<Omit<FieldProps, 'reactFinalForm'>>
