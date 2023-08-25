import { useCombobox, UseComboboxState, UseComboboxStateChangeOptions, useMultipleSelection } from 'downshift'
import matchSorter from 'match-sorter'
import React, { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { usePopper } from 'react-popper'
import { isNil } from 'lodash'
import { Theme, useStyles } from '../../styles'
import { composeHandlers, composeRefs } from '../../util/react'
import { FormControl } from '../FormControl'
import { useFormControl } from '../../hooks/useFormControl'
import { createStyleParts, TextInputBase } from '../TextField/TextInputBase'
import { InputWrapper } from '../TextField/InputWrapper'
import { ComboboxMultiselectComponents, defaultComboboxMultiselectComponents } from './ComboboxMenuComponents'
import { useComboboxItemsLoader } from './useComboboxItemsLoader'
import { DefaultComboboxItemType } from './Combobox'
import { ComboboxSingleselectProps } from './ComboboxSingleselect'
import { ListBox } from './ListBox'

export interface ComboboxMultiselectProps<T>
  extends Omit<ComboboxSingleselectProps<T>, 'value' | 'onChange' | 'components' | 'multiple' | 'createNewItem'> {
  value?: T[]
  onChange?: (newValue: T[]) => void
  itemIsEqual(a: T, b: T): boolean
  components?: Partial<ComboboxMultiselectComponents<T>>
}

export function ComboboxMultiselect<T = DefaultComboboxItemType>(props: ComboboxMultiselectProps<T>) {
  const defaultFilter = useCallback((items, filter) => matchSorter(items, filter, { keys: [props.itemToString] }), [
    props.itemToString,
  ])

  const {
    value,
    items,
    disabled,
    clearable,
    placeholder,
    loading: externalLoading,
    debounceMilliseconds,
    components,
    itemToString,
    menuMinWidth,
    openOnFocus = true,
    onClear,
    onChange,
    onFocus,
    onFilterChange,
    itemIsEqual,
    filter = defaultFilter,

    inputId,
    labelId,
    menuId,
    getItemId,
    open,
    popperProps,
    ...rest
  } = props

  const [itemsLoaded, setItemsLoaded] = useState(false)

  const isAsync = typeof items === 'function'
  const getItems = useCallback((query: string) => (typeof items === 'function' ? items(query) : filter(items, query)), [
    items,
    filter,
  ])
  const { loading: loadingItems, items: loadedItems, loadItems } = useComboboxItemsLoader(
    getItems,
    debounceMilliseconds
  )
  const isLoading = externalLoading || (isAsync && loadingItems)

  // Reload items when changed
  useEffect(() => setItemsLoaded(false), [items])

  const inputRef = useRef<HTMLInputElement>()
  const wrapperRef = useRef<HTMLDivElement>()
  const [menuRef, setMenuRef] = useState<HTMLDivElement>()

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    setSelectedItems,
    removeSelectedItem,
    selectedItems = [],
    reset,
  } = useMultipleSelection<T>({
    onSelectedItemsChange: ({ selectedItems }) => {
      onChange?.(selectedItems)
    },
  })

  useEffect(() => {
    setSelectedItems(value ?? [])
  }, [value, setSelectedItems])

  const { classes, css } = useStyles(createStyles, props, !!selectedItems.length)
  const isSelected = useCallback((item: T) => selectedItems.some((selectedItem) => itemIsEqual(item, selectedItem)), [
    selectedItems,
    itemIsEqual,
  ])

  useEffect(() => {
    if (open && !itemsLoaded) {
      loadItems(inputRef.current?.value)
      setItemsLoaded(true)
    }
  }, [open, itemsLoaded, loadItems])

  const {
    isOpen,
    highlightedIndex,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    openMenu,
    setInputValue,
  } = useCombobox<T>({
    defaultHighlightedIndex: 0,
    selectedItem: null,
    items: loadedItems,

    stateReducer: comboboxMultiselectStateReducer,
    itemToString,
    onInputValueChange: ({ inputValue }) => composeHandlers(loadItems, onFilterChange)(inputValue),
    onSelectedItemChange: ({ selectedItem }) => {
      isSelected(selectedItem) ? removeSelectedItem(selectedItem) : addSelectedItem(selectedItem)
      setInputValue('')
    },
    onIsOpenChange: ({ isOpen, inputValue }) => {
      isOpen && !itemsLoaded && loadItems(inputValue)
      setItemsLoaded(true)
    },

    inputId,
    labelId,
    menuId,
    getItemId,

    ...(isNil(open) ? {} : { isOpen: open }),
  })

  const downshiftComboboxProps = getComboboxProps()
  const { getFormControlProps, getInputProps: getFormControlInputProps } = useFormControl(props)
  const { ref: downshiftInputRef, ...downshiftInputProps } = getInputProps(
    getDropdownProps({
      onFocus: composeHandlers(onFocus, () => openOnFocus && openMenu()),
      preventKeyAction: isOpen,
    })
  )
  const { id: internalLabelId, ...downshiftLabelProps } = getLabelProps()
  const downshiftMenuProps = getMenuProps()

  const {
    styles: { popper: popperStyles },
    attributes: { popper: popperAttributes },
  } = usePopper(wrapperRef.current, menuRef, {
    placement: 'bottom-start',
    ...popperProps,
  })

  const formControlInputProps = getFormControlInputProps()
  const formControlProps = getFormControlProps()
  const invalid = !!formControlProps.error

  const handleWrapperClick = () => inputRef.current.focus()
  const handleItemClick = useCallback(
    (item: T) => (isSelected(item) ? removeSelectedItem(item) : addSelectedItem(item)),
    [isSelected, removeSelectedItem, addSelectedItem]
  )
  const wrapperClasses = css(classes.wrapper, invalid && classes.invalid, props.disabled && classes.disabled)

  const { SelectedItem, ...componentsRest } = useMemo(
    () => ({
      ...defaultComboboxMultiselectComponents,
      ...(components ?? {}),
    }),
    [components]
  )

  return (
    <div {...downshiftComboboxProps}>
      <FormControl {...formControlProps} labelId={internalLabelId} {...downshiftLabelProps}>
        <InputWrapper
          ref={wrapperRef}
          className={wrapperClasses}
          onClick={handleWrapperClick}
          clearVisible={clearable && !!selectedItems.length}
          onClear={composeHandlers(reset, onClear)}
        >
          {selectedItems.map((selectedItem, index) => (
            <SelectedItem
              style={classes.selectedItem}
              key={`selected-item-${index}`}
              onRemove={() => removeSelectedItem(selectedItem)}
              disabled={disabled}
              {...getSelectedItemProps({ selectedItem, index })}
            >
              {itemToString(selectedItem)}
            </SelectedItem>
          ))}

          <TextInputBase
            inputRef={composeRefs(inputRef, downshiftInputRef)}
            className={classes.input}
            disabled={disabled}
            invalid={invalid}
            placeholder={!selectedItems.length ? placeholder : null}
            {...formControlInputProps}
            {...downshiftInputProps}
            {...rest}
          />
        </InputWrapper>
      </FormControl>

      {/*By the ARIA definition, the menu element should always be in the DOM*/}
      <div aria-busy={isLoading} {...downshiftMenuProps}>
        {isOpen && (
          <ListBox<T>
            data-testid='menu'
            className={classes.menu}
            style={{ ...popperStyles, width: wrapperRef.current?.clientWidth, minWidth: menuMinWidth }}
            onItemClick={handleItemClick}
            isItemSelected={isSelected}
            {...popperAttributes}
            ref={setMenuRef}
            components={componentsRest}
            getItemProps={getItemProps}
            highlightedIndex={highlightedIndex}
            itemToString={itemToString}
            items={loadedItems}
            loading={isLoading}
          />
        )}
      </div>
    </div>
  )
}

