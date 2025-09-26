import React, { CSSProperties, ReactNode } from 'react'
import { ExternalStyles, Theme, useStyles } from '../../styles'
import { VFlow } from '../VFlow'
import { Text } from '../Text'
import { StepStatus } from './Step'

interface StepLabelProps {
  status: StepStatus
  title: ReactNode
  subtitle?: ReactNode
  style?: ExternalStyles
}

export function StepLabel(props: StepLabelProps) {
  const { status, title, subtitle, style, ...rest } = props

  const { classes, css } = useStyles((theme) => createStyles(theme, status))

  return (
    <span className={css(style)} {...rest}>
      <VFlow vSpacing={0}>
        <Text style={classes.label}>{title}</Text>
        {subtitle && <Text>{subtitle}</Text>}
      </VFlow>
    </span>
  )
}

const createStyles = (theme: Theme, status: StepStatus) => ({
  label: {
    color: getLabelColor(status, theme),
    fontWeight: 'bold',
    transition: 'all .4s ease',
  } as CSSProperties,
})

const getLabelColor = (status: StepStatus, theme: Theme): CSSProperties['color'] => {
  if (status === 'active') return theme.pallete.primary.main
  if (status === 'inactive') return theme.pallete.text.disabled
  return theme.pallete.text.main
}
