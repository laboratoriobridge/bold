import { number, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Button } from '../Button'
import { AlignItems, JustifyContent } from '../Grid/Grid'
import { Icon } from '../Icon'

import { HFlow } from './HFlow'

const justifyContentOptions: JustifyContent[] = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
]

const alignItemsOptions: AlignItems[] = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']

storiesOf('Components|HFlow', module).add('default', () => (
  <HFlow
    hSpacing={number('hSpacing', 1)}
    alignItems={select('alignItems', alignItemsOptions, 'center')}
    justifyContent={select('justifyContent', justifyContentOptions, 'flex-start')}
  >
    <Button kind='primary'>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
    <Icon icon='infoCircleFilled' />
  </HFlow>
))
