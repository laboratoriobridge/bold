import React, { CSSProperties, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Theme, useStyles } from '../../../styles'
import { Icon } from '../Icon/Icon'

import { BreadcrumbContext } from './BreadcrumbContext'
import { BreadcrumbEntry } from './BreadcrumbStore'

export interface BreadcrumbNavProps {}

export function BreadcrumbNav(props: BreadcrumbNavProps) {
  const store = useContext(BreadcrumbContext)
  const [entries, setEntries] = useState<BreadcrumbEntry[]>(store.getEntries())

  useEffect(() => {
    return store.addChangeListener(setEntries)
  }, [store])

  const { classes } = useStyles(createStyles)

  return (
    <nav aria-label='Breadcrumbs'>
      <ol className={classes.list}>
        {entries.map(({ title, to }, idx) => (
          <li key={idx} className={classes.item}>
            <Link className={classes.link} to={to}>
              {title}
            </Link>
            {idx !== entries.length - 1 && <Icon style={classes.separator} size={1} icon='angleRight' />}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export const createStyles = (theme: Theme) => ({
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  } as CSSProperties,
  item: {
    display: 'inline-flex',
    alignItems: 'center',

    '&:last-of-type a': {
      pointerEvents: 'none',
      color: theme.pallete.primary.main,
    },
  } as CSSProperties,
  separator: {
    color: theme.pallete.text.disabled,
    margin: '0 .5rem',
    fontSize: '1rem',
  } as CSSProperties,
  link: {
    color: theme.pallete.text.main,
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'all .2s',
    display: 'inline-block',

    '&:hover': {
      color: theme.pallete.primary.main,
    },
  } as CSSProperties,
})
