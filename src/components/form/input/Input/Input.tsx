import * as React from 'react'

export interface InputController {
  getInput(): HTMLInputElement
  focus(): any
  blur(): any
}

export interface PublicInputProps {
  className?: string
  checked?: boolean
  disabled?: boolean
  id?: string
  maxLength?: number
  name?: string
  onBlur?: <T>(event?: React.FocusEvent<T>) => void
  onChange?: <T>(event: React.ChangeEvent<T> | any) => void
  onFocus?: <T>(event?: React.FocusEvent<T>) => void
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  placeholder?: string
  value?: any
  provideController?: (controller: InputController) => void
  autoFocus?: boolean
}

export interface InputProps extends PublicInputProps {
  type?: string
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
