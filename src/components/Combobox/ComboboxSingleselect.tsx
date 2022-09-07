import { useCombobox, UseComboboxState, UseComboboxStateChangeOptions } from 'downshift'
import matchSorter from 'match-sorter'
import React, { CSSProperties, useCallback, useEffect, useRef, useState } from 'react'
import { usePopper } from 'react-popper'
import { useLocale } from '../../i18n'
import { Theme, useStyles } from '../../styles'
import { composeHandlers, composeRefs } from '../../util/react'
import { FormControl } from '../FormControl'
import { useFormControl, UseFormControlProps } from '../../hooks/useFormControl'
import { TextInput, TextInputProps } from '../TextField'
import { ComboboxComponents, defaultComboboxComponents } from './ComboboxMenuComponents'
import { useComboboxItemsLoader } from './useComboboxItemsLoader'
import { DefaultComboboxItemType } from './Combobox'

export interface ComboboxSingleselectProps<T>
  extends Omit<TextInputProps, 'value' | 'onChange' | 'multiple'>,
    UseFormControlProps {
  value?: T
  items: T[] | ((query: string) => Promise<T[]>)
  itemToString(item: T): string
  createNewItem?(inputValue: string): T
  openOnFocus: boolean
  loading: boolean
  debounceMilliseconds: number
  menuMinWidth?: number
  filter?(items: T[], filter: string): T[]
  onChange?: (newValue: T) => void
  onFilterChange?: (newValue: string) => void
  components?: Partial<ComboboxComponents<T>>

  inputId?: string
  labelId?: string
  menuId?: string
  getItemId?(index: number): string
}

export function ComboboxSingleselect<T = DefaultComboboxItemType>(props: ComboboxSingleselectProps<T>) {
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
    filter = (items, filter) => matchSorter(items, filter, { keys: [itemToString] }),
    inputId,
    labelId,
    menuId,
    getItemId,
    ...rest
  } = props

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

  const inputRef = useRef<HTMLInputElement>()
  const [menuRef, setMenuRef] = useState<HTMLDivElement>()

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
    closeMenu,
    reset,
  } = useCombobox<T>({
    selectedItem: value,
    items: loadedItems,

    stateReducer: comboboxStateReducer(createNewItem),
    itemToString,
    onInputValueChange: ({ inputValue }) => composeHandlers(loadItems, onFilterChange)(inputValue),
    onSelectedItemChange: ({ selectedItem }) => {
      closeMenu()
      onChange?.(selectedItem)
    },
    onIsOpenChange: ({ isOpen, inputValue }) => {
      isOpen && !itemsLoaded && loadItems(inputValue)
      setItemsLoaded(true)
    },

    inputId,
    labelId,
    menuId,
    getItemId,
  })

  const downshiftComboboxProps = getComboboxProps()
  const { getFormControlProps, getInputProps: getFormControlInputProps } = useFormControl(props)
  const { ref: downshiftInputRef, ...downshiftInputProps } = getInputProps({
    onFocus: composeHandlers(onFocus, () => openOnFocus && openMenu()),
  })
  const { id: internalLabelId, ...downshiftLabelProps } = getLabelProps()
  const downshiftMenuProps = getMenuProps()

  const {
    styles: { popper: popperStyles },
    attributes: { popper: popperAttributes },
  } = usePopper(inputRef.current, menuRef, {
    placement: 'bottom-start',
  })

  const formControlInputProps = getFormControlInputProps()
  const formControlProps = getFormControlProps()
  const invalid = !!formControlProps.error

  const { AppendItem, CreateItem, EmptyItem, Item, LoadingItem, PrependItem } = {
    ...defaultComboboxComponents,
    ...components,
  }
  return (
    <div {...downshiftComboboxProps} aria-expanded={(!!isOpen).toString()}>
      <FormControl {...formControlProps} labelId={internalLabelId} {...downshiftLabelProps}>
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
      </FormControl>

      {/*By the ARIA definition, the menu element should always be in the DOM*/}
      <div aria-busy={isLoading} {...downshiftMenuProps}>
        {isOpen && (
          <div
            data-testid='menu'
            className={classes.menu}
            style={{
              ...popperStyles,
              width: inputRef.current?.clientWidth,
              minWidth: menuMinWidth,
            }}
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
                  selected={highlightedIndex === index}
                  itemToString={itemToString}
                  {...getItemProps({ item, index })}
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

const comboboxStateReducer = <T,>(createNewItem: (inputValue: string) => T) => (
  state: UseComboboxState<T>,
  actionAndChanges: UseComboboxStateChangeOptions<T>
): Partial<UseComboboxState<T>> => {
  const { type, changes } = actionAndChanges
  switch (type) {
    case useCombobox.stateChangeTypes.InputChange:
      return {
        ...changes,
        selectedItem: undefined,
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
