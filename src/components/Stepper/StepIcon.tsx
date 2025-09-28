import React, { CSSProperties, ElementType } from 'react'
import { ExternalStyles, focusBoxShadow, Theme, useStyles } from '../../styles'
import CheckIcon from '../Icon/generated/CheckDefault'
import MinusCircleFilled from '../Icon/generated/MinusCircleFilled'
import { isNil } from '../../util'
import { StepStatus } from './Step'

interface StepIconProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  status: StepStatus
  overrides?: {
    Icon?: ElementType
  }
  style?: ExternalStyles
}

export function StepIcon(props: StepIconProps) {
  const { status, overrides: { Icon } = {}, style, ...rest } = props

  const { classes, css } = useStyles((theme) => createStyles(theme, status))

  const hasBackground = getHasBackground(status, Icon)

  return (
    <span className={css(classes.iconContainer, style)} {...rest}>
      {hasBackground && <div className={classes.background} data-testid='background' />}
      {Icon && <Icon className={classes.icon} />}
      {!Icon && status === 'completed' && <CheckIcon className={classes.icon} data-testid='check-icon' />}
      {!Icon && status === 'inactive' && <MinusCircleFilled className={classes.icon} data-testid='minus-icon' />}
    </span>
  )
}

const createStyles = (theme: Theme, status: StepStatus) => ({
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
})

const getHasBackground = (status: StepStatus, overridedIcon: ElementType) => {
  return status === 'active' || status === 'completed' || (status === 'incompleted' && isNil(overridedIcon))
}
