import React from 'react'

import { useRovingTabIndex } from '../../hooks/useRovingTabIndex'
import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'
import { composeRefs } from '../../util/react'

export interface DropdownMenuProps extends Omit<React.HTMLAttributes<HTMLUListElement>, 'style'> {
  innerRef?: React.Ref<HTMLUListElement>
  style?: ExternalStyles
}

export function DropdownMenu(props: DropdownMenuProps) {
  const { innerRef, style, ...rest } = props
  const { css, classes } = useStyles(styles)

  const rootRef = useRovingTabIndex({
    getItems: (root) => Array.from(root.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])')),
  })

  return <ul ref={composeRefs(innerRef, rootRef)} className={css(classes.root, style)} role='menu' {...rest} />
}

export const styles = (theme: Theme) => ({
  root: {
    listStyle: 'none',
    margin: 0,
    padding: 'calc(0.5rem - 1px) 0',
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
