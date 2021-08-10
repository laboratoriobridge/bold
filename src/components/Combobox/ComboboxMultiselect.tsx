import { useCombobox, UseComboboxState, UseComboboxStateChangeOptions, useMultipleSelection } from 'downshift'
import matchSorter from 'match-sorter'
import React, { CSSProperties, useCallback, useEffect, useRef, useState } from 'react'
import { usePopper } from 'react-popper'
import { useLocale } from '../../i18n'
import { Theme, useStyles } from '../../styles'
import { composeHandlers, composeRefs } from '../../util/react'
import { FormControl } from '../FormControl'
import { useFormControl } from '../../hooks/useFormControl'
import { TextInput } from '../TextField'
import { ComboboxMultiselectComponents, defaultComboboxMultiselectComponents } from './ComboboxMenuComponents'
import { useComboboxItemsLoader } from './useComboboxItemsLoader'
import { ComboboxProps, DefaultComboboxItemType } from './Combobox'

export interface ComboboxMultiselectProps<T> extends Omit<ComboboxProps<T>, 'value' | 'onChange' | 'components'> {
  value: T[]
  onChange?: (newValue: T[]) => void
  itemIsEqual(a: T, b: T): boolean
  components: ComboboxMultiselectComponents<T>
}

export function ComboboxMultiselect<T = DefaultComboboxItemType>(props: ComboboxMultiselectProps<T>) {
  const {
    value,
    items,
    loading: externalLoading,
    debounceMilliseconds,
    createNewItem,
    components = {},
    itemToString,
    menuMinWidth,
    openOnFocus,
    onClear,
    onChange,
    onFocus,
    onFilterChange,
    itemIsEqual,
    filter = (items, filter) => matchSorter(items, filter, { keys: [itemToString] }),
    ...rest
  } = props

  const [inputValue, setInputValue] = useState('')
  const [itemsLoaded, setItemsLoaded] = useState(false)
  const locale = useLocale()
  const { classes } = useStyles(createStyles)

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
  useEffect(() => composeHandlers(loadItems, onFilterChange)(inputValue), [inputValue])

  const inputRef = useRef<HTMLInputElement>()
  const [menuRef, setMenuRef] = useState<HTMLDivElement>()

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection({
    initialSelectedItems: value,
    onSelectedItemsChange: ({ selectedItems }) => {
      onChange?.(selectedItems)
    },
  })

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
    reset,
  } = useCombobox<T>({
    defaultHighlightedIndex: 0, // after selection, highlight the first item.
    selectedItem: null,
    items: loadedItems,

    stateReducer: comboboxMultiselectStateReducer(createNewItem),
    itemToString,
    onStateChange: ({ inputValue, type, selectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue)
          break
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInputValue('')
            addSelectedItem(selectedItem)
          }
          break
        default:
          break
      }
    },
    onIsOpenChange: ({ isOpen, inputValue }) => {
      isOpen && !itemsLoaded && loadItems(inputValue)
      setItemsLoaded(true)
    },
  })

  const downshiftComboboxProps = getComboboxProps()
  const { getFormControlProps, getInputProps: getFromControlInputProps } = useFormControl(props)
  const { ref: downshiftInputRef, ...downshiftInputProps } = getInputProps({
    onFocus: composeHandlers(onFocus, () => openOnFocus && openMenu()),
  })
  const { id: labelId, ...downshiftLabelProps } = getLabelProps()
  const downshiftMenuProps = getMenuProps()

  const {
    styles: { popper: popperStyles },
    attributes: { popper: popperAttributes },
  } = usePopper(inputRef.current, menuRef, {
    placement: 'bottom-start',
  })

  const formControlInputProps = getFromControlInputProps()
  const formControlProps = getFormControlProps()
  const invalid = !!formControlProps.error

  const { AppendItem, CreateItem, EmptyItem, Item, LoadingItem, PrependItem, SelectedItem } = {
    ...defaultComboboxMultiselectComponents,
    ...components,
  }
  return (
    <div {...downshiftComboboxProps}>
      <FormControl {...formControlProps} labelId={labelId} {...downshiftLabelProps}>
        <TextInput
          icon={isOpen ? 'angleUp' : 'angleDown'}
          iconAriaLabel={isOpen ? locale.combobox.hideOptions : locale.combobox.showOptions}
          iconPosition='right'
          onIconClick={toggleMenu}
          inputRef={composeRefs(inputRef, downshiftInputRef)}
          onClear={composeHandlers(reset, onClear)}
          invalid={invalid}
          {...formControlInputProps}
          {...downshiftInputProps}
          {...rest}
        />
        {selectedItems.map((selectedItem) => (
          <SelectedItem onRemove={() => removeSelectedItem(selectedItem)}>{itemToString(selectedItem)}</SelectedItem>
        ))}
      </FormControl>

      {/*By the ARIA definition, the menu element should always be in the DOM*/}
      <div aria-busy={isLoading} {...downshiftMenuProps}>
        {isOpen && (
          <div
            data-testid='menu'
            className={classes.menu}
            style={{ ...popperStyles, width: inputRef.current?.clientWidth, minWidth: menuMinWidth }}
            {...popperAttributes}
            ref={setMenuRef}
          >
            <ul className={classes.list}>
              {PrependItem && <PrependItem />}
              {isLoading && <LoadingItem />}
              {!isLoading && createNewItem && !loadedItems?.length && <CreateItem />}
              {!isLoading && !createNewItem && !loadedItems?.length && <EmptyItem />}
              {loadedItems.map((item, index) => (
                <Item
                  key={`${item}${index}`}
                  item={item}
                  index={index}
                  selected={selectedItems.some((selectedItem) => itemIsEqual(item, selectedItem))}
                  {...getItemProps({ item, index })}
                  {...props}
                />
              ))}
              {AppendItem && <AppendItem />}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

ComboboxMultiselect.defaultProps = {
  openOnFocus: true,
  loading: false,
  debounceMilliseconds: 350,
  itemIsEqual: (a, b) => a === b,
} as Partial<ComboboxProps<any>>

const comboboxMultiselectStateReducer = <T,>(createNewItem: (inputValue: string) => T) => (
  state: UseComboboxState<T>,
  actionAndChanges: UseComboboxStateChangeOptions<T>
): Partial<UseComboboxState<T>> => {
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
        ...(!changes.selectedItem &&
          (createNewItem
            ? { selectedItem: createNewItem(state.inputValue) }
            : {
                inputValue: '',
              })),
      }
    default:
      return changes
  }
}

export const createStyles = (theme: Theme) => ({
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

  list: {
    zIndex: 'auto',
    border: 0,
    borderRadius: 0,
    boxShadow: 'none',
    maxHeight: 'auto',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    backgroundColor: theme.pallete.surface.main,
    overflowY: 'auto',
    overflowX: 'hidden',
    width: '100%',
  } as CSSProperties,
})
