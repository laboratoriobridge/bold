import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { MemoryRouter } from 'react-router'

import { Icon } from '../Icon'
import { Text } from '../textual'

import { Button } from './Button/Button'
import { ButtonKind, ButtonSize, ButtonSkin } from './Button/ButtonSkins'
import { ButtonLink } from './ButtonLink/ButtonLink'

const typeOptions: ButtonKind[] = ['normal', 'primary', 'danger']
const skinOptions: ButtonSkin[] = ['default', 'ghost', 'outline']
const sizeOptions: ButtonSize[] = ['small', 'medium', 'large']

storiesOf('Components/Button', module)
  // @ts-ignore
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
  .add('link', () => (
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <ButtonLink
        to='/links'
        skin={select('skin', skinOptions, 'default')}
        size={select('size', sizeOptions, 'medium')}
        kind={select('kind', typeOptions, 'normal')}
        loading={boolean('loading', false)}
        disabled={boolean('disabled', false)}
        block={boolean('block', false)}
        onClick={action('link-clicked')}
      >
        <Icon icon='arrowLeft' style={{ marginRight: '0.5rem' }} />
        <Text>Go back</Text>
      </ButtonLink>
    </MemoryRouter>
  ))
