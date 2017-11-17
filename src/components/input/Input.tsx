import * as React from 'react'
import { EventOrValueHandler } from 'redux-form'
import * as classnames from 'classnames'
import { helpersClassnames, extractProps } from '../../util/Util'
import { ChangeEvent, FocusEvent } from 'react'

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

const propsToKeep = [
  'checked',
  'disabled',
  'id',
  'maxLength',
  'name',
  'onBlur',
  'onChange',
  'onKeyPress',
  'placeholder',
  'type',
  'value'
]

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
    const classes = classnames('input', this.props.className, helpersClassnames(this.props))

    return (
      <input ref={this.ref} {...extractProps(this.props, ...propsToKeep) } className={classes} />
    )
  }

}
