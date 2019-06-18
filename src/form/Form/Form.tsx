import { FormApi, FormState, getIn, setIn } from 'final-form'
import createFocusOnErrorDecorator from 'final-form-focus'
import setFieldData from 'final-form-set-field-data'
import React from 'react'
import { Form as FinalForm, FormProps as FinalFormProps, FormRenderProps } from 'react-final-form'

import { isEmpty, isPromise } from '../../util'

export type ResultType = object | Promise<object | undefined> | undefined | void

export interface FormProps<FormValues> extends FinalFormProps<FormValues> {
  focusOnError?: boolean
  transformResult?(result: ResultType): ResultType
  onSubmitSucceeded?(formState: FormState<FormValues>): void
  onSubmitFailed?(formState: FormState<FormValues>): void
}

const focusOnErrorDecorator = createFocusOnErrorDecorator()

export class Form<FormValues extends object = any> extends React.Component<FormProps<FormValues>> {
  static defaultProps: Partial<FormProps<any>> = {
    focusOnError: true,
    decorators: [],
    transformResult: result => result,
  }

  render() {
    const decorators = this.props.decorators ? this.props.decorators : []
    if (this.props.focusOnError) {
      decorators.push(focusOnErrorDecorator)
    }

    const mutators = { ...this.props.mutators, setFieldData: setFieldData.default || setFieldData }

    return (
      <FinalForm<FormValues>
        {...this.props}
        onSubmit={this.onSubmit}
        render={this.renderForm}
        decorators={decorators}
        mutators={mutators}
      />
    )
  }

  private renderForm = (props: FormRenderProps<FormValues>) => (
    <>
      {this.props.render({
        ...props,
        handleSubmit: this.handleSubmit(props),
      })}
    </>
  )

  private handleSubmit = (formProps: FormRenderProps<FormValues>) => event => {
    const { onSubmitFailed } = this.props
    if (onSubmitFailed && !isEmpty(formProps.errors)) {
      setTimeout(() => onSubmitFailed(formProps.form.getState()))
    }
    return formProps.handleSubmit(event)
  }

  private getConvertedValues = (values: FormValues, form: FormApi<FormValues>) => {
    let newValues = values

    for (const field of form.getRegisteredFields()) {
      const fieldState = form.getFieldState(field)
      const convert = fieldState.data ? fieldState.data.convert : null
      if (convert) {
        const fieldValue = getIn(values, field)
        newValues = setIn(newValues, field, convert(fieldValue)) as FormValues
      }
    }

    return newValues
  }

  private onSubmit = (values: FormValues, form: FormApi<FormValues>) => {
    const { onSubmit, transformResult } = this.props

    const newValues = this.getConvertedValues(values, form)
    const result = onSubmit(newValues, form)
    let ret = transformResult(result)

    if (isPromise(ret)) {
      ret = ret.then(res => {
        this.emitSubmitEvents(res, form)
        return res
      })
    } else {
      this.emitSubmitEvents(ret, form)
    }

    return ret
  }

  private emitSubmitEvents = (submitResult: ResultType, form: FormApi<FormValues>) => {
    const { onSubmitFailed, onSubmitSucceeded } = this.props

    if (!submitResult && onSubmitSucceeded) {
      setTimeout(() => onSubmitSucceeded(form.getState()))
    }

    if (submitResult && onSubmitFailed) {
      setTimeout(() => onSubmitFailed(form.getState()))
    }
  }
}
