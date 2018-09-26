import * as React from 'react'

import { Omit } from '../../../../util/types'

export interface InputController {
  getInput(): HTMLInputElement
  focus(): any
  blur(): any
}

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'css' | 'style'> {
  provideController?: (controller: InputController) => void
}

export class Input extends React.Component<InputProps, any> {
  private input: HTMLInputElement

  componentDidMount() {
    this.props.provideController && this.props.provideController({
      getInput: () => this.input,
      focus: () => this.input.focus(),
      blur: () => this.input.blur(),
    })
  }

  componentWillUnmount() {
    this.props.provideController && this.props.provideController(null)
  }

  render() {
    const { provideController, ...rest } = this.props

    return (
      <input ref={this.ref} {...rest} />
    )
  }

  private ref = (elem: HTMLInputElement) => {
    this.input = elem
  }

}
