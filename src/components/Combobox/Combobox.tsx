import React from 'react'
import { ComboboxInline, ComboboxInlineProps } from './ComboboxInline'
import { ComboboxMultiselect, ComboboxMultiselectProps } from './ComboboxMultiselect'
import { ComboboxSingleselect, ComboboxSingleselectProps } from './ComboboxSingleselect'

export interface DefaultComboboxItemType {
  value: any
  label: string
}

export type ComboboxProps<T> =
  | (ComboboxInlineProps<T> & { readonly multiple: false; readonly inline: true })
  | (ComboboxMultiselectProps<T> & { readonly multiple: true; readonly inline: false })
  | (ComboboxSingleselectProps<T> & { readonly multiple: false; readonly inline: false })

export function Combobox<T = DefaultComboboxItemType>(props: ComboboxProps<T>) {
  if (props.inline === true) return <ComboboxInline {...props} />
  else if (props.multiple === true) return <ComboboxMultiselect {...props} />
  else return <ComboboxSingleselect {...props} />
}

Combobox.defaultProps = {
  openOnFocus: true,
  loading: false,
  debounceMilliseconds: 350,
  multiple: false,
  inline: false,
} as Partial<ComboboxProps<any>>
