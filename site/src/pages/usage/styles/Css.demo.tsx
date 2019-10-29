import { useStyles } from 'bold-ui'
import React from 'react'

function CssDemo() {
  const { css, theme } = useStyles()

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
      Hello
    </span>
  )
}

export default CssDemo
