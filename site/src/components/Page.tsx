import { Text, Theme, useStyles } from 'bold-ui'
import React from 'react'

import pages from '../pages'

import { ErrorBoundary } from './ErrorBoundary'
import { PageContainer } from './PageContainer'

export function Page(props: any) {
  const { children } = props
  const { classes } = useStyles(createStyles)

  const parent =
    typeof location !== 'undefined' &&
    pages.find(page =>
      page.children ? !!page.children.map(c => c.href).find(c => location.pathname.indexOf(c) >= 0) : false
    )

  return (
    <div className={classes.wrapper}>
      <PageContainer>
        <main>
          <ErrorBoundary>
            {parent && (
              <Text id='page-parent-title' fontWeight='bold'>
                {parent.title}
              </Text>
            )}
            {children}
          </ErrorBoundary>
        </main>
      </PageContainer>
    </div>
  )
}

export const createStyles = (theme: Theme) => ({
  wrapper: {
    background: theme.pallete.surface.main,
    flex: 1,
    padding: `2rem 3rem`,

    [theme.breakpoints.down('md')]: {
      padding: `2rem 2rem`,
    },
  },
})
