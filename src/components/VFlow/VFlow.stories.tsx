import React from 'react'

import { Button } from '../Button'
import { Text } from '../Text'

import { VFlow } from './VFlow'

export default {
  title: 'Components/VFlow',
  component: VFlow,
}

export const Default = (args) => (
  <VFlow {...args}>
    <Text>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae ea molestias facere iusto dolor debitis
      suscipit impedit sunt blanditiis itaque ex aliquam eaque minus perspiciatis, beatae, incidunt quaerat
      voluptatibus. Vitae.
    </Text>
    <Button kind='primary'>Button 1</Button>
    <Button>Button 2</Button>
  </VFlow>
)
