import React, { CSSProperties } from 'react'
import { useLocale } from '../../i18n'
import { ExternalStyles, focusBoxShadow, Theme, useStyles } from '../../styles'
import { Spinner } from '../Spinner'
import Times from '../Icon/generated/TimesDefault'
import { HFlow } from '../HFlow'
import { Checkbox } from '../Checkbox'
import { ComboboxProps } from './Combobox'

export interface ComboboxComponents<T> {
  /**
   * Item shown when `creteNewItem` prop is indicated.
   */
  CreateItem: React.ComponentType<ComboboxMenuItemProps>

  /**
   * Item shown when `loading` prop is true.
   */
  LoadingItem: React.ComponentType<ComboboxMenuItemProps>

  /**
   * Item shown when `items` array prop is empty.
   */
  EmptyItem: React.ComponentType<ComboboxMenuItemProps>

  /**
   * Default item component used for each element in `items` prop.
   */
  Item: React.ComponentType<ComboboxItemProps<T>>

  /**
   * A custom item to be included at the beginning of the select list.
   */
  PrependItem: React.ComponentType<ComboboxMenuItemProps>

  /**
   * A custom item to be included at the end of the select list.
   */
  AppendItem: React.ComponentType<ComboboxMenuItemProps>
}

export interface ComboboxMultiselectComponents<T> extends ComboboxComponents<T> {
  /**
   * Component to display selected items in the input
   */
  SelectedItem: React.ComponentType<ComboboxMultiselectSelectedItemProps>
}

export const defaultComboboxComponents: ComboboxComponents<any> = {
  AppendItem: () => null,
  PrependItem: () => null,
  CreateItem: () => <ComboboxCreateItem />,
  LoadingItem: () => <ComboboxLoadingItem />,
  EmptyItem: () => <ComboboxEmptyItem />,
  Item: (props: ComboboxItemProps<any>) => <ComboboxMenuItem {...props} />,
}

export const defaultComboboxMultiselectComponents: ComboboxMultiselectComponents<any> = {
  ...defaultComboboxComponents,
  SelectedItem: (props: ComboboxMultiselectSelectedItemProps) => <ComboboxMultiselectSelectedItem {...props} />,
  Item: (props: ComboboxItemProps<any>) => <ComboboxMultiselectMenuItem {...props} />,
}

export type ComboboxItemProps<T> = ComboboxMenuItemProps &
  ComboboxProps<T> & { item: T; index: number; selected?: boolean }

export interface ComboboxMenuItemProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'style'> {
  style?: ExternalStyles
}

export function ComboboxMenuItem<T>(props: ComboboxItemProps<T>) {
  const { children, item, style, selected, itemToString, items, label, index, ...rest } = props
  const { classes, css } = useStyles(createStyles)

  return (
    <li className={css(classes.item, selected && classes.selected, style)} {...rest}>
      {children ?? itemToString(item)}
    </li>
  )
}

export function ComboboxMultiselectMenuItem<T>(props: ComboboxItemProps<T>) {
  const { children, item, style, selected, itemToString, items, label, index, ...rest } = props
  return (
    <li css={style} {...rest}>
      <HFlow hSpacing={0.5} alignItems='center'>
        <Checkbox style={{ pointerEvents: 'none' }} checked={selected} tabIndex={-1} readOnly />
        {children ?? itemToString(item)}
      </HFlow>
    </li>
  )
}

export interface ComboboxMultiselectSelectedItemProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  style?: ExternalStyles
  disabled?: boolean
  onRemove(e: React.MouseEvent<HTMLSpanElement>): void
}

export function ComboboxMultiselectSelectedItem(props: ComboboxMultiselectSelectedItemProps) {
  const { style, children, onRemove, disabled, ...rest } = props
  const { classes, css } = useStyles(createStyles, props)
  const locale = useLocale()

  return (
    <span className={css(classes.multiItemContainer, style)} {...rest}>
      <span className={disabled ? classes.multiItemTextDisabled : classes.multiItemText}>{children}</span>
      {!disabled && (
        <span className={classes.multiItemButton} onClick={onRemove} title={locale.combobox.removeItem}>
          <Times />
        </span>
      )}
    </span>
  )
}

export function ComboboxLoadingItem(props: ComboboxMenuItemProps) {
  const { style, ...rest } = props

  const { classes, css } = useStyles(createStyles)
  const locale = useLocale()

  return (
    <li className={css(classes.item, classes.loadingItem, style)} {...rest}>
      {locale.combobox.loadingItem}
      <Spinner style={classes.loadingSpinner} />
    </li>
  )
}

export function ComboboxEmptyItem(props: ComboboxMenuItemProps) {
  const { style, ...rest } = props

  const locale = useLocale()
  const { classes, css } = useStyles(createStyles)

  return (
    <li className={css(classes.item, style)} {...rest}>
      {locale.combobox.emptyItem}
    </li>
  )
}

export function ComboboxCreateItem(props: ComboboxMenuItemProps) {
  const { style, ...rest } = props

  const locale = useLocale()
  const { classes, css } = useStyles(createStyles)

  return (
    <li className={css(classes.item, style)} {...rest}>
      {locale.combobox.createItem}
    </li>
  )
}

const createStyles = (theme: Theme) => ({
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

  multiItemContainer: {
    border: `1px solid ${theme.pallete.divider}`,
    borderRadius: theme.radius.button,
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: 'bold',
  } as CSSProperties,

  multiItemText: {
    padding: 'calc(0.125rem - 1px) 0.25rem',
  } as CSSProperties,

  multiItemTextDisabled: {
    padding: 'calc(0.25rem - 1px) 0.25rem',
  } as CSSProperties,

  multiItemButton: {
    background: theme.pallete.surface.background,
    cursor: 'pointer',
    fontSize: '1.25rem',
    display: 'inline-flex',
    alignItems: 'center',
    padding: 'calc(0.125rem - 1px) 0',
    '&:hover': {
      color: theme.pallete.status.danger.main,
    },
    svg: {
      fill: 'currentColor',
    },
  } as CSSProperties,
})
