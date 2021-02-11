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
  onClose?(): any
}

export const ModalContainer = forwardRef<HTMLDivElement, ModalContainerProps>((props, ref) => {
  const { style, onClose, hasCloseIcon, children, ...rest } = props
  const { classes, css } = useStyles(styles)
  const locale = useLocale()

  return (
    <div role='dialog' aria-modal='true' ref={ref} className={css(classes.wrapper, style)} {...rest}>
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
  )
})

ModalContainer.defaultProps = {
  hasCloseIcon: true,
  onClose: () => null,
} as Partial<ModalContainerProps>

export const styles = (theme: Theme) => ({
  wrapper: {
    border: `1px solid ${theme.pallete.divider}`,
    boxShadow: theme.shadows.outer['160'],
    borderRadius: theme.radius.modal,
    backgroundColor: theme.pallete.surface.main,
    minWidth: 520,
    pointerEvents: 'auto',
  } as React.CSSProperties,
  closeButton: {
    float: 'right',
    marginTop: '0.5rem',
    marginRight: '0.5rem',
  } as React.CSSProperties,
})
