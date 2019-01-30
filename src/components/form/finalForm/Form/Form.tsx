import { FormApi, FormState, getIn, setIn } from 'final-form'
import createFocusOnErrorDecorator from 'final-form-focus'
import * as setFieldData from 'final-form-set-field-data'
import * as React from 'react'
import { Form as FinalForm, FormProps as FinalFormProps, FormRenderProps } from 'react-final-form'

import { isEmpty, isPromise } from '../../../../util'
import { FormPrompt } from '../FormPrompt'

export type ResultType = object | Promise<object | undefined> | undefined | void

export interface FormProps extends FinalFormProps {
    hasLeaveModal?: boolean
    focusOnError?: boolean
    transformResult?(result: ResultType): ResultType
    onSubmitSucceeded?(formState: FormState): void
    onSubmitFailed?(formState: FormState): void
}

const focusOnErrorDecorator = createFocusOnErrorDecorator()

export class Form extends React.Component<FormProps> {

    static defaultProps: Partial<FormProps> = {
        hasLeaveModal: false,
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
            <FinalForm
                {...this.props}
                onSubmit={this.onSubmit}
                render={this.renderForm}
                decorators={decorators}
                mutators={mutators}
            />
        )
    }

    private renderForm = (props: FormRenderProps) => (
        <>
            {this.props.hasLeaveModal &&
                <FormPrompt />
            }
            {this.props.render({
                ...props,
                handleSubmit: this.handleSubmit(props),
            })}
        </>
    )

    private handleSubmit = (formProps: FormRenderProps) => (event) => {
        const { onSubmitFailed } = this.props
        if (onSubmitFailed && !isEmpty(formProps.errors)) {
            window.setTimeout(() => onSubmitFailed(formProps.form.getState()))
        }
        return formProps.handleSubmit(event)
    }

    private getConvertedValues = (values: Object, form: FormApi) => {
        let newValues = values

        for (const field of form.getRegisteredFields()) {
            const fieldState = form.getFieldState(field)
            const convert = fieldState.data ? fieldState.data.convert : null
            if (convert) {
                const fieldValue = getIn(values, field)
                newValues = setIn(newValues, field, convert(fieldValue))
            }
        }

        return newValues
    }

    private onSubmit = (values: Object, form: FormApi) => {
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

    private emitSubmitEvents = (submitResult: ResultType, form: FormApi) => {
        const { onSubmitFailed, onSubmitSucceeded } = this.props

        if (!submitResult && onSubmitSucceeded) {
            window.setTimeout(() => onSubmitSucceeded(form.getState()))
        }

        if (submitResult && onSubmitFailed) {
            window.setTimeout(() => onSubmitFailed(form.getState()))
        }
    }

}
