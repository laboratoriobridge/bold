import { useCombobox, UseComboboxState, UseComboboxStateChangeOptions } from 'downshift'
import React, { useState } from 'react'
import { useLocale } from '../../i18n'
import { Button, ButtonProps } from '../Button'
import { FormControl, FormControlProps } from '../FormControl'
import { Icon, Icons } from '../Icon'
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
          icon={
            <DropdownButton
              icon={isOpen ? 'angleUp' : 'angleDown'}
              {...getToggleButtonProps({
                'aria-label': isOpen ? locale.combobox.hideOptions : locale.combobox.showOptions,
              })}
            />
          }
          iconPosition='right'
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

interface DropdownButtonProps extends ButtonProps {
  icon: Icons
}

function DropdownButton(props: DropdownButtonProps) {
  const { onClick, icon, ...rest } = props
  return (
    <Button
      size='small'
      skin='ghost'
      tabIndex={-1}
      onClick={onClick}
      style={{
        borderRadius: 'inherit',
        '&:focus': {
          boxShadow: 'none',
        },
      }}
      {...rest}
    >
      <Icon icon={icon} />
    </Button>
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
