import NextLink from 'next/link'
import { RouterProps, withRouter } from 'next/router'
import { CSSProperties } from 'react'

import { TabItem, Tabs, Theme, useStyles } from '../../lib'

export interface TabLinksProps {
  router: RouterProps
  items: Array<{
    title: string
    href: string
  }>
}

export const TabLinks = withRouter((props: TabLinksProps) => {
  const { items, router } = props
  const { classes } = useStyles(createStyles)

  const isActive = (item: TabLinksProps['items'][0]) => router.pathname === item.href

  return (
    <Tabs style={classes.tabs}>
      {items.map(item => (
        <NextLink key={item.href} href={item.href}>
          <TabItem component='a' href={item.href} style={classes.item} active={isActive(item)}>
            {item.title}
          </TabItem>
        </NextLink>
      ))}
    </Tabs>
  )
})

const createStyles = (theme: Theme) => ({
  tabs: {
    marginTop: '-0.75rem !important',
    borderBottom: `1px solid ${theme.pallete.divider}`,
  } as CSSProperties,
  item: {
    'a:focus': {
      boxShadow: 'none !important',
    },
  } as CSSProperties,
})
