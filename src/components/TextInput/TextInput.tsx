import React from 'react'

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
  const { icon, iconPosition, iconDisabled, onIconClick, clearable, onClear, ...rest } = props

  const isClearVisible = (): boolean => !props.disabled && (!!props.value || !!props.defaultValue)

  const isIconDisabled = (): boolean => (props.iconDisabled !== undefined ? props.iconDisabled : props.disabled)

  const handleClear = () => props.onChange && props.onChange(null)

  return (
    <InputWrapper
      icon={icon}
      iconPosition={iconPosition}
      iconDisabled={isIconDisabled()}
      onIconClick={onIconClick}
      clearVisible={clearable && isClearVisible()}
      onClear={onClear ? onClear : handleClear}
    >
      <TextInputBase {...rest} />
    </InputWrapper>
  )
}

TextInput.defaultProps = {
  clearable: true,
} as Partial<TextInputProps>
