import { useCombobox, UseComboboxState, UseComboboxStateChangeOptions } from 'downshift'
import matchSorter from 'match-sorter'
import React, { CSSProperties, MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import { PopperProps, usePopper } from 'react-popper'
import { useMemo } from 'react'
import { isNil } from 'lodash'
import { useLocale } from '../../i18n'
import { Theme, useStyles } from '../../styles'
import { composeHandlers, composeRefs } from '../../util/react'
import { FormControl } from '../FormControl'
import { useFormControl, UseFormControlProps } from '../../hooks/useFormControl'
import { TextInput, TextInputProps } from '../TextField'
import { EMPTY_ARRAY } from '../../util'
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
  open?: boolean
  debounceMilliseconds: number
  menuMinWidth?: number
  filter?(items: ReadonlyArray<T>, filter: string): T[]
  onChange?: (newValue: T) => void
  onFilterChange?: (newValue: string) => void
  onToggleButtonClick?: () => void
  components?: Partial<ComboboxComponents<T>>
  popperProps?: Omit<Partial<PopperProps<any>>, 'children'>

  inputId?: string
  labelId?: string
  menuId?: string
  toggleButtonId?: string
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
    onBlur,
    onClick,
    onKeyDown,
    onFilterChange,
    onToggleButtonClick,
    filter = defaultFilter,
    inputId,
    labelId,
    menuId,
    toggleButtonId,
    getItemId,
    open,
    popperProps,
    inputRef: externalInputRef,
    style,
    ...rest
  } = props

  const [itemsLoaded, setItemsLoaded] = useState(false)
  const locale = useLocale()
  const { classes, css } = useStyles(createStyles)

  const isAsync = typeof items === 'function'
  const getItems = useCallback(
    (query: string) => (typeof items === 'function' ? items(query) : filter(items ?? EMPTY_ARRAY, query)),
    [items, filter]
  )
  const { loading: loadingItems, items: loadedItems, loadItems } = useComboboxItemsLoader(
    getItems,
    debounceMilliseconds
  )
  const isLoading = externalLoading || (isAsync && loadingItems)

  // Reload items when changed
  useEffect(() => setItemsLoaded(false), [items])

  const inputRef = useRef<HTMLInputElement>()
  const [menuRef, setMenuRef] = useState<HTMLDivElement>()

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
    getToggleButtonProps,
    getItemProps,
    openMenu,
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
    toggleButtonId,
    getItemId,

    ...(isNil(open) ? {} : { isOpen: open }),
  })

  const { getFormControlProps, getInputProps: getFormControlInputProps } = useFormControl(props)
  const { ref: downshiftInputRef, ...downshiftInputProps } = getInputProps<{
    ref?: MutableRefObject<HTMLInputElement>
  }>({
    onFocus: composeHandlers(onFocus, () => {
      openOnFocus && openMenu()
    }),
    onClick,
    onBlur,
    onKeyDown,
  })
  const { id: internalLabelId, ...downshiftLabelProps } = getLabelProps()
  const downshiftMenuProps = getMenuProps()
  const { ref: toggleButtonRef, ...downshiftToggleButtonProps } = getToggleButtonProps({ onClick: onToggleButtonClick })

  const {
    styles: { popper: popperStyles },
    attributes: { popper: popperAttributes },
  } = usePopper(inputRef.current, menuRef, {
    placement: 'bottom-start',
    ...popperProps,
  })

  const formControlInputProps = getFormControlInputProps()
  const formControlProps = getFormControlProps()
  const invalid = !!formControlProps.error

  const componentsInner = useMemo(() => ({ ...defaultComboboxComponents, ...(components ?? {}) }), [components])

  return (
    <>
      <FormControl {...formControlProps} labelId={internalLabelId} {...downshiftLabelProps}>
        <div className={css(style)}>
          <TextInput
            icon={isOpen ? 'angleUp' : 'angleDown'}
            iconAriaLabel={isOpen ? locale.combobox.hideOptions : locale.combobox.showOptions}
            iconPosition='right'
            inputRef={composeRefs(inputRef, downshiftInputRef, externalInputRef)}
            onClear={composeHandlers(reset, onClear)}
            invalid={invalid}
            iconProps={downshiftToggleButtonProps}
            iconRef={toggleButtonRef}
            {...formControlInputProps}
            {...downshiftInputProps}
            {...rest}
          />
        </div>
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
            tabIndex={-1}
          />
        )}
      </div>
    </>
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
    case useCombobox.stateChangeTypes.InputClick:
      return {
        ...changes,
        isOpen: state.isOpen,
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
