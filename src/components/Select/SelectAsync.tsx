import React from 'react'

import { Select, SelectProps } from './Select'
import { AsyncSelectLoadFn, useAsyncSelect } from './useAsyncSelect'

type ProvidedProps = 'items' | 'loading' | 'onFilterChange'

export interface SelectAsyncProps<T>
  extends Omit<SelectProps<T>, ProvidedProps>,
    Partial<Pick<SelectProps<T>, ProvidedProps>> {
  /**
   * Function used to populate the select.
   */
  loadItems: AsyncSelectLoadFn<T>

  /**
   * Delay in ms to wait before calling `loadItems`
   */
  delay?: number
}

/**
 * @deprecated
 *
 * This component has been deprecated, please use Combobox instead
 *
 * Before:
 *
 * `<SelectAsync />`
 *
 * After:
 *
 * `<Combobox items={loadAsync} />`
 *
 * @deprecatedSince 1.0.0-beta.65
 */
export function SelectAsync<T>(props: SelectAsyncProps<T>) {
  const { loadItems, delay, ...rest } = props
  const { getSelectProps } = useAsyncSelect<T>(loadItems, delay)

  return <Select<T> {...getSelectProps()} {...rest} />
}
