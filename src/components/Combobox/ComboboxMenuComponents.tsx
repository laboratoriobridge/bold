import React, { CSSProperties } from 'react'
import { useLocale } from '../../i18n'
import { ExternalStyles, focusBoxShadow, Theme, useStyles } from '../../styles'
import { Spinner } from '../Spinner'
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

export const defaultComboboxComponents: ComboboxComponents<any> = {
  AppendItem: () => null,
  PrependItem: () => null,
  CreateItem: () => <ComboboxCreateItem />,
  LoadingItem: () => <ComboboxLoadingItem />,
  EmptyItem: () => <ComboboxEmptyItem />,
  Item: (props: ComboboxItemProps<any>) => <ComboboxMenuItem {...props} />,
}

export type ComboboxItemProps<T> = ComboboxMenuItemProps &
  ComboboxProps<T> & { item: T; index: number; selected?: boolean }

export interface ComboboxMenuItemProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'style'> {
  style?: ExternalStyles
}

export function ComboboxMenuItem<T>(props: ComboboxItemProps<T>) {
  const { children, item, style, selected, itemToString, ...rest } = props
  const { classes, css } = useStyles(createStyles)

  return (
    <li className={css(classes.item, selected && classes.selected, style)} {...rest}>
      {children ?? itemToString(item)}
    </li>
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
})
