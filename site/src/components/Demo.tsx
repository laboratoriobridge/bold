import { Theme, useStyles } from 'bold-ui'
import { gray } from 'bold-ui/styles/colors'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-typescript'
import React, { CSSProperties } from 'react'

import demos from '../demos'

export interface DemoProps {
  src: string
}

export function Demo(props: DemoProps) {
  const { src } = props
  const { classes } = useStyles(createStyles)
  const demo = demos[`./${src}.demo.tsx`]

  if (!demo) {
    throw new Error(`Demo file ${src}.demo.tsx not found.`)
  }

  const { Component, source } = demo

  const Source = Prism.highlight(source, Prism.languages.tsx, 'tsx')

  return (
    <div className={classes.wrapper}>
      <div className={classes.component}>
        <Component />
      </div>
      <pre className='language-tsx'>
        <code className='language-tsx' dangerouslySetInnerHTML={{ __html: Source }} />
      </pre>
    </div>
  )
}

const createStyles = (theme: Theme) => ({
  wrapper: {
    border: `1px solid ${theme.pallete.divider}`,
    borderRadius: 4,
    marginBottom: '2rem',

    'pre[class*=language-]': {
      fontSize: '15px',
      margin: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderTop: `1px solid ${theme.pallete.divider}`,
      background: `${gray.c10}`,
    },

    'code[class*=language-]': {
      lineHeight: '1.25',
    },
  } as CSSProperties,
  component: {
    padding: '1.5rem',
  } as CSSProperties,
})
