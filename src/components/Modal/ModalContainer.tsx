import React, { forwardRef } from 'react'

import { useLocale } from '../../i18n'
import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Tooltip } from '../Tooltip'

export interface ModalContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: ExternalStyles
  hasCloseIcon?: boolean

  fixedFooter?: boolean
  onClose?(): any
}

export const ModalContainer = forwardRef<HTMLDivElement, ModalContainerProps>((props, ref) => {
  const { style, onClose, hasCloseIcon, children, fixedFooter, ...rest } = props
  const { classes, css } = useStyles(styles, fixedFooter)
  const locale = useLocale()

  return (
    <div role='dialog' aria-modal='true' ref={ref} className={classes.closeButtonWrapper} {...rest}>
      <div className={css(classes.wrapper, style)}>
        {hasCloseIcon && (
          <Tooltip text={locale.modal.close}>
            <Button
              aria-label={locale.modal.close}
              size='small'
              skin='ghost'
              style={classes.closeButton}
              onClick={onClose}
            >
              <Icon icon='timesDefault' />
            </Button>
          </Tooltip>
        )}

        {children}
      </div>
    </div>
  )
})

ModalContainer.defaultProps = {
  hasCloseIcon: true,
  onClose: () => null,
} as Partial<ModalContainerProps>

export const styles = (theme: Theme, fixedFooter: boolean) => ({
  wrapper: {
    border: `1px solid ${theme.pallete.divider}`,
    boxShadow: theme.shadows.outer['160'],
    borderRadius: theme.radius.modal,
    backgroundColor: theme.pallete.surface.main,
    minWidth: 520,
    pointerEvents: 'auto',

    display: fixedFooter && 'flex',
    flexDirection: fixedFooter && 'column',
  } as React.CSSProperties,
  closeButtonWrapper: {
    position: 'relative',
  } as React.CSSProperties,
  closeButton: {
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
    transform: 'translateX(-50%)',
  } as React.CSSProperties,
})
