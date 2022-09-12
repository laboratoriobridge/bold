import { useCombobox, UseComboboxState, UseComboboxStateChangeOptions } from 'downshift'
import matchSorter from 'match-sorter'
import React, { CSSProperties, useCallback, useEffect, useRef, useState } from 'react'
import { usePopper } from 'react-popper'
import { useMemo } from 'react'
import { useLocale } from '../../i18n'
import { Theme, useStyles } from '../../styles'
import { composeHandlers, composeRefs } from '../../util/react'
import { FormControl } from '../FormControl'
import { useFormControl, UseFormControlProps } from '../../hooks/useFormControl'
import { TextInput, TextInputProps } from '../TextField'
import { ComboboxComponents, defaultComboboxComponents } from './ComboboxMenuComponents'
import { useComboboxItemsLoader } from './useComboboxItemsLoader'
import { DefaultComboboxItemType } from './Combobox'
import { ListBox } from './ListBox'

export interface ComboboxSingleselectProps<T>
  extends Omit<TextInputProps, 'value' | 'onChange' | 'multiple'>,
    UseFormControlProps {
  value?: T
  items: T[] | ((query: string) => Promise<T[]>)
  itemToString(item: T): string
  createNewItem?(inputValue: string): T
  openOnFocus?: boolean
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
  const defaultFilter = useCallback((items, filter) => matchSorter(items, filter, { keys: [props.itemToString] }), [
    props.itemToString,
  ])

  const {
    value,
    items,
    loading: externalLoading,
    debounceMilliseconds,
    createNewItem,
    components,
    itemToString,
    menuMinWidth,
    openOnFocus = true,
    onClear,
    onChange,
    onFocus,
    onFilterChange,
    filter = defaultFilter,
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

  const componentsInner = useMemo(() => ({ ...defaultComboboxComponents, ...(components ?? {}) }), [components])

  return (
    <div {...downshiftComboboxProps}>
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
          <ListBox<T>
            data-testid='menu'
            className={classes.menu}
            style={{
              ...popperStyles,
              width: inputRef.current?.clientWidth,
              minWidth: menuMinWidth,
            }}
            {...popperAttributes}
            ref={setMenuRef}
            createNewItem={createNewItem}
            components={componentsInner}
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
})
