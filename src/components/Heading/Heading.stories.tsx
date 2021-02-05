import { select } from '@storybook/addon-knobs'
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
}

export const _Heading = () => (
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
)
