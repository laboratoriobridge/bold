import { FormApi, getIn, setIn } from 'final-form'
import createFocusOnErrorDecorator from 'final-form-focus'
import * as setFieldData from 'final-form-set-field-data'
import * as React from 'react'
import { Form as FinalForm, FormProps as FinalFormProps, FormRenderProps } from 'react-final-form'

import { FormPrompt } from '../FormPrompt'
import { FormSubmissionListener, FormSubmissionListenerProps } from '../FormSubmissionListener'

export type ResultType = object | Promise<object | undefined> | undefined | void

export interface FormProps extends FinalFormProps, FormSubmissionListenerProps {
    hasLeaveModal?: boolean
    focusOnError?: boolean
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
            {(this.props.onSubmitSucceeded || this.props.onSubmitFailed) &&
                <FormSubmissionListener
                    onSubmitSucceeded={this.props.onSubmitSucceeded}
                    onSubmitFailed={this.props.onSubmitFailed}
                />
            }
            {this.props.hasLeaveModal &&
                <FormPrompt />
            }
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

}
