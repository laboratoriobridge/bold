import React from 'react'

import { ExternalStyles, Theme, useStyles, useTheme } from '../../../../../styles'
import { Omit } from '../../../../../util'
import { Spinner } from '../../../../Spinner'

export interface SelectMenuItemProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'style'> {
  style?: ExternalStyles
  selected?: boolean
  highlighted?: boolean
}

export function SelectMenuItem(props: SelectMenuItemProps) {
  const { style, selected, highlighted, ...rest } = props
  const { classes, css } = useStyles(createStyles, props)

  return <li className={css(classes.item, style)} {...rest} />
}

export function SelectHelperMenuItem(props: SelectMenuItemProps) {
  const theme = useTheme()

  return <SelectMenuItem style={{ background: theme.pallete.surface.background }} {...props} />
}

export function SelectLoadingItem(props: SelectMenuItemProps) {
  const theme = useTheme()
  return (
    <SelectHelperMenuItem {...props}>
      Carregando...
      <Spinner style={{ color: theme.pallete.primary.main, float: 'right' }} />
    </SelectHelperMenuItem>
  )
}

export function SelectEmptyItem(props: SelectMenuItemProps) {
  return <SelectHelperMenuItem {...props}>Nenhum item encontrado</SelectHelperMenuItem>
}

export const createStyles = (theme: Theme, { highlighted }: SelectMenuItemProps) => ({
  item: {
    borderBottom: `1px solid ${theme.pallete.divider}`,
    cursor: 'pointer',
    padding: '0.325rem 0.5rem',
    transition: '.1s ease',
    background: highlighted && theme.pallete.surface.background,

    '&:last-of-type': {
      borderBottom: 'none',
    },

    '&:hover': {
      background: theme.pallete.surface.background,
    },
  },
})
