import { FormApi, getIn, setIn } from 'final-form'
import createFocusOnErrorDecorator from 'final-form-focus'
import * as setFieldData from 'final-form-set-field-data'
import * as React from 'react'
import { Form as FinalForm, FormProps as FinalFormProps, FormRenderProps } from 'react-final-form'

import { FormListener } from '../FormListener'

export type ResultType = object | Promise<object | undefined> | undefined | void

export interface FormProps extends FinalFormProps {
    focusOnError?: boolean
    hasLeaveModal?: boolean
    onSubmitSucceeded?(): void
    onSubmitFailed?(erros: object): void
    transformResult?(result: ResultType): ResultType
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
            <FormListener
                hasLeaveModal={this.props.hasLeaveModal}
                onSubmitSucceeded={this.onSubmitSucceeded}
                onSubmitFailed={this.onSubmitFailed}
            />
            {this.props.render(props)}
        </>
    )

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
        const newValues = this.getConvertedValues(values, form)
        const result = this.props.onSubmit(newValues, form)
        return this.props.transformResult(result)
    }

    private onSubmitFailed = (errors) => {
        this.props.onSubmitFailed && this.props.onSubmitFailed(errors)
    }

    private onSubmitSucceeded = () => {
        this.props.onSubmitSucceeded && this.props.onSubmitSucceeded()
    }

}
