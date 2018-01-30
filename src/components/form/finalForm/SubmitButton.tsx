import * as React from 'react'
import { FormSpy, FormSpyRenderProps } from 'react-final-form'

import { Button } from '../../elements/Button/Button'

export interface SubmitButtonProps {
    label: string
    handleSubmit: (event?: React.SyntheticEvent<HTMLFormElement>) => void
}

export class SubmitButton extends React.PureComponent<SubmitButtonProps> {

    render() {
        return (
            <FormSpy
                subscription={{ submitting: true, valid: true }}
            >
                {this.renderButton}
            </FormSpy>
        )
    }

    private renderButton = (props: FormSpyRenderProps) => (
        <Button
            // disabled={!props.valid}
            label={this.props.label}
            loading={props.submitting}
            onClick={this.props.handleSubmit}
            type='primary'
        />
    )

}
