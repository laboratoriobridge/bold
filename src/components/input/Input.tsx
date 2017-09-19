import * as React from 'react'
import { WrappedFieldInputProps } from 'redux-form'
import * as classnames from 'classnames'
import { helpersClassnames } from '../../util/Util'

export interface PublicInputProps extends Partial<WrappedFieldInputProps> {
  className?: string
  checked?: boolean
  disabled?: boolean
  id?: string
  maxLength?: number
  name?: string
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  placeholder?: string
}

export interface InputProps extends PublicInputProps {
  type: string
}

export class Input extends React.Component<InputProps, any> {
  public input: HTMLInputElement

  constructor() {
    super()
    this.ref = this.ref.bind(this)
  }

  private ref(elem: HTMLInputElement) {
    this.input = elem
  }

  focus() {
    this.input.focus()
  }

  blur() {
    this.input.blur()
  }

  render() {
    const classes = classnames('input', this.props.className, helpersClassnames(this.props))

    return (
      <input ref={this.ref} {...this.props} className={classes} />
    )
  }

}
