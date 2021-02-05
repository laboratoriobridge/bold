import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import React from 'react'

import { VFlow } from '../VFlow'

import { Alert } from './Alert'

const click = action('Close has been clicked')

export default {
  title: 'Components/Alert',
}

export const Default = () => (
  <VFlow>
    <Alert type='info' onCloseClick={boolean('onCloseClick', true) && click}>
      Information
    </Alert>
    <Alert type='success' onCloseClick={boolean('onCloseClick', true) && click}>
      Success message
    </Alert>
    <Alert type='warning' onCloseClick={boolean('onCloseClick', true) && click}>
      Alert message
    </Alert>
    <Alert type='danger' onCloseClick={boolean('onCloseClick', true) && click}>
      Error message
    </Alert>
  </VFlow>
)

export const Inline = () => (
  <VFlow>
    <Alert type='info' onCloseClick={boolean('onCloseClick', true) && click} inline>
      Information
    </Alert>
    <Alert type='success' onCloseClick={boolean('onCloseClick', true) && click} inline>
      Success message
    </Alert>
    <Alert type='warning' onCloseClick={boolean('onCloseClick', true) && click} inline>
      Alert message
    </Alert>
    <Alert type='danger' onCloseClick={boolean('onCloseClick', true) && click} inline>
      Error message
    </Alert>
  </VFlow>
)
