import { useSelect } from 'downshift'
import matchSorter from 'match-sorter'
import React, {
  ChangeEvent,
  CSSProperties,
  FocusEventHandler,
  KeyboardEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { PopperProps, usePopper } from 'react-popper'
import { useMemo } from 'react'
import { isNil } from 'lodash'
import { Theme, useStyles } from '../../styles'
import { composeHandlers, composeRefs } from '../../util/react'
import { FormControl } from '../FormControl'
import { useFormControl, UseFormControlProps } from '../../hooks/useFormControl'
import { Button, ButtonProps } from '../Button'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { ComboboxComponents, defaultComboboxComponents } from './ComboboxMenuComponents'
import { useComboboxItemsLoader } from './useComboboxItemsLoader'
import { SearchBox } from './SearchBox'
import { ListBox } from './ListBox'

export interface ComboboxInlineProps<T>
  extends Omit<ButtonProps, 'value' | 'onChange' | 'placeholder' | 'onKeyDown' | 'onBlur'>,
    Omit<UseFormControlProps, 'label'> {
  value?: T
  items: T[] | ((query: string) => Promise<T[]>)
  itemToString(item: T): string
  loading: boolean
  open?: boolean
  debounceMilliseconds: number
  menuMinWidth?: number
  filter?(items: T[], filter: string): T[]
  onChange?: (newValue: T) => void
  onKeyDown?: KeyboardEventHandler
  onBlur?: FocusEventHandler
  onFilterChange?: (newValue: string) => void
  components?: Omit<Partial<ComboboxComponents<T>>, 'CreateItem'>
  popperProps?: Omit<Partial<PopperProps<any>>, 'children'>

  menuId?: string
  toggleButtonId?: string
  getItemId?(index: number): string

  defaultButtonText: string
  searchBoxPlaceholder?: string
  showSearchBox?: boolean
}

export function ComboboxInline<T>(props: ComboboxInlineProps<T>) {
  const defaultFilter = useCallback((items, filter) => matchSorter(items, filter, { keys: [props.itemToString] }), [
    props.itemToString,
  ])

  const {
    value,
    defaultButtonText,
    items,
    loading: externalLoading,
    debounceMilliseconds,
    components,
    itemToString,
    menuMinWidth = '12rem',
    onChange,
    onFocus,
    onClick,
    onBlur,
    onKeyDown,
    onFilterChange,
    filter = defaultFilter,
    menuId,
    toggleButtonId,
    getItemId,
    error,
    searchBoxPlaceholder,
    showSearchBox = true,
    open,
    popperProps,
    ...rest
  } = props

  const [itemsLoaded, setItemsLoaded] = useState(false)
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

  const toggleButtonRef = useRef<HTMLButtonElement>()
  const [searchBoxRef, setSearchBoxRef] = useState<HTMLInputElement>()
  const menuRef = useRef<HTMLDivElement>()

  useEffect(() => {
    if (open && !itemsLoaded) {
      loadItems(searchBoxRef?.value)
      setItemsLoaded(true)
    }
  }, [open, itemsLoaded, loadItems, searchBoxRef])

  const {
    selectedItem,
    isOpen,
    highlightedIndex,
    getLabelProps,
    getMenuProps,
    getToggleButtonProps,
    getItemProps,
    closeMenu,
    openMenu,
  } = useSelect<T>({
    selectedItem: value,
    items: loadedItems,

    itemToString,
    onSelectedItemChange: ({ selectedItem }) => {
      closeMenu()
      onChange?.(selectedItem)
    },
    onIsOpenChange: ({ isOpen }) => {
      isOpen && !itemsLoaded && loadItems(null)
      setItemsLoaded(isOpen)
    },

    menuId,
    toggleButtonId,
    getItemId,

    ...(isNil(open) ? {} : { isOpen: open }),
  })
  const onSearchBoxValueChange = useCallback(
    ({ target: { value: inputValue } }: ChangeEvent<HTMLInputElement>) =>
      composeHandlers(loadItems, onFilterChange)(inputValue),
    [loadItems, onFilterChange]
  )

  const { getFormControlProps } = useFormControl(props)
  const formControlProps = getFormControlProps()
  const invalid = !!formControlProps.error
  const downshiftLabelProps = getLabelProps()
  const downshiftMenuProps = getMenuProps({
    tabIndex: -1,
    'aria-invalid': invalid,
    'aria-errormessage': formControlProps.errorId,
  })
  const { ref: downshiftToggleButtonRef, ...downshiftToggleButtonProps } = getToggleButtonProps({
    role: null,
    onClick,
    onFocus,
    onBlur,
    onKeyDown,
  })

  const {
    styles: { popper: popperStyles },
    attributes: { popper: popperAttributes },
  } = usePopper(toggleButtonRef.current, menuRef.current, {
    placement: 'bottom-start',
    ...popperProps,
  })

  const componentsInner = useMemo(
    () => ({
      ...defaultComboboxComponents,
      ...(components ?? {}),
    }),
    [components]
  )

  useEffect(() => {
    if (isOpen && searchBoxRef) {
      searchBoxRef.focus()
      openMenu()
    }
  }, [isOpen, searchBoxRef, openMenu])

  return (
    <>
      <FormControl {...formControlProps}>
        <Button
          innerRef={composeRefs(toggleButtonRef, downshiftToggleButtonRef)}
          skin='ghost'
          kind={invalid ? 'danger' : 'normal'}
          size='small'
          component='div'
          {...downshiftToggleButtonProps}
          {...rest}
        >
          {/*By the ARIA definition, the label element is mandatory*/}
          <Text
            component='label'
            style={selectedItem != null ? { display: 'none' } : { cursor: 'pointer' }}
            {...downshiftLabelProps}
            color={invalid ? 'danger' : 'normal'}
          >
            {defaultButtonText}
          </Text>
          {selectedItem != null && <Text color={invalid ? 'danger' : 'normal'}>{itemToString(selectedItem)}</Text>}
          <Icon style={classes.toggleIcon} icon={isOpen ? 'angleUp' : 'angleDown'} />
        </Button>
      </FormControl>

      {/*By the ARIA definition, the menu element should always be in the DOM*/}
      <div aria-busy={isLoading} {...downshiftMenuProps}>
        {isOpen && (
          <div
            data-testid='menu'
            ref={menuRef}
            className={classes.menu}
            style={{
              ...popperStyles,
              width: toggleButtonRef.current?.clientWidth,
              minWidth: menuMinWidth,
            }}
            {...popperAttributes}
          >
            {showSearchBox && (
              <div className={classes.searchBoxContainer}>
                <SearchBox
                  ref={setSearchBoxRef}
                  placeholder={searchBoxPlaceholder}
                  onChange={onSearchBoxValueChange}
                  onKeyDown={downshiftToggleButtonProps.onKeyDown}
                  onBlur={downshiftToggleButtonProps.onBlur}
                />
              </div>
            )}

            <ListBox<T>
              components={componentsInner}
              getItemProps={getItemProps}
              highlightedIndex={highlightedIndex}
              itemToString={itemToString}
              items={loadedItems}
              loading={isLoading}
              className={classes.listBox}
              tabIndex={-1}
            />
          </div>
        )}
      </div>
    </>
  )
}

export const createStyles = (theme: Theme) => ({
  searchBoxContainer: {
    padding: '0.5rem',
    borderBottom: `1px solid ${theme.pallete.divider}`,
  },

  listBox: {
    overflow: 'auto',
  },

  toggleIcon: {
    marginLeft: '0.5rem',
  },

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
