import React from 'react'
import { VFlow } from '../VFlow'
import { Status } from './Status'

export default {
  title: 'Components/Status',
}

export const Default = () => (
  <VFlow>
    <Status type='info' text='Status description' />
    <Status type='success' text='Status description' />
    <Status type='warning' text='Status description' />
    <Status type='danger' text='Status description' />
  </VFlow>
)
