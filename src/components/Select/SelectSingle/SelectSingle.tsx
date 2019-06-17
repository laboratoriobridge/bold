import React from 'react'

import { useStyles } from '../../../styles'
import { Omit } from '../../../util'
import { TextInput, TextInputProps } from '../../TextInput/TextInput'

import { SelectDownshift, SelectDownshiftProps, SelectDownshiftRenderProps } from './SelectDownshift'
import { SelectDownshiftMenu, SelectDownshiftMenuProps } from './SelectDownshiftMenu'

export interface DefaultItemType {
  value: any
  label: string
}

export interface SelectSingleProps<T = DefaultItemType> extends Omit<TextInputProps, 'value' | 'onChange'> {
  value?: T

  items: SelectDownshiftProps<T>['items']
  itemToString: SelectDownshiftProps<T>['itemToString']
  onChange?: SelectDownshiftProps<T>['onChange']
  isOpen?: SelectDownshiftProps<T>['isOpen']
  onFilterChange?: SelectDownshiftProps<T>['onFilterChange']

  loading?: SelectDownshiftMenuProps<T>['loading']
  renderItem?: SelectDownshiftMenuProps<T>['renderItem']
  components?: SelectDownshiftMenuProps<T>['components']
}

export function SelectSingle<T>(props: SelectSingleProps<T>) {
  const {
    value,
    items,
    itemToString,
    onChange,
    isOpen,
    onFilterChange,
    loading,
    renderItem,
    components,
    style,
    ...rest
  } = props

  const handleClear = (downshift: SelectDownshiftRenderProps<T>) => (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    downshift.clearSelection()
    if (props.onClear) {
      props.onClear(e)
    }
  }

  const handleInputIconClick = ({ toggleMenu }: SelectDownshiftRenderProps<T>) => () => toggleMenu()
  const handleInputFocus = ({ openMenu }: SelectDownshiftRenderProps<T>) => () => openMenu()
  const handleInputClick = ({ openMenu }: SelectDownshiftRenderProps<T>) => () => openMenu()
  const handleInputBlur = ({ closeMenu }: SelectDownshiftRenderProps<T>) => (e: React.FocusEvent<HTMLInputElement>) => {
    closeMenu()
    props.onBlur && props.onBlur(e)
  }

  const { css } = useStyles()

  return (
    <SelectDownshift<T>
      selectedItem={value || null} // Use null here to force downshift to "uncontrolled" mode
      items={items}
      itemToString={itemToString}
      onChange={onChange}
      isOpen={isOpen}
      onFilterChange={onFilterChange}
    >
      {downshift => {
        const { isOpen: downshiftOpen, getInputProps, visibleItems, inputValue } = downshift

        return (
          <div className={css(style)}>
            <div>
              <TextInput
                icon={isOpen ? 'zoomOutline' : downshiftOpen ? 'angleUp' : 'angleDown'}
                {...rest}
                onBlur={handleInputBlur(downshift)}
                onFocus={handleInputFocus(downshift)}
                onClick={handleInputClick(downshift)}
                onClear={handleClear(downshift)}
                onIconClick={handleInputIconClick(downshift)}
                {...getInputProps()}
                value={inputValue ? inputValue : ''}
              />
            </div>
            <SelectDownshiftMenu
              downshift={downshift}
              items={visibleItems}
              loading={loading}
              renderItem={renderItem}
              components={components}
            />
          </div>
        )
      }}
    </SelectDownshift>
  )
}
