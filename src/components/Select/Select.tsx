import React from 'react'

import { Omit } from '../../util'
import { SelectMulti, SelectMultiProps } from './SelectMulti/SelectMulti'
import { DefaultItemType, SelectSingle, SelectSingleProps } from './SelectSingle/SelectSingle'
import { SelectDownshiftMenuProps } from './SelectSingle/SelectDownshiftMenu'

export interface SelectProps<T = DefaultItemType> extends Omit<SelectSingleProps<T>, 'value'> {
  value?: T | T[]
  multiple?: boolean
  popperProps?: SelectDownshiftMenuProps<T>['popperProps']
  itemIsEqual?: SelectMultiProps<T>['itemIsEqual']
  onChange?(item: T | T[]): void
}

export function Select<T = DefaultItemType>(props: SelectProps<T>) {
  const { multiple, onChange, value, itemIsEqual, style, ...rest } = props
  let checkedValue = value

  if (multiple && value && !Array.isArray(value)) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Trying to set an object as value for <Select multiple /> but it should be an array`)
    }
    checkedValue = value ? [value] : []
  }

  if (!multiple && value && Array.isArray(value)) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        `Trying to set an array as value for <Select /> but it should be an object.` +
          ` Set the 'multiple' prop if it can have multiple values`
      )
    }
    checkedValue = value[0]
  }

  if (props.multiple && props.createNewItem) {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(`Select does not support props 'createNewItem' and 'multiple' together`)
    }
  }

  if (multiple) {
    return <SelectMulti<T> {...rest} value={checkedValue as T[]} onChange={onChange} itemIsEqual={itemIsEqual} />
  } else {
    return <SelectSingle<T> {...rest} value={checkedValue as T} onChange={onChange} style={style} />
  }
}
