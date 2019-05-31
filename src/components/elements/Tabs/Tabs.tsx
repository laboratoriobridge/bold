import React, { CSSProperties } from 'react'

import { useRovingTabIndex } from '../../../hooks/useRovingTabIndex'
import { Theme, useStyles } from '../../../styles'

export interface TabsProps extends React.HTMLAttributes<HTMLUListElement> {}

export function Tabs(props: TabsProps) {
  const { ...rest } = props
  const { classes } = useStyles(createStyles)

  const rootRef = useRovingTabIndex({
    getItems: root => Array.from(root.querySelectorAll('[role="tab"]')),
  })

  return <ul ref={rootRef} className={classes.ul} role='tablist' {...rest} />
}

const createStyles = (theme: Theme) => ({
  ul: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    fontSize: theme.typography.sizes.button,
  } as CSSProperties,
})
