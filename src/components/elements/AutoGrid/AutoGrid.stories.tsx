import { number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { InfoLabel } from '../../elements/InfoLabel/InfoLabel'
import { Cell } from '../Cell/Cell'

import { AutoGrid } from './AutoGrid'

storiesOf('Components|AutoGrid', module).add('AutoGrid', () => (
  <AutoGrid cellSize={number('cellSize', 4) as any}>
    <InfoLabel title='Title #1'>Content #1</InfoLabel>
    <InfoLabel title='Title #2'>Content #2</InfoLabel>
    <InfoLabel title='Title #3'>Content #3</InfoLabel>
    <InfoLabel title='Title #4'>Content #4</InfoLabel>
    <InfoLabel title='Title #5'>Content #5</InfoLabel>
    <InfoLabel title='Title #6'>Content #6</InfoLabel>
    <Cell size={12}>
      <InfoLabel title='Title Bigger'>Bigger content</InfoLabel>
    </Cell>
    <InfoLabel title='Title #7'>Content #7</InfoLabel>
    <InfoLabel title='Title #8'>Content #81</InfoLabel>
  </AutoGrid>
))
