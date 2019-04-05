import { Global as EmotionGlobal, Interpolation } from '@emotion/core/'
import React from 'react'

import { useTheme } from '../../hooks'
import { Theme } from '../../theme/createTheme'

export const GlobalCss = EmotionGlobal

export const DefaultGlobalCss = () => {
  const theme = useTheme()

  return <GlobalCss styles={createGlobalStyles(theme)} />
}

export const createGlobalStyles = (theme: Theme): Interpolation => ({
  html: {
    fontSize: theme.typography.sizes.html,
    boxSizing: 'border-box',
  },
  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },
  body: {
    margin: 0,
    color: theme.pallete.text.main,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.text,
    lineHeight: theme.typography.lineHeight,
    overflowY: 'scroll',
  },
  'button, input, optgroup, select, textarea': {
    /* Input elements do not inherit body's font styles */
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.text,
    lineHeight: 'inherit',
  },
  hr: {
    backgroundColor: theme.pallete.divider,
    border: 'none',
    height: 1,
    margin: '1rem 0',
  },
  h1: { margin: 0, fontSize: '1.5rem' },
  h2: { margin: 0, fontSize: '1.25rem' },
  h3: { margin: 0, fontSize: '1rem' },
  h4: { margin: 0, fontSize: '0.875rem' },
  h5: { margin: 0, fontSize: '0.8125rem' },
  h6: { margin: 0, fontSize: '0.75rem' },
  p: {
    margin: '0',
    lineHeight: 1.5,
  },
  a: {
    cursor: 'pointer',
    color: theme.pallete.primary.main,
    textDecoration: 'underline',
    fontWeight: 'bold',
    outline: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  mark: {
    background: theme.pallete.highlight,
  },
})
