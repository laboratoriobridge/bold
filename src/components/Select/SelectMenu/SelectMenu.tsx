import React, { CSSProperties } from 'react'

import { ExternalStyles, Theme, useStyles } from '../../../styles'
import { Omit } from '../../../util'

export interface SelectMenuProps extends Omit<React.HTMLAttributes<HTMLUListElement>, 'style'> {
  menuRef?: React.Ref<HTMLUListElement>
  style?: ExternalStyles
}

export function SelectMenu(props: SelectMenuProps) {
  const { style, menuRef, ...rest } = props
  const { classes, css } = useStyles(createStyles)

  return <ul className={css(classes.list, style)} ref={menuRef} {...rest} />
}

export const createStyles = (theme: Theme) => ({
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    border: `1px solid ${theme.pallete.divider}`,
    borderRadius: theme.radius.popper,
    backgroundColor: theme.pallete.surface.main,
    boxShadow: theme.shadows.outer['40'],
    maxHeight: '20rem',
    overflowY: 'auto',
    overflowX: 'hidden',
    width: '100%',
    zIndex: theme.zIndex.dropdown,
  } as CSSProperties,
})