function comboboxMultiselectStateReducer<T>(
  _state: UseComboboxState<T>,
  actionAndChanges: UseComboboxStateChangeOptions<T>
): Partial<UseComboboxState<T>> {
  const { type, changes } = actionAndChanges
  switch (type) {
    case useCombobox.stateChangeTypes.InputKeyDownEnter:
    case useCombobox.stateChangeTypes.ItemClick:
      return {
        ...changes,
        isOpen: true, // keep the menu open after selection.
      }
    case useCombobox.stateChangeTypes.InputBlur:
      return {
        ...changes,
        ...(!changes.selectedItem && {
          inputValue: '',
        }),
      }
    default:
      return changes
  }
}

export const createStyles = (theme: Theme, { disabled }: ComboboxMultiselectProps<any>, hasSelectedItems: boolean) => {
  const parts = createStyleParts(theme)
  return {
    wrapper: {
      ...parts.base,
      cursor: 'text',

      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',

      padding: hasSelectedItems ? 'calc(0.25rem - 1px) 0.25rem' : 'calc(0.5rem - 1px) 0.5rem',
      '&:hover': !disabled && parts.hover,
      '&:active': !disabled && parts.active,
      '&:focus-within': !disabled && parts.focus,
    } as CSSProperties,

    disabled: parts.disabled,

    invalid: {
      ...parts.invalid,
      '&:focus-within': parts.invalid[':not(:disabled):focus'],
    } as CSSProperties,

    selectedItem: {
      marginRight: '0.25rem',
    } as CSSProperties,

    input: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.sizes.text,
      color: theme.pallete.text.main,
      lineHeight: '1rem',
      background: theme.pallete.surface.main,
      padding: 0,
      flex: 1,
      border: 0,
      outline: 0,
      '::placeholder': parts.placeholder,
      ':disabled': parts.disabled,
    } as CSSProperties,

    menu: {
      display: 'flex',
      flexDirection: 'column',
      zIndex: theme.zIndex.dropdown,
      border: `1px solid ${theme.pallete.divider}`,
      borderRadius: theme.radius.popper,
      backgroundColor: theme.pallete.surface.main,
      boxShadow: theme.shadows.outer['40'],
      maxHeight: '20rem',
    } as CSSProperties,
  }
}
