import React from 'react'

import { withStyles, WithStylesProps } from '../../../../../styles'
import { Omit } from '../../../../../util'
import { Input, InputProps } from '../../Input/Input'
import { createStyleParts, InputStatus } from '../../TextInput/TextInputBase'

import { SelectMultiItem } from './SelectMultiItem'

export interface SelectMultiInputProps<T> extends Omit<InputProps, 'style'>, WithStylesProps {
  items: T[]
  status?: InputStatus
  clearable?: boolean
  renderItem(item: T): React.ReactNode
  onRemoveItem(item: T): void
}

@withStyles
export class SelectMultiInput<T> extends React.Component<SelectMultiInputProps<T>> {
  private inputRef = React.createRef<HTMLInputElement>()

  render() {
    const { css, theme, items, renderItem, onRemoveItem, status, disabled, clearable, ...rest } = this.props
    const parts = createStyleParts(theme)
    const styles = {
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
      },
      disabled: parts.disabled,
      error: {
        ...parts.error,
        '&:focus-within': parts.error[':not(:disabled):focus'],
      },
      item: {
        marginRight: '0.25rem',
      },
      input: {
        padding: 0,
        flex: 1,
        border: 0,
        outline: 0,
        '::placeholder': parts.placeholder,
        ':disabled': parts.disabled,
      },
    }

    const wrapperClasses = css(
      styles.wrapper as any,
      status === 'error' && (styles.error as any),
      this.props.disabled && (styles.disabled as any)
    )

    return (
      <div className={wrapperClasses} onClick={this.handleWrapperClick}>
        {items &&
          items.map((item, key) => (
            <SelectMultiItem key={key} onRemove={this.handleRemove(item)} style={styles.item} disabled={disabled}>
              {renderItem(item)}
            </SelectMultiItem>
          ))}
        <Input
          type='text'
          inputRef={this.inputRef}
          className={css(styles.input as any)}
          disabled={disabled}
          {...rest}
        />
      </div>
    )
  }

  handleRemove = (item: T) => (e: React.MouseEvent<HTMLSpanElement>) => {
    this.props.onRemoveItem(item)
    e.stopPropagation() // Do not propagate so menu is not opened when item is removed
  }

  handleWrapperClick = () => this.inputRef.current.focus()
}
