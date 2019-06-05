import { CSSProperties, useEffect, useState } from 'react'

import { darkTheme, Heading, Link as BoldLink, Text, Theme, useStyles } from '../../../lib'

export function Paragraph(props: any) {
  const { classes } = useStyles(createStyles)
  return <Text component='p' style={classes.paragraph} {...props} />
}

export function createHeading(level: number) {
  return (props: any) => {
    const { classes } = useStyles(createStyles)
    return <Heading level={level} style={classes.heading} {...props} />
  }
}

export function Link(props: any) {
  const { classes } = useStyles(createStyles)
  return <BoldLink style={classes.link} {...props} />
}

export function Image(props: any) {
  const { theme, classes } = useStyles(createStyles)

  const [currentSource, setCurrentSource] = useState(props.src)
  useEffect(() => {
    const [, path, filename] = /(.*)\/(.*\..*)$/.exec(props.src)
    const darkSource = `${path}/dark-${filename}`
    setCurrentSource(theme === darkTheme ? darkSource : props.src)
  }, [theme, props])

  const handleError = () => {
    setCurrentSource(props.src)
  }

  return <img {...props} src={currentSource} onError={handleError} className={classes.image} />
}

export function UnorderedList(props: any) {
  const { classes } = useStyles(createStyles)
  return <ul className={classes.list} {...props} />
}

export function OrderedList(props: any) {
  const { classes } = useStyles(createStyles)
  return <ol className={classes.list} {...props} />
}

export function Blockquote(props: any) {
  const { classes } = useStyles(createStyles)
  return <blockquote className={classes.blockquote} {...props} />
}

export function Table(props: any) {
  const { classes } = useStyles(createStyles)
  return <table className={classes.table} {...props} />
}

export function Pre(props: any) {
  const { classes } = useStyles(createStyles)
  return <pre className={classes.pre} {...props} />
}

export function Code(props: any) {
  const { classes } = useStyles(createStyles)
  return <code className={classes.code} {...props} />
}

const createStyles = (theme: Theme) => ({
  paragraph: {
    fontSize: '1rem',
    maxWidth: 800,
    marginBottom: '2rem',
  } as CSSProperties,
  link: {
    fontSize: '1rem',
  } as CSSProperties,
  heading: {
    marginBottom: '2rem',
  } as CSSProperties,
  list: {
    fontSize: '1rem',
    maxWidth: 800,
    margin: '0 0 2rem 0',
  } as CSSProperties,
  image: {
    maxWidth: 960,
    marginBottom: '2rem',
  } as CSSProperties,
  blockquote: {
    position: 'relative',
    p: {
      color: theme.pallete.primary.main,
      fontStyle: 'italic',
      fontSize: '1.25rem',
    },
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
  } as CSSProperties,
  table: {
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
  } as CSSProperties,
  code: {
    '&:not(.hljs)': {
      padding: '0.125rem 0.25rem',
      borderRadius: 3,
      background: theme.pallete.surface.background,
    },
  } as CSSProperties,
  pre: {
    marginBottom: '2rem',
    code: {
      fontSize: theme.typography.sizes.text,
      borderRadius: 4,
      padding: '0.5rem 1rem',
    },
  } as CSSProperties,
})
