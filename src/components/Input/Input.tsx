import React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.RefObject<HTMLInputElement>
}

export function Input(props: InputProps) {
  const { inputRef, onChange, ...rest } = props

  const a = e => {
    onChange(e)
  }

  return <input ref={inputRef} onChange={a} {...rest} />
}

Input.defaultProps = {} as Partial<InputProps>
