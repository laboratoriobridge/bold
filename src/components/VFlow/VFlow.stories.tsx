import { number, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Button } from '../Button'
import { AlignItems, JustifyContent } from '../Grid/Grid'

import { VFlow } from './VFlow'

const justifyContentOptions: JustifyContent[] = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
]

const alignItemsOptions: AlignItems[] = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']

storiesOf('Components|VFlow', module).add('default', () => (
  <VFlow
    vSpacing={number('vSpacing', 1)}
    alignItems={select('alignItems', alignItemsOptions, 'stretch')}
    justifyContent={select('justifyContent', justifyContentOptions, 'flex-start')}
  >
    <Button kind='primary'>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </VFlow>
))
