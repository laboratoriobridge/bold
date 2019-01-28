import { FormApi } from 'final-form'
import * as React from 'react'
import { FormRenderProps } from 'react-final-form'

import { Omit } from '../../../../../util/types'
import { Form, FormProps } from '../../Form'
import { WizardFooter } from '../WizardFooter/WizardFooter'

export interface WizardStepProps extends Pick<FormProps, 'render' | 'validate'> {
}

export class WizardStep extends React.Component<WizardStepProps> {
    static defaultProps = {
        render: (props: WizardRenderProps) => null,
    }

    render() {
        return null
    }
}

export interface WizardRenderProps extends FormRenderProps {
    wizard: {
        currentStep: number
        totalSteps: number
        isLastStep: boolean
        isFirstStep: boolean
        nextStep(values: any): void
        prevStep(): void
    }
}

export interface WizardFormProps extends Omit<FormProps, 'validate' | 'render'> {
    onSubmit(values: any): any
    renderFooter?(props: WizardRenderProps): React.ReactNode
}

export interface WizardFormState {
    step: number
    values: any
}

export class WizardForm extends React.Component<WizardFormProps, WizardFormState> {

    constructor(props) {
        super(props)
        this.state = {
            step: 0,
            values: props.initialValues || {},
        }
    }

    next = (values) => {
        this.setState({
            step: Math.min(this.state.step + 1, React.Children.toArray(this.props.children).length - 1),
            values,
        })
    }

    previous = () => {
        this.setState({
            step: Math.max(this.state.step - 1, 0),
        })
    }

    validate = (values) => {
        const activePage = this.getActiveStep()
        return activePage.props.validate ? activePage.props.validate(values) : {}
    }

    getActiveStep = () => {
        return React.Children.toArray(this.props.children)[this.state.step] as any
    }

    handleSubmit = (values, form: FormApi) => {
        this.setState({
            step: Math.min(this.state.step + 1, this.getTotalSteps() - 1),
            values,
        })

        if (this.isLastStep()) {
            return this.props.onSubmit(values)
        }
    }

    getWizardRenderProps = (renderProps: FormRenderProps): WizardRenderProps => {
        return {
            ...renderProps,
            wizard: {
                currentStep: this.state.step,
                totalSteps: React.Children.count(this.props.children),
                isFirstStep: this.state.step === 0,
                isLastStep: this.isLastStep(),
                nextStep: this.next,
                prevStep: this.previous,
            },
        }
    }

    render() {
        return (
            <Form
                {...this.props}
                key={this.state.step} // Force form reconstruction for each step, resetting form meta values
                initialValues={this.state.values}
                validate={this.validate}
                onSubmit={this.handleSubmit}
                render={this.renderStep}
            />
        )
    }

    renderStep = (props: FormRenderProps) => {
        const activeStep = this.getActiveStep()
        const renderProps = this.getWizardRenderProps(props)

        return (
            <form onSubmit={props.handleSubmit}>
                {activeStep.props.render(renderProps)}

                {this.props.renderFooter ?
                    this.props.renderFooter(renderProps) :
                    <WizardFooter
                        isFirstStep={renderProps.wizard.isFirstStep}
                        isLastStep={renderProps.wizard.isLastStep}
                        onSubmit={renderProps.handleSubmit}
                        onPrevious={renderProps.wizard.prevStep}
                    />
                }
            </form>
        )
    }

    private isLastStep = () => {
        return this.state.step === this.getTotalSteps() - 1
    }

    private getTotalSteps = () => {
        return React.Children.count(this.props.children)
    }
}
