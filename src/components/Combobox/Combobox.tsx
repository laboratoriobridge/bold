import React from 'react'
import { ComboboxMultiselect, ComboboxMultiselectProps } from './ComboboxMultiselect'
import { ComboboxSingleselect, ComboboxSingleselectProps } from './ComboboxSingleselect'

export interface DefaultComboboxItemType {
  value: any
  label: string
}

export type ComboboxProps<T> =
  | (ComboboxMultiselectProps<T> & { readonly multiple: true })
  | (ComboboxSingleselectProps<T> & { readonly multiple: false })

export function Combobox<T = DefaultComboboxItemType>(props: ComboboxProps<T>) {
  if (props.multiple === true) return <ComboboxMultiselect {...props} />
  else return <ComboboxSingleselect {...props} />
}

Combobox.defaultProps = {
  openOnFocus: true,
  loading: false,
  debounceMilliseconds: 350,
  multiple: false,
} as Partial<ComboboxProps<any>>
