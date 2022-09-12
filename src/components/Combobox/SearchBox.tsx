import React, { forwardRef, Ref } from 'react'
import { TextInput, TextInputProps } from '../TextField'

//TODO: Expose as a new component
export const SearchBox = forwardRef((props: TextInputProps, ref: Ref<HTMLInputElement>) => (
  <TextInput type='search' role='searchbox' inputRef={ref} icon='zoomOutline' iconPosition='left' {...props} />
))
