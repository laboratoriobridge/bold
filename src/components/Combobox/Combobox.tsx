import { useCombobox, UseComboboxState, UseComboboxStateChangeOptions } from 'downshift'
import matchSorter from 'match-sorter'
import React, { CSSProperties, useRef, useState } from 'react'
import { usePopper } from 'react-popper'
import { useLocale } from '../../i18n'
import { Theme, useStyles } from '../../styles'
import { composeHandlers, composeRefs } from '../../util/react'
import { FormControl } from '../FormControl'
import { useFormControl, UseFormControlProps } from '../../hooks/useFormControl'
import { TextInput, TextInputProps } from '../TextField'
import { ComboboxComponents, defaultComboboxComponents } from './ComboboxMenuComponents'

export interface ComboboxProps<T = string> extends Omit<TextInputProps, 'value' | 'onChange'>, UseFormControlProps {
  value?: T
  items: T[]
  itemToString(item: T): string
  createNewItem?(inputValue: string): T
  openOnFocus: boolean
  loading: boolean
  menuMinWidth?: number
  filter?(items: T[], filter: string): T[]
  onChange?: (newValue: T) => void
  onFilterChange?: (newValue: string) => void
  components?: Partial<ComboboxComponents<T>>
}

export function Combobox<T = string>(props: ComboboxProps<T>) {
  const {
    value,
    items,
    loading,
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
    ...rest
  } = props

  const locale = useLocale()
  const { classes } = useStyles(createStyles)

  const [currentFilter, setCurrentFilter] = useState('')
  const visibleItems = filter(items, currentFilter)

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
    items: visibleItems,
    stateReducer: comboboxStateReducer(createNewItem),
    itemToString,
    onInputValueChange: ({ inputValue }) => {
      setCurrentFilter(inputValue)
      onFilterChange?.(inputValue)
    },
    onSelectedItemChange: ({ selectedItem }) => {
      closeMenu()
      onChange?.(selectedItem)
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

  const { AppendItem, CreateItem, EmptyItem, Item, LoadingItem, PrependItem } = {
    ...defaultComboboxComponents,
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
      </FormControl>

      {/*By the ARIA definition, the menu element should always be in the DOM*/}
      <div aria-busy={loading} {...downshiftMenuProps}>
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
              {loading && <LoadingItem />}
              {!loading && createNewItem && !visibleItems?.length && <CreateItem />}
              {!loading && !createNewItem && !visibleItems?.length && <EmptyItem />}
              {visibleItems.map((item, index) => (
                <Item
                  key={`${item}${index}`}
                  item={item}
                  index={index}
                  selected={highlightedIndex === index}
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

Combobox.defaultProps = {
  openOnFocus: true,
  loading: false,
} as Partial<ComboboxProps>

const comboboxStateReducer = <T,>(createNewItem: (inputValue: string) => T) => (
  state: UseComboboxState<T>,
  actionAndChanges: UseComboboxStateChangeOptions<T>
): UseComboboxState<T> => {
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
