import * as React from 'react'
import { FormSpy, FormSpyRenderProps } from 'react-final-form'

import { Button } from '../../elements/button/Button/Button'

export interface SubmitButtonProps {
    label: string
    handleSubmit: (event?: React.SyntheticEvent<HTMLFormElement>) => void
}

export class SubmitButton extends React.PureComponent<SubmitButtonProps> {

    render() {
        return (
            <FormSpy
                subscription={{ pristine: true, submitting: true }}
            >
                {this.renderButton}
            </FormSpy>
        )
    }

    private renderButton = (props: FormSpyRenderProps) => (
        <Button
            disabled={props.pristine}
            label={this.props.label}
            loading={props.submitting}
            onClick={this.props.handleSubmit}
            type='primary'
        />
    )

}
