import React from 'react'

import { ExternalStyles, Theme, useStyles } from '../../../styles'
import { Omit } from '../../../util'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Tooltip } from '../Tooltip'

export interface ModalContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: ExternalStyles
  hasCloseIcon?: boolean
  onClose?(): any
}

export function ModalContainer(props: ModalContainerProps) {
  const { style, onClose, hasCloseIcon, children, ...rest } = props
  const { classes, css } = useStyles(styles)

  return (
    <div role='dialog' aria-modal='true' className={css(classes.wrapper, style)} {...rest}>
      {hasCloseIcon && (
        <Tooltip text='Fechar'>
          <Button aria-label='Fechar' size='small' skin='ghost' style={classes.closeButton} onClick={onClose}>
            <Icon icon='timesDefault' />
          </Button>
        </Tooltip>
      )}

      {children}
    </div>
  )
}

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
