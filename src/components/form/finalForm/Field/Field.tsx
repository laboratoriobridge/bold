import React from 'react'
import {
  Field as FinalFormField,
  FieldProps as FinalFieldProps,
  FieldRenderProps as FinalRenderProps,
  ReactContext as ReactFinalFormContext,
  withReactFinalForm,
} from 'react-final-form'

import { Meta } from '../../../../metaPath/metaPath'
import { Omit } from '../../../../util'
import { FieldWrapper, FieldWrapperProps } from '../../FieldWrapper'

import { getFieldError } from './util'

export interface RenderProps<E extends HTMLElement = HTMLElement> extends FinalRenderProps<E> {
  hasError?: boolean
}

type PickedFinalFieldProps =
  | 'allowNull'
  | 'format'
  | 'formatOnBlur'
  | 'parse'
  | 'isEqual'
  | 'subscription'
  | 'validate'
  | 'value'

export interface FieldProps<T = any>
  extends Omit<FieldWrapperProps, 'name'>,
    Pick<FinalFieldProps<HTMLElement>, PickedFinalFieldProps> {
  name: string | Meta<T>
  hasWrapper?: boolean
  onChange?: any
  type?: string
  render(props: RenderProps): React.ReactNode

  /**
   * Converts the field value to another before sending it to submit handler.
   * @param value The field original value.
   * @return The converted value.
   */
  convert?(value: any): any
}

export class FieldCmp<T = any> extends React.Component<FieldProps<T> & ReactFinalFormContext> {
  static defaultProps: Partial<FieldProps<any>> = {
    hasWrapper: true,
  }

  componentDidMount() {
    if (this.props.convert) {
      const setFieldData = this.props.reactFinalForm.mutators.setFieldData
      if (setFieldData) {
        setFieldData(this.getFieldName(), {
          convert: this.props.convert,
        })
      } else {
        throw new Error('Form must have a setFieldData mutator so Field can define a convert function')
      }
    }
  }

  render() {
    const { onChange, name, ...rest } = this.props
    return <FinalFormField {...rest} name={this.getFieldName()} custom={{ onChange }} render={this.renderComponent} />
  }

  private getFieldName = (): string => {
    if (typeof this.props.name === 'string') {
      return this.props.name
    } else {
      return (this.props.name as Meta<T>).absolutePath()
    }
  }

  private renderComponent = (props: FinalRenderProps<HTMLElement> & { custom: any }) => {
    const onChange = value => {
      // External onChange prop is killed by final-form, so we merge the external and the internal one
      props.input.onChange(value)
      props.custom.onChange && props.custom.onChange(value)
    }
    const renderProps = {
      ...props,
      input: {
        'aria-label': this.props.label,
        ...props.input,
        onChange,
      },
      hasError: !!getFieldError(props),
    }

    if (this.props.hasWrapper) {
      return (
        <FieldWrapper
          id={this.props.id}
          name={this.getFieldName()}
          error={getFieldError(props)}
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

const FieldWrapped = withReactFinalForm(FieldCmp) as React.ComponentType<FieldProps>

export class Field<T> extends React.Component<FieldProps<T>> {
  render() {
    return <FieldWrapped {...this.props} />
  }
}
