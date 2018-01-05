import * as React from 'react'
import { ChangeEvent, FocusEvent } from 'react'
import { EventOrValueHandler } from 'redux-form'

export interface PublicInputProps {
  className?: string
  checked?: boolean
  disabled?: boolean
  id?: string
  maxLength?: number
  name?: string
  onBlur?: EventOrValueHandler<FocusEvent<any>>
  onChange?: EventOrValueHandler<ChangeEvent<any>>
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  placeholder?: string
  value?: any
}

export interface InputProps extends PublicInputProps {
  type: string
}

export class Input extends React.Component<InputProps, any> {
  public input: HTMLInputElement

  private ref = (elem: HTMLInputElement) => {
    this.input = elem
  }

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

}
