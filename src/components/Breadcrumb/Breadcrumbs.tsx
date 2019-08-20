import React, { CSSProperties, Fragment } from 'react'

import { useRovingTabIndex } from '../../hooks/useRovingTabIndex'
import { Theme, useStyles } from '../../styles'
import { Icon } from '../Icon'

export interface BreadcrumbsProps {
  children?: React.ReactNode
}

export function Breadcrumbs(props: BreadcrumbsProps) {
  const { children } = props

  const rootRef = useRovingTabIndex({
    getItems: root => Array.from(root.querySelectorAll('a')),
  })

  const { classes, css } = useStyles(createStyles)

  return (
    <nav ref={rootRef} aria-label='Breadcrumbs'>
      <ol className={classes.list}>
        {React.Children.map(children, (child, idx) => {
          const isLastItem = idx === React.Children.count(children) - 1

          return (
            <Fragment key={idx}>
              <li className={css(classes.item, isLastItem && classes.lastItem)}>{child}</li>

              {!isLastItem && (
                <li role='separator' aria-hidden={true} className={classes.item}>
                  <Icon size={1} icon='angleRight' style={classes.separator} />
                </li>
              )}
            </Fragment>
          )
        })}
      </ol>
    </nav>
  )
}

export const createStyles = (theme: Theme) => ({
  list: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    textDecoration: 'none',
  } as CSSProperties,
  item: {
    display: 'inline-flex',
    alignItems: 'center',
    color: theme.pallete.primary.main,
  } as CSSProperties,
  separator: {
    color: theme.pallete.text.disabled,
    margin: '0 .5rem',
    fontSize: '1rem',
  } as CSSProperties,
  lastItem: {
    color: theme.pallete.text.main,
    pointerEvents: 'none',
  } as CSSProperties,
})
