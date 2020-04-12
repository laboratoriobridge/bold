import React from 'react'

import { useLocale } from '../../../i18n'
import { ExternalStyles, focusBoxShadow, Theme, useStyles, useTheme } from '../../../styles'
import { Omit } from '../../../util'
import { Spinner } from '../../Spinner'

export interface SelectMenuItemProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'style'> {
  style?: ExternalStyles
  selected?: boolean
}

export function SelectMenuItem(props: SelectMenuItemProps) {
  const { style, selected, onKeyDown, ...rest } = props
  const { classes, css } = useStyles(createStyles)

  return (
    <li
      className={css(classes.item, selected && classes.selected, style)}
      aria-selected={selected ? 'true' : 'false'}
      {...rest}
    />
  )
}

export function SelectHelperMenuItem(props: SelectMenuItemProps) {
  const theme = useTheme()

  return (
    <SelectMenuItem
      style={{
        background: theme.pallete.surface.background,
        paddingTop: '0.25rem',
        paddingBottom: '0.25rem',
        cursor: 'initial',
      }}
      {...props}
    />
  )
}

export function SelectLoadingItem(props: SelectMenuItemProps) {
  const theme = useTheme()
  const locale = useLocale()

  return (
    <SelectHelperMenuItem {...props}>
      {locale.select.loadingItem}
      <Spinner style={{ color: theme.pallete.primary.main, float: 'right' }} />
    </SelectHelperMenuItem>
  )
}

export function SelectEmptyItem(props: SelectMenuItemProps) {
  const locale = useLocale()

  return <SelectHelperMenuItem {...props}>{locale.select.emptyItem}</SelectHelperMenuItem>
}

export function SelectCreateItem(props: SelectMenuItemProps) {
  const locale = useLocale()

  return <SelectHelperMenuItem {...props}>{locale.select.createItem}</SelectHelperMenuItem>
}

export const createStyles = (theme: Theme) => ({
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
    // borderRadius: 3,
    // boxShadow: focusBoxShadow(theme, 'primary', 'inset'),
  },
})
