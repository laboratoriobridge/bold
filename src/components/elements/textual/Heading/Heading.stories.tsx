import { select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { VFlow } from '../../Flow'
import { colors } from '../Text/Text.stories'

import { Heading } from './Heading'

storiesOf('Textual', module).add('Heading', () => (
  <VFlow>
    <Heading level={1} color={select('color', colors, 'normal')}>
      Heading level 1
    </Heading>
    <Heading level={2} color={select('color', colors, 'normal')}>
      Heading level 2
    </Heading>
    <Heading level={3} color={select('color', colors, 'normal')}>
      Heading level 3
    </Heading>
    <Heading level={4} color={select('color', colors, 'normal')}>
      Heading level 4
    </Heading>
    <Heading level={5} color={select('color', colors, 'normal')}>
      Heading level 5
    </Heading>
    <Heading level={6} color={select('color', colors, 'normal')}>
      Heading level 6
    </Heading>
  </VFlow>
))
