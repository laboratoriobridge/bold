import { Theme, useStyles } from 'bridge-react/lib'

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

export const createStyles = (theme: Theme) => ({
  main: {
    background: theme.pallete.surface.main,
    flex: 1,
    padding: `calc(2rem + ${APP_HEADER_HEIGHT}px) 3rem 2rem 3rem`,
    marginLeft: SIDE_NAV_WIDTH,
    display: 'flex',
    flexDirection: 'column',
    minHeight: `100vh`,
  } as React.CSSProperties,
  content: {
    maxWidth: 688,
    fontSize: '1rem',

    p: {
      marginBottom: '2rem',
      lineHeight: 1.5,
    },

    'h1, h2, h3, h4, h5, h6': {
      marginBottom: '2rem',
    },

    img: {
      maxWidth: 810,
    },
  },
})
