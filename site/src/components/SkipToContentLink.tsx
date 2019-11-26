import { Theme, useStyles } from 'bold-ui'
import { useIntl } from 'gatsby-plugin-intl'
import React, { CSSProperties } from 'react'

export function SkipToContentLink() {
  const { classes } = useStyles(createStyles)
  const intl = useIntl()

  return (
    <a href='#main' className={classes.link}>
      {intl.formatMessage({ id: 'skip-to-content' })}
    </a>
  )
}

const createStyles = (theme: Theme) => ({
  link: {
    ...theme.typography.variant('link'),
    fontSize: '1rem',
    position: 'absolute',
    left: -999999,
    top: -999999,
    zIndex: 100,
    background: theme.pallete.primary.main,
    color: theme.pallete.gray.c100,
    padding: '1rem',

    '&:focus, &:active': {
      top: 0,
      left: 0,
    },
  } as CSSProperties,
})
