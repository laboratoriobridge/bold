import * as React from 'react'
import { ChangeEvent } from 'react'
import { Field } from 'redux-form/immutable'
import { WrappedFieldProps, EventOrValueHandler, Formatter, Parser, Normalizer, BaseFieldProps } from 'redux-form'
import { FormField } from '../../components/form/FormField'

export interface FieldConfig {
    format?: Formatter
    hasAddons?: boolean
    hasControl?: boolean
    hasWrapper?: boolean
    normalize?: Normalizer
    parse?: Parser
    type?: string
}

const defaultConfig: FieldConfig = {
    hasWrapper: true
}

export interface FieldProps extends Pick<BaseFieldProps, 'parse' | 'format' | 'normalize' | 'validate' | 'warn' | 'withRef'> {
    name: string
    onChange?: EventOrValueHandler<ChangeEvent<any>>
}

export default function field(userConfig?: FieldConfig) {
    const resultConfig = Object.assign({}, defaultConfig, userConfig)

    return <WrapperComponentsProps extends Partial<WrappedFieldProps<any>>>(WrappedComponent: React.SFC<WrapperComponentsProps> | React.ComponentClass<WrapperComponentsProps>): React.ComponentClass<FieldProps & WrapperComponentsProps> => {
        return class extends React.Component<FieldProps & WrapperComponentsProps, any> {

            constructor() {
                super()

                this.renderComponent = this.renderComponent.bind(this)
            }

            render() {
                const { onChange, ...rest } = this.props as any
                return (
                    <Field {...resultConfig} {...rest} custom={{ onChange }} component={this.renderComponent} />
                )
            }

            renderComponent(props) {
                const { input: { onChange, ...inputRest }, ...rest } = props

                const mergedOnChange = (value) => {
                    onChange(value)
                    props.custom.onChange && props.custom.onChange(value)
                }

                if (resultConfig.hasWrapper) {
                    return (
                        <FormField
                            disabled={props.disabled}
                            error={props.meta.touched && props.meta.error}
                            icon={props.icon}
                            label={props.label}
                            name={props.input.name}
                            required={props.required}
                            unit={props.unit}
                            hasAddons={resultConfig.hasAddons}
                            hasControl={resultConfig.hasControl}
                        >
                            <WrappedComponent {...rest} input={{ onChange: mergedOnChange, ...inputRest }} />
                        </FormField>
                    )
                }
                return (<WrappedComponent {...rest} input={{ onChange: mergedOnChange, ...inputRest }} />)
            }
        }
    }
}
