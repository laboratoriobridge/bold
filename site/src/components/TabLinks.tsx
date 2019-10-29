import { TabItem, Tabs, Theme, useStyles } from 'bold-ui'
import { Link as GatsbyLink } from 'gatsby'
import React, { CSSProperties } from 'react'

export interface TabLinksProps {
  items: Array<{
    title: string
    href: string
  }>
}

export const TabLinks = (props: TabLinksProps) => {
  const { items } = props
  const { classes } = useStyles(createStyles)

  const isActive = (item: TabLinksProps['items'][0]) =>
    typeof location !== 'undefined' && location.pathname === item.href

  return (
    <div className={classes.tabs}>
      <Tabs>
        {items.map(item => (
          <TabItem key={item.href} component={GatsbyLink} to={item.href} style={classes.item} active={isActive(item)}>
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
    borderBottom: `1px solid ${theme.pallete.divider}`,
  } as CSSProperties,
  item: {
    'a:focus': {
      boxShadow: 'none !important',
    },
  } as CSSProperties,
})
