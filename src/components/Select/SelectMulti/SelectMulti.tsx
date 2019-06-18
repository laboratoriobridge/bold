import React from 'react'

import { Omit } from '../../../util'
import { Checkbox } from '../../Checkbox/Checkbox'
import { HFlow } from '../../Flow'
import { DefaultItemType } from '../SelectSingle'
import { SelectDownshiftMenu, SelectDownshiftMenuProps } from '../SelectSingle/SelectDownshiftMenu'

import { MultiDownshift, MultiDownshiftProps, MultiSelectRenderProps } from './MultiDownshift'
import { SelectMultiInput, SelectMultiInputProps } from './SelectMultiInput'

export interface SelectMultiProps<T = DefaultItemType>
  extends Omit<SelectMultiInputProps<T>, 'renderItem' | 'value' | 'onChange' | 'onRemoveItem'> {
  value?: T[]

  // TODO!
  clearable?: boolean

  items: MultiDownshiftProps<T>['items']
  itemToString: MultiDownshiftProps<T>['itemToString']
  onChange?: MultiDownshiftProps<T>['onChange']
  isOpen?: MultiDownshiftProps<T>['isOpen']
  itemIsEqual?: MultiDownshiftProps<T>['itemIsEqual']
  onFilterChange?: MultiDownshiftProps<T>['onFilterChange']

  loading?: SelectDownshiftMenuProps<T>['loading']
  renderItem?: SelectDownshiftMenuProps<T>['renderItem']
  components?: SelectDownshiftMenuProps<T>['components']
}
export function SelectMulti<T>(props: SelectMultiProps<T>) {
  const {
    value,
    items,
    itemToString,
    onChange,
    isOpen,
    itemIsEqual,
    onFilterChange,
    loading,
    renderItem: externalRenderItem,
    components,
    placeholder,
    ...rest
  } = props

  const handleItemRemove = (removeItem: Function) => (item: T) => removeItem(item)

  const renderItem = ({ isSelected }: MultiSelectRenderProps<T>) => (item: T) => (
    <HFlow hSpacing={0.5}>
      <Checkbox checked={isSelected(item)} tabIndex={-1} readOnly />
      {externalRenderItem ? externalRenderItem(item) : itemToString(item)}
    </HFlow>
  )

  //   const handleInputIconClick = ({ toggleMenu }: MultiSelectRenderProps<T>) => () => toggleMenu()
  const handleInputFocus = ({ openMenu }: MultiSelectRenderProps<T>) => () => openMenu()
  const handleInputClick = ({ openMenu }: MultiSelectRenderProps<T>) => () => openMenu()
  const handleInputBlur = ({ closeMenu }: MultiSelectRenderProps<T>) => (e: React.FocusEvent<HTMLInputElement>) => {
    closeMenu()
    this.props.onBlur && this.props.onBlur(e)
  }

  return (
    <MultiDownshift<T>
      selectedItems={value || []}
      items={items}
      itemToString={itemToString}
      onChange={onChange}
      isOpen={isOpen}
      itemIsEqual={itemIsEqual}
      onFilterChange={onFilterChange}
    >
      {downshift => {
        const {
          // isOpen,
          getInputProps,
          selectedItems,
          removeItem,
          inputValue,
          visibleItems,
        } = downshift

        return (
          <div>
            <SelectMultiInput<T>
              items={selectedItems}
              {...rest}
              placeholder={!selectedItems || selectedItems.length === 0 ? placeholder : undefined}
              onBlur={handleInputBlur(downshift)}
              onFocus={handleInputFocus(downshift)}
              onClick={handleInputClick(downshift)}
              onRemoveItem={handleItemRemove(removeItem)}
              renderItem={itemToString}
              // icon={isOpen ? 'triangleUp' : 'triangleDown'}
              // onIconClick={this.handleInputIconClick(downshift)}
              {...getInputProps()}
              value={inputValue ? inputValue : ''}
            />
            <SelectDownshiftMenu
              downshift={downshift}
              items={visibleItems}
              loading={loading}
              renderItem={renderItem(downshift)}
            />
          </div>
        )
      }}
    </MultiDownshift>
  )
}
