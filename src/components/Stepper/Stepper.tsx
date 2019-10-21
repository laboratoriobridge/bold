import React, { CSSProperties } from 'react'

import { ExternalStyles, useStyles } from '../../styles'
import { Omit } from '../../util'
import { getComponents } from '../../util/overrides'

export interface StepperProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: ExternalStyles
  overrides?: {
    Root?: React.ElementType
  }
}

export function Stepper(props: StepperProps) {
  const { style, overrides, children, ...rest } = props
  const { Root } = getComponents(overrides, defaultComponents)
  const { classes, css } = useStyles(createStyles)

  return (
    <Root className={css(classes.stepper, style)} {...rest}>
      {children}
    </Root>
  )
}

Stepper.defaultProps = {} as Partial<StepperProps>

export const defaultComponents: StepperProps['overrides'] = {
  Root: 'div',
}

const createStyles = () => ({
  stepper: {
    display: 'flex',
    justifyContent: 'space-between',
  } as CSSProperties,
})
