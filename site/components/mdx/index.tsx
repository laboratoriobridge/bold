import { CSSProperties } from 'react'

import { Heading, Link as BoldLink, Text, Theme, useStyles } from '../../../lib'
import { Image as BoldImage } from '../Image'

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
  const { classes } = useStyles(createStyles)
  return <BoldImage className={classes.image} {...props} />
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
    marginBottom: '2rem',
  } as CSSProperties,
  link: {
    fontSize: '1em',
  } as CSSProperties,
  heading: {
    marginBottom: '2rem',
  } as CSSProperties,
  list: {
    fontSize: '1rem',
    margin: '0 0 2rem 0',
    lineHeight: 1.5,
  } as CSSProperties,
  image: {
    maxWidth: '100%',
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
  pre: {
    marginBottom: '2rem',
    overflow: 'auto',
    background: theme.pallete.surface.background,
    lineHeight: 1.5,
  } as CSSProperties,
  code: {
    '&:not(.hljs)': {
      padding: '0.125rem 0.25rem',
      borderRadius: 3,
      background: theme.pallete.surface.background,
    },
  } as CSSProperties,
})
