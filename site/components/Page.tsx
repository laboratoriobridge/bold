import { Theme, useStyles } from '../../lib'

import { PageContainer } from './PageContainer'

export function Page(props: any) {
  const { children } = props
  const { classes } = useStyles(createStyles)

  return (
    <main className={classes.main}>
      <PageContainer>{children}</PageContainer>
    </main>
  )
}

export const createStyles = (theme: Theme) => ({
  main: {
    background: theme.pallete.surface.main,
    flex: 1,
    padding: `2rem 3rem`,
    display: 'flex',
    flexDirection: 'column',

    // Global overrides (for markdown elements):
    fontSize: '1rem',
    img: {
      maxWidth: 960,
    },
    'p, ul, table': {
      maxWidth: 800,
    },
    p: {
      marginBottom: '2rem',
      lineHeight: 1.5,
    },
    'h1, h2, h3, h4, h5, h6': {
      marginBottom: '2rem',
    },
    ul: {
      margin: '0 0 2rem 0',
    },
    table: {
      borderCollapse: 'collapse',
      width: '100%',
      marginBottom: '2rem',
    },
    'td, th': {
      borderBottom: `1px solid ${theme.pallete.divider}`,
      textAlign: 'left',
      padding: '1rem 0',
      '&:not(:last-child)': {
        paddingRight: '2rem',
      },
    },
    blockquote: {
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
    } as React.CSSProperties,
    code: {
      '&::selection': {
        background: theme.pallete.primary.main,
      },
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
  },
})
