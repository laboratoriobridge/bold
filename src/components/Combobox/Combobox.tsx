import { useCombobox, UseComboboxState, UseComboboxStateChangeOptions } from 'downshift'
import matchSorter from 'match-sorter'
import React, { useState } from 'react'
import { useLocale } from '../../i18n'
import { FormControl, FormControlProps } from '../FormControl'
import { TextInput, TextInputProps } from '../TextField'

export interface ComboboxProps<T = string> extends TextInputProps {
  items: T[]
  label?: FormControlProps['label']
  openOnFocus: boolean
  itemToString(item: T): string
  filter?(items: T[], filter: string): T[]
}

export function Combobox<T = string>(props: ComboboxProps<T>) {
  const {
    items,
    itemToString,
    label,
    openOnFocus,
    filter = (items, filter) => matchSorter(items, filter, { keys: [itemToString] }),
    ...rest
  } = props
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
      setVisibleItems(filter(items, inputValue))
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

Combobox.defaultProps = {
  openOnFocus: true,
} as Partial<ComboboxProps>

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
