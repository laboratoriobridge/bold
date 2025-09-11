import React, { CSSProperties } from 'react'

import { isNil } from 'lodash'
import { ExternalStyles, focusBoxShadow, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'
import { getComponents } from '../../util/overrides'
import CheckIcon from '../Icon/generated/CheckDefault'
import MinusCircleFilled from '../Icon/generated/MinusCircleFilled'

export type StepStatus = 'active' | 'completed' | 'incompleted' | 'inactive'

export interface StepProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  status?: StepStatus
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

  const hasBackground =
    status === 'active' || status === 'completed' || (status === 'incompleted' && isNil(overrides?.Icon))

  return (
    <Root className={css(classes.step, style)} {...rest}>
      {hasConnector && <Connector className={css(classes.connector)} />}

      <IconContainer className={classes.container}>
        {hasBackground && <div className={classes.background} />}
        {Icon && <Icon className={classes.icon} />}
        {!Icon && status === 'completed' && <CheckIcon className={classes.icon} />}
        {!Icon && status === 'inactive' && <MinusCircleFilled className={classes.icon} />}
      </IconContainer>

      <Label className={classes.label}>{children}</Label>
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

const createStyles = (theme: Theme, { status }: StepProps) => {
  return {
    step: {
      position: 'relative',
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 0.5rem',
      gap: '0.75rem',
    } as CSSProperties,
    connector: {
      position: 'absolute',
      top: 'calc(0.75rem - 1px)',
      left: 'calc(-50% + 0.5rem)',
      right: 'calc(50% + 0.5rem)',
      borderTopWidth: '2px',
      borderTopStyle: status === 'inactive' ? 'dashed' : 'solid',
      borderTopColor:
        status === 'incompleted' || status === 'inactive' ? theme.pallete.gray.c80 : theme.pallete.primary.main,
      transition: 'all .4s ease',
    } as CSSProperties,
    container: {
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
    label: {
      color: getLabelColor(status, theme),
      fontWeight: 'bold',
      transition: 'all .4s ease',
    } as CSSProperties,
  }
}

const getLabelColor = (status: StepStatus, theme: Theme): CSSProperties['color'] => {
  if (status === 'active') return theme.pallete.primary.main
  if (status === 'inactive') return theme.pallete.text.disabled
  return theme.pallete.text.main
}
