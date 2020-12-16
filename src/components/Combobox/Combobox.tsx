import { useCombobox, UseComboboxState, UseComboboxStateChangeOptions } from 'downshift'
import React, { useState } from 'react'
import { Button } from '../Button'
import { FormControl, FormControlProps } from '../FormControl'
import { TextInput, TextInputProps } from '../TextField'

export interface ComboboxProps<T = string> extends TextInputProps {
  items: T[]
  label?: FormControlProps['label']
  openOnFocus?: boolean
  itemToString(item: T): string
}

export function Combobox<T = string>(props: ComboboxProps<T>) {
  const { items, itemToString, label, openOnFocus = true, ...rest } = props
  const [visibleItems, setVisibleItems] = useState<T[]>(items) // TODO: change when props chang

  const {
    isOpen,
    highlightedIndex,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    openMenu,
  } = useCombobox({
    items: visibleItems,
    itemToString,
    stateReducer,
    onInputValueChange: ({ inputValue }) => {
      // TODO: use correct filter function here
      setVisibleItems(items.filter((item) => itemToString(item).toLowerCase().startsWith(inputValue.toLowerCase())))
    },
  })

  console.log({
    getInputProps: getInputProps(),
    getLabelProps: getLabelProps(),
    getComboboxProps: getComboboxProps(),
    getToggleButtonProps: getToggleButtonProps(),
    getMenuProps: getMenuProps(),
  })

  const downshiftComboboxProps = getComboboxProps()
  const downshiftInputProps = getInputProps({
    refKey: 'inputRef',
    onFocus: () => openOnFocus && openMenu(),
  })
  const { id: labelId, ...downshiftLabelProps } = getLabelProps()
  const downshiftMenuProps = getMenuProps()
  // TODO: {...getToggleButtonProps({})} aria-label='toggle menu'

  return (
    <div {...downshiftComboboxProps}>
      <FormControl label={label} labelId={labelId} {...downshiftLabelProps}>
        <TextInput {...downshiftInputProps} {...rest} />
        <Button />
      </FormControl>

      <div {...downshiftMenuProps}>
        {isOpen && (
          <ul>
            {visibleItems.map((item, index) => (
              <li
                style={highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}}
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {itemToString(item)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export function stateReducer<T>(
  state: UseComboboxState<T>,
  actionAndChanges: UseComboboxStateChangeOptions<T>
): UseComboboxState<T> {
  const { type, changes } = actionAndChanges

  switch (type) {
    default:
      return changes
  }
}
