import { darkTheme, Text, Theme, useStyles } from '../../lib'
import { createStyles as createLinkStyles } from '../../lib/components/elements/Link/Link'
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
        <main className={classes.main}>
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
  },
  main: {
    // Global overrides (for markdown elements):
    '& > p > img': {
      maxWidth: 960,
      marginBottom: '2rem',
    },

    '& > p a, & > ul a': {
      ...theme.typography.variant('link'),
      ...createLinkStyles(theme).link,
      fontSize: '1rem',
    },

    '& > p': {
      fontSize: '1rem',
      maxWidth: 800,
      lineHeight: 1.5,
      marginBottom: '2rem',
    },

    '& > h1, & > h2, & > h3, & > h4, & > h5, & > h6': {
      marginBottom: '2rem',
    },

    '& > ul': {
      fontSize: '1rem',
      maxWidth: 800,
      margin: '0 0 2rem 0',
    },

    '& > table': {
      fontSize: '1rem',
      maxWidth: 800,
      borderCollapse: 'collapse',
      width: '100%',
      marginBottom: '2rem',

      'td, th': {
        borderBottom: `1px solid ${theme.pallete.divider}`,
        textAlign: 'left',
        padding: '1rem 0',
        '&:not(:last-child)': {
          paddingRight: '2rem',
        },
      },
    },

    '& > blockquote': {
      position: 'relative',
      color: theme.pallete.primary.main,
      fontStyle: 'italic',
      fontSize: '1.25rem',
      marginLeft: '7rem',
      '&::before': {
        content: '""',
        position: 'absolute',
        left: '-6rem',
        top: '0.75rem',
        width: 78,
        height: 2,
        borderTop: `2px solid ${theme.pallete.divider}`,
      },
    },

    code: {
      '&:not(.hljs)': {
        padding: '0.125rem 0.25rem',
        borderRadius: 3,
        background: theme.pallete.surface.background,
      },
    },

    pre: {
      marginBottom: '2rem',
      code: {
        fontSize: theme.typography.sizes.text,
        borderRadius: 4,
        padding: '0.5rem 1rem',
      },
    },
  } as React.CSSProperties,
})
