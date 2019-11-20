import React, { useRef } from 'react'

import { useFormControl, UseFormControlProps } from '../../../hooks/useFormControl'
import { useStyles } from '../../../styles'
import { Omit } from '../../../util'
import { composeRefs } from '../../../util/react'
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
  openOnFocus?: SelectDownshiftProps<T>['openOnFocus']
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
    openOnFocus,
    onFilterChange,
    createNewItem,
    loading,
    renderItem,
    components,
    style,
    label,
    error,
    inputRef,
    ...rest
  } = props

  const internalInputRef = useRef<HTMLInputElement>()

  const handleClear = (downshift: SelectDownshiftRenderProps<T>) => (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    downshift.clearSelection()
    if (props.onClear) {
      props.onClear(e)
    }
  }

  const handleInputIconClick = ({ toggleMenu }: SelectDownshiftRenderProps<T>) => () => toggleMenu()
  const handleInputClick = ({ openMenu }: SelectDownshiftRenderProps<T>) => () => openMenu()
  const handleInputFocus = ({ openMenu }: SelectDownshiftRenderProps<T>) => (e: React.FocusEvent<HTMLInputElement>) => {
    openMenu()
    props.onFocus && props.onFocus(e)
  }
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
        openOnFocus={openOnFocus}
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
                  inputRef={composeRefs(internalInputRef, inputRef) as any}
                  {...rest}
                  onClick={handleInputClick(downshift)}
                  onClear={handleClear(downshift)}
                  onIconClick={handleInputIconClick(downshift)}
                  {...getInputProps({
                    onBlur: handleInputBlur(downshift),
                    onFocus: handleInputFocus(downshift),
                  } as any)}
                  {...inputProps}
                  value={inputValue ? inputValue : ''}
                  invalid={invalid}
                />
              </div>
              <SelectDownshiftMenu
                anchorRef={internalInputRef}
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
