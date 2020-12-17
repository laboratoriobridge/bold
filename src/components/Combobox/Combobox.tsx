import { useCombobox, UseComboboxState, UseComboboxStateChangeOptions } from 'downshift'
import React, { useState } from 'react'
import { useLocale } from '../../i18n'
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
  const locale = useLocale()

  const {
    isOpen,
    highlightedIndex,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    openMenu,
    toggleMenu,
  } = useCombobox({
    items: visibleItems,
    itemToString,
    stateReducer,
    onInputValueChange: ({ inputValue }) => {
      // TODO: use correct filter function here
      setVisibleItems(items.filter((item) => itemToString(item).toLowerCase().startsWith(inputValue.toLowerCase())))
    },
  })

  const downshiftComboboxProps = getComboboxProps()
  const downshiftInputProps = getInputProps({
    refKey: 'inputRef',
    onFocus: () => openOnFocus && openMenu(),
  })
  const { id: labelId, ...downshiftLabelProps } = getLabelProps()
  const downshiftMenuProps = getMenuProps()

  return (
    <div {...downshiftComboboxProps}>
      <FormControl label={label} labelId={labelId} {...downshiftLabelProps}>
        <TextInput
          icon={isOpen ? 'angleUp' : 'angleDown'}
          iconAriaLabel={isOpen ? locale.combobox.hideOptions : locale.combobox.showOptions}
          iconPosition='right'
          onIconClick={toggleMenu}
          {...downshiftInputProps}
          {...rest}
        />
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

function stateReducer<T>(
  state: UseComboboxState<T>,
  actionAndChanges: UseComboboxStateChangeOptions<T>
): UseComboboxState<T> {
  const { type, changes } = actionAndChanges

  switch (type) {
    default:
      return changes
  }
}
