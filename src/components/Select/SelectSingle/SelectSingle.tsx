import React, { useRef, useCallback } from 'react'

import { useFormControl, UseFormControlProps } from '../../../hooks/useFormControl'
import { useStyles } from '../../../styles'
import { Omit } from '../../../util'
import { composeRefs, composeHandlers } from '../../../util/react'
import { FormControl } from '../../FormControl'
import { TextInput, TextInputProps } from '../../TextField'

import { SelectDownshift, SelectDownshiftProps } from './SelectDownshift'
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
  menuMinWidth?: SelectDownshiftProps<T>['menuMinWidth']
  openOnFocus?: SelectDownshiftProps<T>['openOnFocus']
  onFilterChange?: SelectDownshiftProps<T>['onFilterChange']
  createNewItem?: SelectDownshiftProps<T>['createNewItem']

  loading?: SelectDownshiftMenuProps<T>['loading']
  renderItem?: SelectDownshiftMenuProps<T>['renderItem']
  components?: SelectDownshiftMenuProps<T>['components']
  popperProps?: SelectDownshiftMenuProps<T>['popperProps']
}

export function SelectSingle<T>(props: SelectSingleProps<T>) {
  const {
    value,
    items,
    itemToString,
    onChange,
    isOpen,
    menuMinWidth,
    openOnFocus,
    onFilterChange,
    createNewItem,
    popperProps,
    loading,
    renderItem,
    components,
    style,
    label,
    error,
    inputRef,
    onIconClick,
    onClear,
    ...rest
  } = props

  const internalInputRef = useRef<HTMLInputElement>()
  const { css } = useStyles()

  const { getFormControlProps, getInputProps: getFormControlInputProps } = useFormControl(props)
  const formControlProps = getFormControlProps()
  const inputProps = getFormControlInputProps()
  const invalid = inputProps['aria-invalid']

  const handleInputIconClick = useCallback(
    (isOpen: boolean) => () => {
      if (!isOpen) {
        internalInputRef.current.focus()
      }
    },
    []
  )

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
        {(downshift) => {
          const {
            isOpen: downshiftOpen,
            getInputProps,
            visibleItems,
            inputValue,
            openMenu,
            toggleMenu,
            clearSelection,
          } = downshift

          const downshiftInputProps = getInputProps({
            onBlur: composeHandlers(props.onBlur),
            onFocus: composeHandlers(openMenu, props.onFocus),
            onClick: composeHandlers(openMenu, props.onClick),
          } as any)

          return (
            <div className={css(style)}>
              <div>
                <TextInput
                  icon={downshiftOpen ? 'angleUp' : 'angleDown'}
                  onIconClick={composeHandlers(toggleMenu, handleInputIconClick(downshiftOpen), onIconClick)}
                  onClear={composeHandlers(clearSelection, onClear)}
                  invalid={invalid}
                  {...rest}
                  {...downshiftInputProps}
                  {...inputProps}
                  inputRef={composeRefs(internalInputRef, inputRef) as any}
                  value={inputValue ? inputValue : ''}
                />
              </div>
              <SelectDownshiftMenu
                popperProps={popperProps}
                anchorRef={internalInputRef}
                menuMinWidth={menuMinWidth}
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
