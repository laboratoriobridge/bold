import { action } from '@storybook/addon-actions'
import React, { AnchorHTMLAttributes } from 'react'

import { Icon } from '../Icon'
import { Button, ButtonProps } from './Button/Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    kind: 'normal',
    loading: false,
    disabled: false,
    block: false,
    onClick: action('button-clicked'),
  },
}

export const Default = (args) => <Button {...args} />

Default.args = {
  children: 'Button',
  skin: 'default',
  size: 'medium',
}

export const WithIcon = (args) => (
  <Button {...args}>
    <Icon icon='adjust' />
  </Button>
)

WithIcon.args = {
  skin: 'ghost',
  size: 'small',
  kind: 'normal',
}

export const WithLink = (args) => {
  const ButtonLink = (props: ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Button component='a' {...props} />
  )

  return (
    <ButtonLink href='https://bold.bridge.ufsc.br' target='_blank' {...args}>
      This is a link
    </ButtonLink>
  )
}

WithLink.args = {
  skin: 'ghost',
  size: 'small',
  kind: 'normal',
}
