import { Theme, useStyles } from 'bridge-react/lib'

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
    padding: '2rem 3rem',
  },
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
