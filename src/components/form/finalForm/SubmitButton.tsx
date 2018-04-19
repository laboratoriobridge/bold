import * as React from 'react'
import { FormSpy, FormSpyRenderProps } from 'react-final-form'

import { Button, ButtonProps } from '../../elements/button/Button/Button'

export interface SubmitButtonProps extends ButtonProps {
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

    private renderButton = (props: FormSpyRenderProps) => {
        const { handleSubmit, ...rest } = this.props
        return (
            <Button
                disabled={props.pristine}
                loading={props.submitting}
                onClick={handleSubmit}
                type='primary'
                {...rest}
            />
        )
    }

}
