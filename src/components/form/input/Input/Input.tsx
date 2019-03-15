import React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.RefObject<HTMLInputElement>
}

export const Input = (props: InputProps) => {
  const { inputRef, ...rest } = props

  return <input ref={inputRef} {...rest} />
}

Input.defaultProps = {} as Partial<InputProps>
