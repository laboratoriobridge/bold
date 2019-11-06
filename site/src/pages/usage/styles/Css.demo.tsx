import { useStyles } from 'bold-ui'
import { useIntl } from 'gatsby-plugin-intl'
import React from 'react'

function CssDemo() {
  const { css, theme } = useStyles()
  const intl = useIntl()

  return (
    <span
      className={css({
        background: theme.pallete.primary.main,
        borderRadius: 6,
        padding: '0.25rem 1rem',
        color: theme.pallete.gray.c100,
        fontWeight: 'bold',
      })}
    >
      {intl.formatMessage({ id: 'hello' })}
    </span>
  )
}

export default CssDemo
