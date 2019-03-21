import { Interpolation } from 'emotion'
import React from 'react'

import { useStyles } from '../../../../styles'
import { Heading, HeadingProps } from '../Heading/Heading'

export interface HeadingSectionProps {
  title: React.ReactNode
  level: HeadingProps['level']
  color?: HeadingProps['color']
  style?: Interpolation
  children?: React.ReactNode
}

export const HeadingSection = (props: HeadingSectionProps) => {
  const { style, title, children, ...rest } = props
  const { classes, css } = useStyles(createStyles)

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

export const createStyles = () => ({
  section: {},
  title: {
    marginBottom: '1rem',
  },
})
