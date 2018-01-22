import * as React from 'react'

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
}

export interface InputProps extends PublicInputProps {
  type?: string
}

export class Input extends React.Component<InputProps, any> {
  public input: HTMLInputElement

  focus() {
    this.input.focus()
  }

  blur() {
    this.input.blur()
  }

  render() {
    return (
      <input ref={this.ref} {...this.props} />
    )
  }

  private ref = (elem: HTMLInputElement) => {
    this.input = elem
  }

}
