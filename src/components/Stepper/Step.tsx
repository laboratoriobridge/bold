import React, { CSSProperties, ElementType, ReactNode, useEffect, useRef } from 'react'

import { ExternalStyles, focusBoxShadow, Theme, useStyles } from '../../styles'
import { isNil, Omit } from '../../util'
import { getComponents } from '../../util/overrides'
import CheckIcon from '../Icon/generated/CheckDefault'
import MinusCircleFilled from '../Icon/generated/MinusCircleFilled'
import { VFlow } from '../VFlow'
import { useHeight } from '../../hooks/useMeasure'
import { useStepperContext } from './useStepperContext'
import { StepperDirection } from './Stepper'
import { StepConnector } from './StepConnector'
import { StepContent } from './StepContent'
import { StepLabel } from './StepLabel'

export type StepStatus = 'active' | 'completed' | 'incompleted' | 'inactive'

export interface StepProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style' | 'title'> {
  status?: StepStatus
  title: ReactNode
  subtitle?: ReactNode
  style?: ExternalStyles
  overrides?: {
    Root?: React.ElementType
    IconContainer?: React.ElementType
    Icon?: React.ElementType
  }
}

export function Step(props: StepProps) {
  const { status = 'incompleted', title, subtitle, overrides, children, style, ...rest } = props
  const { Root, Icon, IconContainer } = getComponents(overrides, defaultComponents)

  const { direction, getNextStepStatus, registerStep } = useStepperContext()
  const { classes, css } = useStyles((theme) => createStyles(theme, status, direction))

  const [labelRef, labelHeight] = useHeight()
  const stepIndexRef = useRef<number | null>(null)

  const stepIndex = stepIndexRef.current ?? 0
  const hasBackground = getHasBackground(status, overrides?.Icon)
  const nextStepStatus = getNextStepStatus(stepIndex)
  const isLastStep = nextStepStatus === undefined

  useEffect(() => {
    if (stepIndexRef.current === null) {
      stepIndexRef.current = registerStep()
    }
  }, [registerStep])

  return (
    <Root className={css(classes.step, style)} {...rest}>
      {!isLastStep && <StepConnector status={nextStepStatus} direction={direction} labelHeight={labelHeight} />}

      <VFlow vSpacing={0}>
        <div className={classes.labelContainer} ref={labelRef}>
          <IconContainer className={classes.iconContainer}>
            {hasBackground && <div className={classes.background} />}
            {Icon && <Icon className={classes.icon} />}
            {!Icon && status === 'completed' && <CheckIcon className={classes.icon} />}
            {!Icon && status === 'inactive' && <MinusCircleFilled className={classes.icon} />}
          </IconContainer>

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
  IconContainer: 'span',
}

const createStyles = (theme: Theme, status: StepStatus, direction: StepperDirection) => {
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
    iconContainer: {
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '1.5rem',
      height: '1.5rem',
      textAlign: 'center',
      position: 'relative',
    } as CSSProperties,
    background: {
      width: '1rem',
      height: '1rem',
      borderRadius: '50%',
      position: 'absolute',
      top: 'calc(50% - 0.5rem)',
      left: 'calc(50% - 0.5rem)',
      background: status === 'incompleted' ? theme.pallete.gray.c60 : theme.pallete.primary.main,
      boxShadow:
        (status === 'active' && focusBoxShadow(theme, 'primary')) ||
        (status === 'completed' && `0 0 0 4px ${theme.pallete.primary.main}`),
      transition: 'all .4s ease',
    } as CSSProperties,
    icon: {
      zIndex: 1,
      fill: status === 'completed' || status === 'active' ? theme.pallete.primary.c100 : theme.pallete.gray.c60,
      width: '1.25rem',
      height: '1.25rem',
    } as CSSProperties,
  }
}

const getHasBackground = (status: StepStatus, overridedIcon: ElementType) => {
  return status === 'active' || status === 'completed' || (status === 'incompleted' && isNil(overridedIcon))
}
