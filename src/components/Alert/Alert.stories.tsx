import { action } from '@storybook/addon-actions'
import React from 'react'

import { VFlow } from '../VFlow'

import { Alert } from './Alert'

const click = action('Close has been clicked')

export default {
  title: 'Components/Alert',
  component: Alert,
  args: {
    showCloseButton: true,
  },
}

export const Default = (args) => {
  const closeAction = args.showCloseButton ? click : undefined

  return (
    <VFlow>
      <Alert type='info' onCloseClick={closeAction}>
        Information
      </Alert>
      <Alert type='success' onCloseClick={closeAction}>
        Success message
      </Alert>
      <Alert type='warning' onCloseClick={closeAction}>
        Alert message
      </Alert>
      <Alert type='danger' onCloseClick={closeAction}>
        Error message
      </Alert>
    </VFlow>
  )
}

export const Inline = (args) => {
  const closeAction = args.showCloseButton ? click : undefined

  return (
    <VFlow>
      <Alert type='info' onCloseClick={closeAction} inline>
        Information
      </Alert>
      <Alert type='success' onCloseClick={closeAction} inline>
        Success message
      </Alert>
      <Alert type='warning' onCloseClick={closeAction} inline>
        Alert message
      </Alert>
      <Alert type='danger' onCloseClick={closeAction} inline>
        Error message
      </Alert>
    </VFlow>
  )
}
