import React, { CSSProperties } from 'react'

import { useRovingTabIndex } from '../../hooks/useRovingTabIndex'
import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLUListElement>, 'style'> {
  style?: ExternalStyles
}

export function Tabs(props: TabsProps) {
  const { style, ...rest } = props
  const { classes, css } = useStyles(createStyles)

  const rootRef = useRovingTabIndex({
    getItems: root => Array.from(root.querySelectorAll(`[role="tab"]:not(.disabled)`)),
  })

  return <ul ref={rootRef} className={css(classes.ul, style)} role='tablist' {...rest} />
}

const createStyles = (theme: Theme) => ({
  ul: {
    display: 'flex',
    alignItems: 'flex-end',
    listStyle: 'none',
    padding: '0',
    margin: '0',
    fontSize: theme.typography.sizes.button,
    borderBottom: `1px solid ${theme.pallete.divider}`,
  } as CSSProperties,
})
