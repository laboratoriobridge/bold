import { storiesOf } from '@storybook/react'
import React from 'react'

import { HFlow } from '../Flow'

import { Tag } from './Tag'

storiesOf('Components/Tag', module).add('default', () => (
  <HFlow>
    <Tag>Normal</Tag>
    <Tag type='alert'>Alert</Tag>
    <Tag type='danger'>Danger</Tag>
    <Tag type='info'>Info</Tag>
    <Tag type='success'>Success</Tag>
  </HFlow>
))
