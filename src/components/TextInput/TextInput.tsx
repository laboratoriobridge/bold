import React, { useRef } from 'react'

import { composeRefs, setNativeValue } from '../../util/react'

import { InputWrapper, InputWrapperProps } from './InputWrapper'
import { TextInputBase, TextInputBaseProps } from './TextInputBase'

export type PublicInputWrapperProps = Pick<InputWrapperProps, 'icon' | 'iconPosition' | 'iconDisabled' | 'onIconClick'>

export interface TextInputProps extends TextInputBaseProps, PublicInputWrapperProps {
  /**
   * Whether the input should show the clear icon button.
   */
  clearable?: boolean
  onClear?: InputWrapperProps['onClear']
}

export function TextInput(props: TextInputProps) {
  const { icon, iconPosition, iconDisabled, onIconClick, clearable, onClear, inputRef, ...rest } = props

  const internalRef = useRef<HTMLInputElement>(null)

  const handleClear = () => {
    setNativeValue(internalRef.current, '')
    internalRef.current.dispatchEvent(new Event('input', { bubbles: true }))
    internalRef.current.focus()
  }

  const isIconDisabled = props.iconDisabled !== undefined ? props.iconDisabled : props.disabled
  const isClearVisible = clearable && (!props.disabled && (!!props.value || !!props.defaultValue))

  return (
    <InputWrapper
      icon={icon}
      iconPosition={iconPosition}
      iconDisabled={isIconDisabled}
      onIconClick={onIconClick}
      clearVisible={isClearVisible}
      onClear={onClear ? onClear : handleClear}
    >
      <TextInputBase inputRef={composeRefs(internalRef, inputRef) as any} {...rest} />
    </InputWrapper>
  )
}

TextInput.defaultProps = {
  clearable: true,
} as Partial<TextInputProps>
