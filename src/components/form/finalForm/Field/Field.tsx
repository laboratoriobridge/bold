import * as PropTypes from 'prop-types'
import * as React from 'react'
import {
    Field as FinalFormField,
    FieldProps as FinalFieldProps,
    FieldRenderProps as FinalRenderProps,
    ReactContext
} from 'react-final-form'

import { FieldWrapper, FieldWrapperProps } from '../../FieldWrapper'

export interface RenderProps extends FinalRenderProps {
    hasError?: boolean
}

export interface FieldProps extends FieldWrapperProps, FinalFieldProps {
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
        return (
            <FinalFormField {...this.props} render={this.renderComponent} />
        )
    }

    private renderComponent = (props: FinalRenderProps) => {
        const { meta } = props
        const renderProps = {
            ...props,
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

    private getFormApi(): ReactContext['reactFinalForm'] {
        return this.context.reactFinalForm
    }
}
