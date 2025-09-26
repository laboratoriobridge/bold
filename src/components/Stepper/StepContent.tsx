import React, { ComponentProps, CSSProperties } from 'react'
import { ExternalStyles, useStyles } from '../../styles'
import { useStepperContext } from './useStepperContext'
import { StepperDirection } from './Stepper'

interface StepContentProps extends Omit<ComponentProps<'div'>, 'style'> {
  style?: ExternalStyles
}

export function StepContent(props: StepContentProps) {
  const { children, style, ...rest } = props

  const { direction, gap } = useStepperContext()
  const { classes, css } = useStyles(() => createStyles(direction, gap))

  return (
    <div className={css(classes.content, style)} {...rest}>
      {children}
    </div>
  )
}

const DEFAULT_VERTICAL_PADDING = 1.25 // rem

const createStyles = (direction: StepperDirection, gap: number = 0) => {
  const isVertical = direction === 'vertical'

  return {
    content: {
      width: '100%',
      padding: `${DEFAULT_VERTICAL_PADDING}rem 0.5rem`,
      paddingLeft: isVertical && '2rem',
      paddingBottom: isVertical && getPaddingBottom(gap),
    } as CSSProperties,
  }
}

const getPaddingBottom = (gap: number = 0): CSSProperties['paddingBottom'] => {
  if (gap > DEFAULT_VERTICAL_PADDING) return '0'
  if (gap > 0 && gap <= DEFAULT_VERTICAL_PADDING) return `${DEFAULT_VERTICAL_PADDING - gap}rem`
  return `${DEFAULT_VERTICAL_PADDING}rem`
}
