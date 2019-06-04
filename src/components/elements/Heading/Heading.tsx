import React from 'react'

import { Text, TextProps } from '../Text'

export interface HeadingProps extends TextProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export function Heading(props: HeadingProps) {
  const { level, ...rest } = props

  const heading = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  return <Text component={heading} variant={heading} {...rest} />
}
