import { Text, Theme, useStyles } from '../../lib'
import pages from '../pages'

import { PageContainer } from './PageContainer'

export function Page(props: any) {
  const { children } = props
  const { classes } = useStyles(createStyles)

  const { route } = props.router
  const parent = pages.find(page =>
    page.children ? !!page.children.map(c => c.href).find(c => route.indexOf(c) >= 0) : false
  )

  return (
    <div className={classes.wrapper}>
      <PageContainer>
        <main>
          {parent && (
            <Text id='page-parent-title' fontWeight='bold'>
              {parent.title}
            </Text>
          )}
          {children}
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
