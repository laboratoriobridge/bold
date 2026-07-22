import React from 'react'

import { TextColor } from '../../styles'
import { VFlow } from '../VFlow'

import { Heading } from './Heading'

const colors: TextColor[] = [
  '' as any,
  'inherit',
  'normal',
  'secondary',
  'disabled',
  'primary',
  'danger',
  'info',
  'alert',
  'success',
]

export default {
  title: 'Components/Textual',
  component: Heading,
  argTypes: {
    color: {
      control: 'select',
      options: colors,
    },
  },
  args: {
    color: 'normal',
  },
}

export const _Heading = (args) => (
  <VFlow>
    <Heading level={1} {...args}>
      Heading level 1
    </Heading>
    <Heading level={2} {...args}>
      Heading level 2
    </Heading>
    <Heading level={3} {...args}>
      Heading level 3
    </Heading>
    <Heading level={4} {...args}>
      Heading level 4
    </Heading>
    <Heading level={5} {...args}>
      Heading level 5
    </Heading>
    <Heading level={6} {...args}>
      Heading level 6
    </Heading>
  </VFlow>
)
