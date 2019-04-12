import React from 'react'

import { useRovingTabIndex } from '../../../hooks/useRovingTabIndex'
import { Theme, useStyles } from '../../../styles'
import { composeRefs } from '../../../util/react'

export interface DropdownMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  innerRef?: React.RefObject<HTMLUListElement>
}

export function DropdownMenu(props: DropdownMenuProps) {
  const { innerRef, ...rest } = props
  const { classes } = useStyles(styles)

  const rootRef = useRovingTabIndex({
    getItems: root => Array.from(root.querySelectorAll('[role="menuitem"]')),
  })

  return <ul ref={composeRefs(innerRef, rootRef)} className={classes.root} role='menu' {...rest} />
}

export const styles = (theme: Theme) => ({
  root: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
    border: `1px solid ${theme.pallete.divider}`,
    borderRadius: theme.radius.popper,
    display: 'inline-block',
    width: 'auto',
    minWidth: '150px',
    background: theme.pallete.surface.main,
  } as React.CSSProperties,
})
