import { useCombobox } from 'downshift'
import matchSorter from 'match-sorter'
import React, { CSSProperties, useRef, useState } from 'react'
import { usePopper } from 'react-popper'
import { useLocale } from '../../i18n'
import { focusBoxShadow, Theme, useStyles } from '../../styles'
import { composeHandlers, composeRefs } from '../../util/react'
import { FormControl } from '../FormControl'
import { useFormControl, UseFormControlProps } from '../../hooks/useFormControl'
import { TextInput, TextInputProps } from '../TextField'
import { Spinner } from '../Spinner'

export interface ComboboxProps<T = string> extends Omit<TextInputProps, 'value' | 'onChange'>, UseFormControlProps {
  value?: T
  items: T[]
  itemToString(item: T): string
  openOnFocus: boolean
  loading: boolean
  menuMinWidth?: number
  filter?(items: T[], filter: string): T[]
  onChange?: (newValue: T) => void
  onFilterChange?: (newValue: string) => void
}

export function Combobox<T = string>(props: ComboboxProps<T>) {
  const {
    value,
    items,
    loading,
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
  const { classes, css } = useStyles(createStyles)

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
              {loading && (
                <li className={css(classes.item, classes.loadingItem)}>
                  {locale.select.loadingItem}
                  <Spinner style={classes.loadingSpinner} />
                </li>
              )}
              {visibleItems.map((item, index) => (
                <li
                  className={css(classes.item, highlightedIndex === index && classes.selected)}
                  key={`${item}${index}`}
                  {...getItemProps({ item, index })}
                >
                  {itemToString(item)}
                </li>
              ))}
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

  item: {
    ...theme.typography.variant('main'),
    borderBottom: `1px solid ${theme.pallete.divider}`,
    cursor: 'pointer',
    padding: '0.5rem 0.5rem',
    transition: '.1s ease',

    '&:last-of-type': {
      borderBottom: 'none',
    },

    '&:hover': {
      background: theme.pallete.surface.background,
    },

    '&:focus': {
      outline: 0,
      borderRadius: 3,
      boxShadow: focusBoxShadow(theme, 'primary', 'inset'),
    },
  },

  loadingItem: {
    background: theme.pallete.surface.background,
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    cursor: 'initial',
  },

  loadingSpinner: {
    color: theme.pallete.primary.main,
    float: 'right',
  } as CSSProperties,

  selected: {
    outline: 0,
    background: theme.pallete.surface.background,
  },
})
