import hljs from 'highlight.js'
import React, { CSSProperties } from 'react'

import { Theme, useStyles } from '../../lib'
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

  const Source = hljs.highlight('jsx', source.replace(/from '(\.\.\/)+lib'/g, `from 'bold-ui'`)).value

  return (
    <div className={classes.wrapper}>
      <div className={classes.component}>
        <Component />
      </div>
      <pre>
        <code className='hljs language-jsx' dangerouslySetInnerHTML={{ __html: Source }} />
      </pre>
    </div>
  )
}

const createStyles = (theme: Theme) => ({
  wrapper: {
    border: `1px solid ${theme.pallete.divider}`,
    borderRadius: 4,
    marginBottom: '2rem',

    pre: {
      margin: 0,
      code: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      },
    },
  } as CSSProperties,
  component: {
    padding: '1.5rem',
  } as CSSProperties,
})
