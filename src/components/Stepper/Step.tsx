import React, { CSSProperties } from 'react'

import { ExternalStyles, focusBoxShadow, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'
import { getComponents } from '../../util/overrides'
import CheckIcon from '../Icon/generated/CheckDefault'

export interface StepProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  status?: 'active' | 'completed' | 'incompleted'
  hasConnector?: boolean
  style?: ExternalStyles
  overrides?: {
    Root?: React.ElementType
    Connector?: React.ElementType
    IconContainer?: React.ElementType
    Icon?: React.ElementType
    Label?: React.ElementType
  }
}

export function Step(props: StepProps) {
  const { status, hasConnector, style, overrides, children, ...rest } = props
  const { Root, Icon, IconContainer, Connector, Label } = getComponents(overrides, defaultComponents)
  const { classes, css } = useStyles(createStyles, props)

  return (
    <Root className={css(classes.step, style)} {...rest}>
      {hasConnector && <Connector className={css(classes.connector)} />}

      <IconContainer className={classes.iconContainer}>
        {Icon && <Icon className={classes.icon} />}
        {!Icon && status === 'completed' && <CheckIcon className={classes.icon} />}
      </IconContainer>

      <Label className={classes.stepLabel}>{children}</Label>
    </Root>
  )
}

Step.defaultProps = {
  status: 'incompleted',
  hasConnector: true,
} as Partial<StepProps>

export const defaultComponents: StepProps['overrides'] = {
  Root: 'span',
  Icon: null,
  IconContainer: 'span',
  Connector: 'span',
  Label: 'span',
}

const createStyles = (theme: Theme, { status }: StepProps) => ({
  step: {
    position: 'relative',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 0.5rem',
  } as CSSProperties,
  connector: {
    position: 'absolute',
    top: '0.5rem',
    left: 'calc(-50% + 0.5rem)',
    right: 'calc(50% + 0.5rem)',
    borderTopWidth: '2px',
    borderTopStyle: 'solid',
    borderTopColor: status === 'incompleted' ? theme.pallete.gray.c80 : theme.pallete.primary.main,
    transition: 'all .4s ease',
  } as CSSProperties,
  iconContainer: {
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1rem',
    height: '1rem',
    borderRadius: '50%',
    background: status === 'incompleted' ? theme.pallete.gray.c80 : theme.pallete.primary.main,
    textAlign: 'center',
    marginBottom: '0.75rem',
    transition: 'all .4s ease',
    boxShadow:
      (status === 'active' && focusBoxShadow(theme, 'primary')) ||
      (status === 'completed' && `0 0 0 4px ${theme.pallete.primary.main}`),
  } as CSSProperties,
  icon: {
    fill: theme.pallete.primary.c100,
    width: '1rem',
    height: '1rem',
  } as CSSProperties,
  stepLabel: {
    fontWeight: 'bold',
    color: status === 'active' && theme.pallete.primary.main,
    transition: 'all .4s ease',
  } as CSSProperties,
})
