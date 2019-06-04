import { number, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Button } from '../Button'
import { AlignItems, JustifyContent } from '../Grid/Grid'
import { Icon } from '../Icon'

import { Flow, FlowProps } from './Flow'
import { HFlow } from './HFlow'
import { VFlow } from './VFlow'

const directionOptions: Array<FlowProps['direction']> = ['horizontal', 'vertical']

const justifyContentOptions: JustifyContent[] = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
]

const alignItemsOptions: AlignItems[] = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']

storiesOf('Components|Flow', module)
  .add('Flow', () => (
    <>
      <Flow
        hSpacing={number('hSpacing', 1)}
        vSpacing={number('vSpacing', 0)}
        direction={select('direction', directionOptions, 'horizontal')}
        alignItems={select('alignItems', alignItemsOptions, 'stretch')}
        justifyContent={select('justifyContent', justifyContentOptions, 'flex-start')}
      >
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </Flow>
      <hr />
      <Flow
        hSpacing={number('hSpacing', 1)}
        vSpacing={number('vSpacing', 0)}
        direction={select('direction', directionOptions, 'horizontal')}
        alignItems={select('alignItems', alignItemsOptions, 'stretch')}
        justifyContent={select('justifyContent', justifyContentOptions, 'flex-start')}
      >
        <Button kind='primary'>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Flow>
    </>
  ))
  .add('VFlow', () => (
    <VFlow>
      <Button kind='primary'>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </VFlow>
  ))
  .add('HFlow', () => (
    <HFlow alignItems='center'>
      <Button kind='primary'>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Icon icon='infoCircleFilled' />
    </HFlow>
  ))
