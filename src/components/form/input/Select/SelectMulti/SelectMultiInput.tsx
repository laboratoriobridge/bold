import React, { CSSProperties, useRef } from 'react'

import { Theme, useStyles } from '../../../../../styles'
import { Omit } from '../../../../../util'
import { Input, InputProps } from '../../Input/Input'
import { createStyleParts, InputStatus } from '../../TextInput/TextInputBase'

import { SelectMultiItem } from './SelectMultiItem'

export interface SelectMultiInputProps<T> extends Omit<InputProps, 'style'> {
  items: T[]
  status?: InputStatus
  clearable?: boolean
  renderItem(item: T): React.ReactNode
  onRemoveItem(item: T): void
}

export function SelectMultiInput<T>(props: SelectMultiInputProps<T>) {
  const { items, renderItem, onRemoveItem, status, disabled, clearable, ...rest } = props

  const inputRef = useRef<HTMLInputElement>()

  const handleRemove = (item: T) => (e: React.MouseEvent<HTMLSpanElement>) => {
    props.onRemoveItem(item)
    e.stopPropagation() // Do not propagate so menu is not opened when item is removed
  }

  const handleWrapperClick = () => inputRef.current.focus()

  const { classes, css } = useStyles(createStyles, props)
  const wrapperClasses = css(classes.wrapper, status === 'error' && classes.error, props.disabled && classes.disabled)

  return (
    <div className={wrapperClasses} onClick={handleWrapperClick}>
      {items &&
        items.map((item, key) => (
          <SelectMultiItem key={key} onRemove={handleRemove(item)} style={classes.item} disabled={disabled}>
            {renderItem(item)}
          </SelectMultiItem>
        ))}
      <Input type='text' inputRef={inputRef} className={classes.input} disabled={disabled} {...rest} />
    </div>
  )
}

export const createStyles = (theme: Theme, { items, disabled }: SelectMultiInputProps<any>) => {
  const parts = createStyleParts(theme)
  return {
    wrapper: {
      ...parts.base,
      cursor: 'text',

      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',

      padding: items.length > 0 ? 'calc(0.25rem - 1px) 0.25rem' : 'calc(0.5rem - 1px) 0.5rem',
      '&:hover': !disabled && parts.hover,
      '&:active': !disabled && parts.active,
      '&:focus-within': !disabled && parts.focus,
    } as CSSProperties,
    disabled: parts.disabled,
    error: {
      ...parts.error,
      '&:focus-within': parts.error[':not(:disabled):focus'],
    } as CSSProperties,
    item: {
      marginRight: '0.25rem',
    } as CSSProperties,
    input: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.sizes.text,
      color: theme.pallete.text.main,
      lineHeight: '1rem',
      background: theme.pallete.surface.main,
      padding: 0,
      flex: 1,
      border: 0,
      outline: 0,
      '::placeholder': parts.placeholder,
      ':disabled': parts.disabled,
    } as CSSProperties,
  }
}
