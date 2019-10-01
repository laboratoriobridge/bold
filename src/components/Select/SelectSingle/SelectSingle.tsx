import React from 'react'

import { useFormControl, UseFormControlProps } from '../../../hooks/useFormControl'
import { useStyles } from '../../../styles'
import { Omit } from '../../../util'
import { FormControl } from '../../FormControl'
import { TextInput, TextInputProps } from '../../TextField'

import { SelectDownshift, SelectDownshiftProps, SelectDownshiftRenderProps } from './SelectDownshift'
import { SelectDownshiftMenu, SelectDownshiftMenuProps } from './SelectDownshiftMenu'

export interface DefaultItemType {
  value: any
  label: string
}

export interface SelectSingleProps<T = DefaultItemType>
  extends Omit<TextInputProps, 'value' | 'onChange'>,
    UseFormControlProps {
  value?: T

  items: SelectDownshiftProps<T>['items']
  itemToString: SelectDownshiftProps<T>['itemToString']
  onChange?: SelectDownshiftProps<T>['onChange']
  isOpen?: SelectDownshiftProps<T>['isOpen']
  onFilterChange?: SelectDownshiftProps<T>['onFilterChange']
  createNewItem?: SelectDownshiftProps<T>['createNewItem']

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
    createNewItem,
    loading,
    renderItem,
    components,
    style,
    label,
    error,
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

  const { getFormControlProps, getInputProps: getFormControlInputProps } = useFormControl(props)
  const formControlProps = getFormControlProps()
  const inputProps = getFormControlInputProps()
  const invalid = inputProps['aria-invalid']

  return (
    <FormControl {...formControlProps}>
      <SelectDownshift<T>
        selectedItem={value || null} // Use null here to force downshift to "uncontrolled" mode
        items={items}
        itemToString={itemToString}
        onChange={onChange}
        isOpen={isOpen}
        onFilterChange={onFilterChange}
        createNewItem={createNewItem}
        labelId={formControlProps.labelId}
      >
        {downshift => {
          const { isOpen: downshiftOpen, getInputProps, visibleItems, inputValue } = downshift

          return (
            <div className={css(style)}>
              <div>
                <TextInput
                  icon={downshiftOpen ? 'angleUp' : 'angleDown'}
                  {...rest}
                  onBlur={handleInputBlur(downshift)}
                  onFocus={handleInputFocus(downshift)}
                  onClick={handleInputClick(downshift)}
                  onClear={handleClear(downshift)}
                  onIconClick={handleInputIconClick(downshift)}
                  {...getInputProps()}
                  {...inputProps}
                  value={inputValue ? inputValue : ''}
                  invalid={invalid}
                />
              </div>
              <SelectDownshiftMenu
                downshift={downshift}
                items={visibleItems}
                loading={loading}
                renderItem={renderItem}
                components={components}
                createNewItem={!!createNewItem}
              />
            </div>
          )
        }}
      </SelectDownshift>
    </FormControl>
  )
}
