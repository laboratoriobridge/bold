import React from 'react'
import { Button, ButtonProps } from '../Button'
import { useStyles } from '../../styles'

interface ModalFooterButtonProps extends Omit<ButtonProps, 'size'> {}

export function ModalFooterButton(props: ModalFooterButtonProps) {
  const { style, ...rest } = props

  const { classes, css } = useStyles(() => ({
    button: {
      minWidth: '9rem',
    },
  }))

  return <Button style={css(classes.button, style)} {...rest} />
}
