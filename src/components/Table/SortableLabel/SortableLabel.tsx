import React from 'react'

import { Theme, useStyles } from '../../../styles'

export type SortDirection = 'ASC' | 'DESC' | ''

export interface SortableLabelProps {
  direction: SortDirection
  children?: React.ReactNode
  onChange(sortDirection: SortDirection, shiftKey?: boolean): any
}

export function SortableLabel(props: SortableLabelProps) {
  const { direction, onChange, children } = props
  const { classes } = useStyles(createStyles, props)

  const handleClick = (event: React.MouseEvent<any>) => {
    onChange(toggleDirection(direction), event.shiftKey)
  }

  return (
    <span className={classes.wrapper} onClick={handleClick}>
      {children}
      <Sort
        className={classes.icon}
        classes={{
          up: classes.asc,
          down: classes.desc,
        }}
      />
    </span>
  )
}

export const createStyles = (theme: Theme, { direction }: SortableLabelProps) => ({
  wrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  icon: {
    marginLeft: '0.25rem',
    fontSize: '1rem',
    fill: theme.pallete.text.disabled,
  },
  asc: {
    fill: direction === 'ASC' && theme.pallete.primary.main,
  },
  desc: {
    fill: direction === 'DESC' && theme.pallete.primary.main,
  },
})

export const toggleDirection = (dir: SortDirection): 'ASC' | 'DESC' => {
  return (dir === 'ASC' && 'DESC') || (dir === 'DESC' && 'ASC') || 'ASC'
}

const Sort = (props: React.SVGAttributes<SVGElement> & { classes: { up: string; down: string } }) => {
  const { classes, ...rest } = props
  return (
    <svg viewBox='0 0 24 24' width='1em' height='1em' {...rest}>
      <polygon points='12 4.94 16.95 9.89 18.36 8.47 12 2.11 5.64 8.47 7.05 9.89 12 4.94' className={classes.up} />
      <polygon
        points='12 19.06 7.05 14.11 5.64 15.53 12 21.89 18.36 15.53 16.95 14.11 12 19.06'
        className={classes.down}
      />
    </svg>
  )
}
