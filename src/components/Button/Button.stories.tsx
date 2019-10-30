import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React, { AnchorHTMLAttributes } from 'react'

import { Icon } from '../Icon'

import { Button, ButtonProps } from './Button/Button'
import { ButtonKind, ButtonSize, ButtonSkin } from './Button/ButtonSkins'

const typeOptions: ButtonKind[] = ['normal', 'primary', 'danger']
const skinOptions: ButtonSkin[] = ['default', 'ghost', 'outline']
const sizeOptions: ButtonSize[] = ['small', 'medium', 'large']

storiesOf('Components|Button', module)
  .add('default', () => (
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
  ))
  .add('icon', () => (
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
  ))
  .add('link - <a> tag', () => {
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
  })
