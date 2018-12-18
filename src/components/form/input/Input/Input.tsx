import * as React from 'react'

import { Omit } from '../../../../util/types'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'css' | 'style'> {
  inputRef?: React.RefObject<HTMLInputElement>
}

export class Input extends React.Component<InputProps, any> {

  static defaultProps: Partial<InputProps> = {
    inputRef: React.createRef<HTMLInputElement>(),
  }

  render() {
    const { inputRef, ...rest } = this.props

    return (
      <input ref={inputRef} {...rest} />
    )
  }

}
