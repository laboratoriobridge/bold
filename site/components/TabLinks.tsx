import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { CSSProperties } from 'react'

import { TabItem, Tabs, Theme, useStyles } from '../../lib'

export interface TabLinksProps {
  items: Array<{
    title: string
    href: string
  }>
}

export const TabLinks = (props: TabLinksProps) => {
  const { items } = props
  const { classes } = useStyles(createStyles)
  const router = useRouter()

  const isActive = (item: TabLinksProps['items'][0]) => router.pathname === item.href

  return (
    <div className={classes.tabs}>
      <Tabs>
        {items.map(item => (
          <NextLink key={item.href} href={item.href}>
            <TabItem component='a' href={item.href} style={classes.item} active={isActive(item)}>
              {item.title}
            </TabItem>
          </NextLink>
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
