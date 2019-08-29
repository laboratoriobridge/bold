import { number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Button } from '../Button'
import { Text } from '../Text'

import { VFlow } from './VFlow'

storiesOf('Components|VFlow', module).add('default', () => (
  <VFlow vSpacing={number('vSpacing', 1)}>
    <Text>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae ea molestias facere iusto dolor debitis
      suscipit impedit sunt blanditiis itaque ex aliquam eaque minus perspiciatis, beatae, incidunt quaerat
      voluptatibus. Vitae.
    </Text>
    <Button kind='primary'>Button 1</Button>
    <Button>Button 2</Button>
  </VFlow>
))
