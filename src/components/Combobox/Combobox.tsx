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

export function Combobox<T = DefaultComboboxItemType>({ multiple, ...props }: ComboboxProps<T>) {
  if (multiple === true) return <ComboboxMultiselect {...(props as ComboboxMultiselectProps<T>)} />
  else return <ComboboxSingleselect {...(props as ComboboxSingleselectProps<T>)} />
}

Combobox.defaultProps = {
  loading: false,
  debounceMilliseconds: 350,
  multiple: false,
} as Partial<ComboboxProps<any>>
