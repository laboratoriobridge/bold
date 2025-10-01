import React, { CSSProperties } from 'react'

import { Theme, useStyles } from '../../styles'
import { isNil } from '../../util'
import { StepStatus } from './Step'
import { StepperDirection } from './Stepper'
import { useStepperContext } from './useStepperContext'

interface StepConnectorProps {
  status: StepStatus
  direction: StepperDirection
  labelHeight: number
}

export function StepConnector(props: StepConnectorProps) {
  const { status, direction, labelHeight } = props

  const { gap } = useStepperContext()
  const { classes, css } = useStyles(createStyles, status, gap, labelHeight)

  return (
    <span
      data-testid='step-connector'
      className={css(
        classes.baseConnector,
        direction === 'horizontal' ? classes.connectorHorizontal : classes.connectorVertical
      )}
    />
  )
}

const createStyles = (theme: Theme, status: StepStatus, gap: number | undefined, labelHeight: number) => {
  const hasGap = !isNil(gap)
  const borderStyle = status === 'inactive' ? 'dashed' : 'solid'
  const borderColor =
    status === 'incompleted' || status === 'inactive' ? theme.pallete.gray.c80 : theme.pallete.primary.main

  return {
    baseConnector: {
      position: 'absolute',
      transition: 'border-color .4s ease',
    } as CSSProperties,
    connectorHorizontal: {
      width: hasGap ? `calc(100% + ${gap}rem - 1rem)` : 'calc(100% - 1rem)',
      top: 'calc(0.75rem - 1px)',
      left: 'calc(50% + 0.5rem)',
      borderTopWidth: '2px',
      borderTopStyle: borderStyle,
      borderTopColor: borderColor,
    } as CSSProperties,
    connectorVertical: {
      height: hasGap ? `calc(100% + ${gap}rem - 1rem)` : 'calc(100% - 1rem)',
      top: `calc(${labelHeight}px / 2 + 0.5rem)`,
      left: 'calc(0.75rem - 1px)',
      borderRightWidth: '2px',
      borderRightStyle: borderStyle,
      borderRightColor: borderColor,
    } as CSSProperties,
  }
}
