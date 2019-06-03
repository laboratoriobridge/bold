import React, { useEffect } from 'react'
import {
  Field as FinalFormField,
  FieldProps as FinalFieldProps,
  FieldRenderProps as FinalRenderProps,
  useForm,
} from 'react-final-form'

import { Meta } from '../../../../metaPath/metaPath'
import { Omit } from '../../../../util'
import { FormControl, FormControlProps } from '../../../elements/FormControl'

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
  extends Omit<FormControlProps, 'name'>,
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

export function Field<T = any>(props: FieldProps<T>) {
  const form = useForm()

  useEffect(() => {
    if (props.convert) {
      const setFieldData = form.mutators.setFieldData
      if (setFieldData) {
        setFieldData(getFieldName(), {
          convert: props.convert,
        })
      } else {
        throw new Error('Form must have a setFieldData mutator so Field can define a convert function')
      }
    }
  }, [])

  const getFieldName = (): string => {
    if (typeof props.name === 'string') {
      return props.name
    } else {
      return (props.name as Meta<T>).absolutePath()
    }
  }

  const renderComponent = (fieldProps: FinalRenderProps<HTMLElement> & { custom: any }) => {
    const customOnChange = value => {
      // External onChange prop is killed by final-form, so we merge the external and the internal one
      fieldProps.input.onChange(value)
      fieldProps.custom.onChange && fieldProps.custom.onChange(value)
    }
    const renderProps = {
      ...fieldProps,
      input: {
        'aria-label': props.label,
        ...fieldProps.input,
        onChange: customOnChange,
      },
      hasError: !!getFieldError(fieldProps),
    }

    if (props.hasWrapper) {
      return (
        <FormControl
          id={props.id}
          name={getFieldName()}
          error={getFieldError(fieldProps)}
          label={props.label}
          required={props.required}
        >
          {props.render(renderProps)}
        </FormControl>
      )
    }
    return props.render(renderProps)
  }

  const { onChange, name, ...rest } = props
  return <FinalFormField {...rest} name={getFieldName()} custom={{ onChange }} render={renderComponent} />
}

Field.defaultProps = {
  hasWrapper: true,
} as Partial<FieldProps<any>>
