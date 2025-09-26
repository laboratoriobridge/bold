import React, {
  Children,
  CSSProperties,
  ElementType,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  useCallback,
  useMemo,
  useRef,
} from 'react'

import { ExternalStyles, useStyles } from '../../styles'
import { isNil, Omit } from '../../util'
import { getComponents } from '../../util/overrides'
import { StepperContextProvider, StepperContextValue } from './useStepperContext'
import { StepProps } from './Step'

export type StepperDirection = 'horizontal' | 'vertical'

export interface StepperProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  /**
   * Defines the layout direction of the stepper (horizontal or vertical)
   * @default 'horizontal'
   */
  direction?: StepperDirection

  /**
   * Defines the spacing between individual steps in rem units.
   * If not provided, the stepper will behave responsively, automatically stretching to fill the parent container.
   */
  gap?: number

  style?: ExternalStyles

  overrides?: {
    Root?: ElementType
  }
}

export function Stepper(props: StepperProps) {
  const { direction = 'horizontal', gap, style, overrides, children, ...rest } = props
  const { Root } = getComponents(overrides, defaultComponents)

  const stepCounterRef = useRef(0)

  const steps = useMemo(
    () =>
      Children.toArray(children).filter(
        (child): child is ReactElement<StepProps> => isValidElement(child) && typeof child.type === 'function'
      ),
    [children]
  )
  const stepStatuses = useMemo(() => steps.map((child) => child.props.status ?? 'incompleted'), [steps])

  const { classes, css } = useStyles(() => createStyles(direction, gap, steps.length))

  const registerStep = useCallback(() => {
    const currentIndex = stepCounterRef.current
    stepCounterRef.current += 1
    return currentIndex
  }, [])

  const stepperContextValue: StepperContextValue = useMemo(() => {
    return {
      direction,
      gap,
      stepCounterRef,
      registerStep,
      getNextStepStatus: (currentIndex: number) => stepStatuses[currentIndex + 1],
    }
  }, [gap, direction, registerStep, stepStatuses])

  return (
    <StepperContextProvider value={stepperContextValue}>
      <Root className={css(classes.stepper, style)} {...rest}>
        {children}
      </Root>
    </StepperContextProvider>
  )
}

const defaultComponents: StepperProps['overrides'] = {
  Root: 'div',
}

const createStyles = (direction: StepperDirection, gap: number | undefined, numberOfSteps: number) => {
  const isHorizontal = direction === 'horizontal'
  const isVertical = direction === 'vertical'
  const hasGap = !isNil(gap)

  return {
    stepper: {
      width: hasGap && 'max-content',
      height: isVertical && '100%',
      display: 'grid',
      alignItems: isHorizontal && 'flex-start',
      gap: hasGap && `${gap}rem`,
      gridTemplateRows: isVertical && `repeat(${numberOfSteps - 1}, ${hasGap ? 'min-content' : 'auto'}) min-content`,
      gridTemplateColumns: isHorizontal && `repeat(${numberOfSteps}, 1fr)`,
    } as CSSProperties,
  }
}
