import { action } from '@storybook/addon-actions'
import React from 'react'

import { HFlow } from '../HFlow'

import { Tag } from './Tag'

export default {
  title: 'Components/Tag',
}

export const Default = () => (
  <HFlow>
    <Tag>Normal</Tag>
    <Tag type='alert'>Alert</Tag>
    <Tag type='danger'>Danger</Tag>
    <Tag type='info'>Info</Tag>
    <Tag type='success'>Success</Tag>
  </HFlow>
)

export const WithIcon = () => (
  <HFlow>
    <Tag icon='userFilled'>Normal</Tag>
    <Tag type='alert' icon='exclamationTriangleFilled'>
      Alert
    </Tag>
    <Tag type='danger' icon='banFilled'>
      Danger
    </Tag>
    <Tag type='info' icon='infoCircleFilled'>
      Info
    </Tag>
    <Tag type='success' icon='checkCircleFilled'>
      Success
    </Tag>
  </HFlow>
)

export const Removable = () => (
  <HFlow>
    <Tag removable onRemove={action('onRemove')}>
      Normal
    </Tag>
    <Tag type='alert' removable onRemove={action('onRemove')}>
      Alert
    </Tag>
    <Tag type='danger' removable onRemove={action('onRemove')}>
      Danger
    </Tag>
    <Tag type='info' icon='infoCircleFilled' removable onRemove={action('onRemove')}>
      Info
    </Tag>
    <Tag type='success' icon='checkCircleFilled' removable onRemove={action('onRemove')}>
      Success
    </Tag>
  </HFlow>
)
