import React, { CSSProperties, ElementType, HTMLAttributes, ReactNode, useEffect, useState } from 'react'

import { ExternalStyles, useStyles } from '../../styles'
import { getComponents } from '../../util/overrides'

import { VFlow } from '../VFlow'
import { useHeight } from '../../hooks/useMeasure'
import { useStepperContext } from './useStepperContext'
import { StepperDirection } from './Stepper'
import { StepConnector } from './StepConnector'
import { StepContent } from './StepContent'
import { StepLabel } from './StepLabel'
import { StepIcon } from './StepIcon'

export type StepStatus = 'active' | 'completed' | 'incompleted' | 'inactive'

export interface StepProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style' | 'title'> {
  status?: StepStatus
  title: ReactNode
  subtitle?: ReactNode
  style?: ExternalStyles
  overrides?: {
    Root?: ElementType
    Icon?: ElementType
  }
}

export function Step(props: StepProps) {
  const { status = 'incompleted', title, subtitle, overrides, children, style, ...rest } = props
  const { Root } = getComponents(overrides, defaultComponents)

  const { direction, getNextStepStatus, incrementStep } = useStepperContext()
  const { classes, css } = useStyles(() => createStyles(direction))

  const [labelRef, labelHeight] = useHeight()
  const [stepIndex, setStepIndex] = useState<number | null>(null)

  const nextStepStatus = getNextStepStatus(stepIndex)
  const isLastStep = nextStepStatus === undefined

  useEffect(() => {
    const index = incrementStep()
    setStepIndex(index)
  }, [incrementStep])

  if (stepIndex === null) {
    return null
  }

  return (
    <Root className={css(classes.step, style)} {...rest}>
      {!isLastStep && <StepConnector status={nextStepStatus} direction={direction} labelHeight={labelHeight} />}

      <VFlow vSpacing={0}>
        <div className={classes.labelContainer} ref={labelRef}>
          <StepIcon status={status} icon={overrides?.Icon} />
          <StepLabel status={status} title={title} subtitle={subtitle} />
        </div>

        {children && <StepContent>{children}</StepContent>}
      </VFlow>
    </Root>
  )
}

export const defaultComponents: StepProps['overrides'] = {
  Root: 'span',
  Icon: null,
}

const createStyles = (direction: StepperDirection) => {
  const isHorizontal = direction === 'horizontal'

  return {
    step: {
      position: 'relative',
      textAlign: isHorizontal ? 'center' : 'start',
    } as CSSProperties,
    labelContainer: {
      display: 'flex',
      flexDirection: isHorizontal ? 'column' : 'row',
      alignItems: 'center',
      gap: isHorizontal ? '0.75rem' : '0.5rem',
    } as CSSProperties,
  }
}
