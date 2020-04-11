import { TabItem, Tabs, Theme, useStyles } from 'bold-ui'
import { useIntl } from 'gatsby-plugin-intl'
import React, { CSSProperties } from 'react'

import { LocaleLink } from './LocaleLink'

export interface TabLinksProps {
  items: Array<{
    title: string
    href: string
  }>
}

export const TabLinks = (props: TabLinksProps) => {
  const { items } = props
  const { classes } = useStyles(createStyles)

  const intl = useIntl()
  const isActive = (item: TabLinksProps['items'][0]) =>
    typeof location !== 'undefined' &&
    (location.pathname === item.href || location.pathname === `/${intl.locale}${item.href}`)

  return (
    <div className={classes.tabs}>
      <Tabs>
        {items.map(item => (
          <TabItem key={item.href} component={LocaleLink} to={item.href} style={classes.item} active={isActive(item)}>
            {item.title}
          </TabItem>
        ))}
      </Tabs>
    </div>
  )
}

const createStyles = (theme: Theme) => ({
  tabs: {
    marginTop: '-0.75rem !important',
    marginBottom: '2rem',
  } as CSSProperties,
  item: {
    'a:focus': {
      boxShadow: 'none !important',
    },
  } as CSSProperties,
})
