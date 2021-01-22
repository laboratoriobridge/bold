import { useCombobox, UseComboboxState, UseComboboxStateChangeOptions } from 'downshift'
import matchSorter from 'match-sorter'
import React, { CSSProperties, useRef, useState } from 'react'
import { usePopper } from 'react-popper'
import { useLocale } from '../../i18n'
import { focusBoxShadow, Theme, useStyles } from '../../styles'
import { composeRefs } from '../../util/react'
import { FormControl, FormControlProps } from '../FormControl'
import { TextInput, TextInputProps } from '../TextField'

export interface ComboboxProps<T = string> extends TextInputProps {
  items: T[]
  label?: FormControlProps['label']
  placeholder?: string
  openOnFocus: boolean
  itemToString(item: T): string
  filter?(items: T[], filter: string): T[]
}

export function Combobox<T = string>(props: ComboboxProps<T>) {
  const {
    items,
    itemToString,
    label,
    openOnFocus,
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
  } = useCombobox({
    items: visibleItems,
    itemToString,
    stateReducer,
    onInputValueChange: ({ inputValue }) => {
      setCurrentFilter(inputValue)
    },
    onSelectedItemChange: () => {
      closeMenu()
    },
  })

  const downshiftComboboxProps = getComboboxProps()
  const { ref: downshiftInputRef, ...downshiftInputProps } = getInputProps({
    onFocus: () => openOnFocus && openMenu(),
  })
  const { id: labelId, ...downshiftLabelProps } = getLabelProps()
  const downshiftMenuProps = getMenuProps()

  const {
    styles: { popper: popperStyles },
    attributes: { popper: popperAttributes },
  } = usePopper(inputRef.current, menuRef, {
    placement: 'bottom-start',
  })

  return (
    <div {...downshiftComboboxProps}>
      <FormControl label={label} labelId={labelId} {...downshiftLabelProps}>
        <TextInput
          icon={isOpen ? 'angleUp' : 'angleDown'}
          iconAriaLabel={isOpen ? locale.combobox.hideOptions : locale.combobox.showOptions}
          iconPosition='right'
          onIconClick={toggleMenu}
          inputRef={composeRefs(inputRef, downshiftInputRef)}
          {...downshiftInputProps}
          {...rest}
        />
      </FormControl>

      {/*By the ARIA definition, the menu element should always be in the DOM*/}
      <div {...downshiftMenuProps}>
        {isOpen && (
          <div
            className={classes.menu}
            style={{ ...popperStyles, width: inputRef.current && inputRef.current.clientWidth }}
            {...popperAttributes}
            ref={setMenuRef}
          >
            <ul className={classes.list}>
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
} as Partial<ComboboxProps>

function stateReducer<T>(
  state: UseComboboxState<T>,
  actionAndChanges: UseComboboxStateChangeOptions<T>
): UseComboboxState<T> {
  const { type, changes } = actionAndChanges

  switch (type) {
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

  selected: {
    outline: 0,
    background: theme.pallete.surface.background,
  },
})
