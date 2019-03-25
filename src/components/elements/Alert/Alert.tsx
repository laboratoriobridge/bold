import { Interpolation } from 'emotion'
import React, { CSSProperties } from 'react'

import { Theme, useStyles } from '../../../styles'
import { Button } from '../Button'
import { Icons } from '../Icon'
import { Icon } from '../Icon/Icon'
import { Tooltip } from '../Tooltip'

export type AlertType = 'info' | 'success' | 'warning' | 'danger'

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type: AlertType
  onCloseClick?: any
  inline?: boolean
  styles?: {
    wrapper?: Interpolation
    container?: Interpolation
  }
}

export function Alert(props: AlertProps) {
  const { styles, type, children, onCloseClick, inline, ...rest } = props
  const { classes, css, theme } = useStyles(createStyles, props)
  const typeStyle = createTypesStyles(theme)[type]

  return (
    <div className={css(classes.wrapper, typeStyle.style, styles && styles.wrapper)} role='alert' {...rest}>
      <div className={css(classes.container, styles && styles.container)}>
        <Icon icon={typeStyle.icon} style={classes.icon} size={inline ? 1 : undefined} />

        <div className={classes.content}>{children}</div>

        {onCloseClick && (
          <span className={classes.closeButtonWrapper}>
            <Tooltip text='Fechar'>
              <Button
                aria-label='Fechar alerta'
                size='small'
                skin='ghost'
                style={classes.closeButton}
                onClick={onCloseClick}
              >
                <Icon icon='timesDefault' />
              </Button>
            </Tooltip>
          </span>
        )}
      </div>
    </div>
  )
}

export const createStyles = (theme: Theme, { inline }: AlertProps) => ({
  wrapper: {
    padding: inline ? '0 0.5rem' : '0 1rem',
    minHeight: inline ? '2rem' : '2.5rem',
    borderRadius: '2px',
    borderStyle: 'solid',
    borderWidth: '1px',
    display: inline ? 'inline-flex' : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as CSSProperties,
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  } as CSSProperties,
  icon: {
    marginRight: '0.5rem',
  } as CSSProperties,
  content: {
    flex: 1,
  } as CSSProperties,
  closeButtonWrapper: {
    marginLeft: 'auto',
    paddingLeft: '1rem',
    display: 'inline-flex',
    alignItems: 'center',
  } as CSSProperties,
  closeButton: {
    padding: inline && 0,
  } as CSSProperties,
})

export const createTypesStyles = (
  theme: Theme
): {
  [key in AlertType]: {
    icon: Icons
    style: Interpolation
  }
} => {
  return {
    info: {
      icon: 'infoCircleOutline',
      style: {
        background: theme.pallete.status.info.background,
        color: theme.pallete.status.info.main,
        borderColor: theme.pallete.status.info.main,
      },
    },
    success: {
      icon: 'checkCircleOutline',
      style: {
        background: theme.pallete.status.success.background,
        color: theme.pallete.status.success.main,
        borderColor: theme.pallete.status.success.main,
      },
    },
    warning: {
      icon: 'exclamationTriangleOutline',
      style: {
        background: theme.pallete.status.alert.background,
        color: theme.pallete.status.alert.main,
        borderColor: theme.pallete.status.alert.main,
      },
    },
    danger: {
      icon: 'banOutline',
      style: {
        background: theme.pallete.status.danger.background,
        color: theme.pallete.status.danger.main,
        borderColor: theme.pallete.status.danger.main,
      },
    },
  }
}
