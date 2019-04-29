import React from 'react'
import { FormSpy } from 'react-final-form'
import { Prompt } from 'react-router'

export interface FormPromptProps {
  message?: string
}

export class FormPrompt extends React.Component<FormPromptProps> {
  static defaultProps: Partial<FormPromptProps> = {
    message: 'Deseja sair e perder as informações não salvas?',
  }

  render() {
    return (
      <FormSpy subscription={{ pristine: true, submitSucceeded: true }}>
        {spyProps => <Prompt when={!spyProps.pristine && !spyProps.submitSucceeded} message={this.props.message} />}
      </FormSpy>
    )
  }
}
