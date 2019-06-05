import React from 'react'

import { ExternalStyles, useStyles } from '../../styles'
import { Heading, HeadingProps } from '../Heading'

export interface HeadingSectionProps {
  title: React.ReactNode
  level: HeadingProps['level']
  vSpace?: number
  color?: HeadingProps['color']
  style?: ExternalStyles
  children?: React.ReactNode
}

export function HeadingSection(props: HeadingSectionProps) {
  const { style, title, children, vSpace, ...rest } = props
  const { classes, css } = useStyles(createStyles(vSpace))

  return (
    <div className={css(classes.section, style)}>
      <Heading style={classes.title} {...rest}>
        {title}
      </Heading>

      {children}
    </div>
  )
}

HeadingSection.defaultProps = {} as Partial<HeadingSectionProps>

export const createStyles = (vSpacing: number) => () => ({
  section: {},
  title: {
    marginBottom: vSpacing ? vSpacing : '1rem',
  },
})
