import React from 'react'
import ReactTextMask, { MaskedInputProps as ReactMaskedInputProps } from 'react-text-mask'

import { composeRefs } from '../../../../util/react'
import { Omit } from '../../../../util/types'
import { TextInput, TextInputProps } from '../TextInput/TextInput'

export type MaskType = ReactMaskedInputProps['mask']

export interface MaskedInputProps extends Omit<ReactMaskedInputProps, 'style'>, TextInputProps {}

export function MaskedInput(props: MaskedInputProps) {
  const { inputRef, style, ...rest } = props

  const renderInput = (ref: (inputElement: HTMLElement) => void, p: any) => {
    return <TextInput style={style} inputRef={composeRefs(inputRef, ref)} {...p} />
  }

  return <ReactTextMask render={renderInput} {...rest} />
}
