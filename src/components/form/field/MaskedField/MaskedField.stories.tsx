import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { withForm } from '../../../../stories-addons'

import { MaskedField } from './MaskedField'
import { CnsField, CpfField, TelefoneField, TimeField } from './maskedFields'

storiesOf('Form|MaskedField', module)
  .addDecorator(withForm())
  .add('default', () => (
    <MaskedField
      mask={['(', /\d/, /\d/, /\d/, ')']}
      name='generic'
      label='Generic masked field'
      disabled={boolean('disabled', false)}
      guide={boolean('guide', true)}
      keepCharPositions={boolean('keepCharPositions', false)}
      onChange={action('changed')}
    />
  ))
  .add('CpfField', () => (
    <CpfField
      name='cpf'
      label='CPF'
      disabled={boolean('disabled', false)}
      guide={boolean('guide', true)}
      keepCharPositions={boolean('keepCharPositions', false)}
      onChange={action('changed')}
    />
  ))
  .add('TelefoneField', () => (
    <TelefoneField
      name='phone'
      label='Phone (pt-br)'
      disabled={boolean('disabled', false)}
      guide={boolean('guide', true)}
      keepCharPositions={boolean('keepCharPositions', false)}
      icon='zoomOutline'
      onIconClick={action('clicked')}
      onChange={action('changed')}
    />
  ))
  .add('TimeField', () => (
    <TimeField
      name='time'
      label='Time (hour:minute)'
      disabled={boolean('disabled', false)}
      guide={boolean('guide', true)}
      keepCharPositions={boolean('keepCharPositions', false)}
      onChange={action('changed')}
    />
  ))
  .add('CnsField', () => (
    <CnsField
      name='CNS'
      label='CNS'
      disabled={boolean('disabled', false)}
      guide={boolean('guide', true)}
      keepCharPositions={boolean('keepCharPositions', false)}
      onChange={action('changed')}
    />
  ))
