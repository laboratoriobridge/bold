import React, { CSSProperties, Ref } from 'react'
import { useLocale } from '../../i18n'
import { ExternalStyles, focusBoxShadow, Theme, useStyles } from '../../styles'
import { Spinner } from '../Spinner'
import Times from '../Icon/generated/TimesDefault'
import { HFlow } from '../HFlow'
import { Checkbox } from '../Checkbox'
import { ComboboxProps } from './Combobox'
import { ComboboxMultiselectProps } from './ComboboxMultiselect'

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
  Item: React.ForwardRefExoticComponent<ComboboxItemProps<T>> | React.ForwardRefRenderFunction<ComboboxItemProps<T>>

  /**
   * A custom item to be included at the beginning of the select list.
   */
  PrependItem: React.ComponentType<ComboboxMenuItemProps>

  /**
   * A custom item to be included at the end of the select list.
   */
  AppendItem: React.ComponentType<ComboboxMenuItemProps>
}

export interface ComboboxMultiselectComponents<T> extends Omit<ComboboxComponents<T>, 'Item'> {
  /**
   * Component to display selected items in the input
   */
  SelectedItem: React.ComponentType<ComboboxMultiselectSelectedItemProps>
  /**
   * Default item component used for each element in `items` prop.
   */
  Item:
    | React.ForwardRefExoticComponent<ComboboxMultiselectItemProps<T>>
    | React.ForwardRefRenderFunction<ComboboxMultiselectItemProps<T>>
}

export interface ComboboxMenuItemProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'style'> {
  style?: ExternalStyles
}

export type ComboboxItemProps<T> = ComboboxMenuItemProps &
  Pick<ComboboxProps<T>, 'itemToString'> & { item: T; index: number; selected?: boolean }

export type ComboboxMultiselectItemProps<T> = ComboboxMenuItemProps &
  Pick<ComboboxMultiselectProps<T>, 'itemToString'> & {
    item: T
    index: number
    selected?: boolean
    highlighted?: boolean
  }

export const ComboboxMenuItem = React.forwardRef((props: ComboboxItemProps<any>, ref: Ref<HTMLLIElement>) => {
  const { children, item, style, selected, itemToString, index, ...rest } = props
  const { classes, css } = useStyles(createStyles)

  return (
    <li ref={ref} className={css(classes.item, selected && classes.selected, style)} {...rest}>
      {children ?? itemToString(item)}
    </li>
  )
})

export const ComboboxMultiselectMenuItem = React.forwardRef(
  (props: ComboboxMultiselectItemProps<any>, ref: Ref<HTMLLIElement>) => {
    const { children, item, style, selected, highlighted, itemToString, index, ...rest } = props
    const { classes, css } = useStyles(createStyles)

    return (
      <li ref={ref} className={css(classes.item, highlighted && classes.selected, style)} {...rest}>
        <HFlow hSpacing={0.5} alignItems='center'>
          <Checkbox style={{ pointerEvents: 'none' }} checked={selected} tabIndex={-1} readOnly />
          {children ?? itemToString(item)}
        </HFlow>
      </li>
    )
  }
)

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

export const defaultComboboxComponents: ComboboxComponents<any> = {
  AppendItem: () => null,
  PrependItem: () => null,
  CreateItem: () => <ComboboxCreateItem />,
  LoadingItem: () => <ComboboxLoadingItem />,
  EmptyItem: () => <ComboboxEmptyItem />,
  Item: ComboboxMenuItem,
}

export const defaultComboboxMultiselectComponents: ComboboxMultiselectComponents<any> = {
  ...defaultComboboxComponents,
  SelectedItem: ComboboxMultiselectSelectedItem,
  Item: ComboboxMultiselectMenuItem,
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
