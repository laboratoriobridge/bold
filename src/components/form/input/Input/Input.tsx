import * as React from 'react'

import { Omit } from '../../../../util/types'

export interface InputController {
  getInput(): HTMLInputElement
  focus(): any
  blur(): any
}

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'css' | 'style'> {
  provideController?: (controller: InputController) => void
  inputRef?: React.RefObject<HTMLInputElement>
}

export class Input extends React.Component<InputProps, any> {

  static defaultProps: Partial<InputProps> = {
    inputRef: React.createRef<HTMLInputElement>(),
  }

  componentDidMount() {
    this.props.provideController && this.props.provideController({
      getInput: () => this.props.inputRef.current,
      focus: () => this.props.inputRef.current.focus(),
      blur: () => this.props.inputRef.current.blur(),
    })
  }

  componentWillUnmount() {
    this.props.provideController && this.props.provideController(null)
  }

  render() {
    const { provideController, inputRef, ...rest } = this.props

    return (
      <input ref={inputRef} {...rest} />
    )
  }

}
