import React from 'react'

import { Theme, useStyles } from '../../styles'

export interface DropdownDividerProps extends React.HtmlHTMLAttributes<HTMLLIElement> {}

export function DropdownDivider(props: DropdownDividerProps) {
  const { classes } = useStyles(styles)

  return <li className={classes.divider} role='separator' {...props} />
}

DropdownDivider.defaultProps = {} as Partial<DropdownDividerProps>

const styles = (theme: Theme) => ({
  divider: {
    borderBottom: `1px solid ${theme.pallete.divider}`,
    marginBottom: '0.5rem',
  },
})
