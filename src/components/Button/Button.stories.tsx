import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'
import React, { AnchorHTMLAttributes } from 'react'
import { Icon } from '../Icon'
import { Button, ButtonProps } from './Button/Button'
import { ButtonKind, ButtonSize, ButtonSkin } from './Button/ButtonSkins'

const typeOptions: ButtonKind[] = ['normal', 'primary', 'danger']
const skinOptions: ButtonSkin[] = ['default', 'ghost', 'outline']
const sizeOptions: ButtonSize[] = ['small', 'medium', 'large']

export default {
  title: 'Components/Button',
}

export const Default = () => (
  <Button
    skin={select('skin', skinOptions, 'default')}
    size={select('size', sizeOptions, 'medium')}
    kind={select('kind', typeOptions, 'normal')}
    loading={boolean('loading', false)}
    disabled={boolean('disabled', false)}
    block={boolean('block', false)}
    onClick={action('button-clicked')}
  >
    {text('children', 'Button')}
  </Button>
)

export const WithIcon = () => (
  <Button
    skin={select('skin', skinOptions, 'ghost')}
    size={select('size', sizeOptions, 'small')}
    kind={select('kind', typeOptions, 'normal')}
    loading={boolean('loading', false)}
    disabled={boolean('disabled', false)}
    block={boolean('block', false)}
    onClick={action('button-clicked')}
  >
    <Icon icon='adjust' />
  </Button>
)

export const WithLink = () => {
  const ButtonLink = (props: ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Button component='a' {...props} />
  )

  return (
    <ButtonLink
      href='https://bold.bridge.ufsc.br'
      component='a'
      target='_blank'
      skin={select('skin', skinOptions, 'ghost')}
      size={select('size', sizeOptions, 'small')}
      kind={select('kind', typeOptions, 'normal')}
      loading={boolean('loading', false)}
      disabled={boolean('disabled', false)}
      block={boolean('block', false)}
      onClick={action('button-clicked')}
    >
      This is a link
    </ButtonLink>
  )
}
