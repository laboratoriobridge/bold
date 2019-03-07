import { Theme, useStyles } from '../../lib'

import { APP_HEADER_HEIGHT } from './AppHeader'
import { SIDE_NAV_WIDTH } from './SideNav'

export const PageContent = (props: any) => {
  const { children } = props
  const { classes } = useStyles(createStyles)
  return (
    <main className={classes.main}>
      <div className={classes.content}>{children}</div>
    </main>
  )
}

const BIG_WIDTH = 960

export const createStyles = (theme: Theme) => ({
  main: {
    background: theme.pallete.surface.main,
    flex: 1,
    padding: `calc(2rem + ${APP_HEADER_HEIGHT}px) 3rem 2rem 3rem`,
    marginLeft: SIDE_NAV_WIDTH,
    display: 'flex',
    flexDirection: 'column',
    minHeight: `100vh`,

    // Hacks for change global css when theme is changed
    color: theme.pallete.text.main,
  } as React.CSSProperties,
  content: {
    maxWidth: 800,
    fontSize: '1rem',

    p: {
      marginBottom: '2rem',
      lineHeight: 1.5,
    },

    'h1, h2, h3, h4, h5, h6': {
      marginBottom: '2rem',
    },

    img: {
      maxWidth: BIG_WIDTH,
    },

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
      width: BIG_WIDTH,
      marginBottom: '2rem',

      code: {
        fontSize: theme.typography.sizes.text,
        borderRadius: 4,
        padding: '0.5rem 1rem',
      },
    },
  },
})
