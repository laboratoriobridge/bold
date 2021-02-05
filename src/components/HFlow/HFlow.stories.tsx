import { number, select } from '@storybook/addon-knobs'
import React from 'react'

import { Button } from '../Button'
import { AlignItems, JustifyContent } from '../Grid/Grid'
import { Icon } from '../Icon'
import { Text } from '../Text'

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

export default {
  title: 'Components/HFlow',
}

export const Default = () => (
  <HFlow
    hSpacing={number('hSpacing', 1)}
    alignItems={select('alignItems', alignItemsOptions, 'center')}
    justifyContent={select('justifyContent', justifyContentOptions, 'flex-start')}
  >
    <Button kind='primary'>Button 1</Button>
    <Button>Button 2</Button>
    <Icon icon='infoCircleFilled' />
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque incidunt esse consectetur suscipit facilis animi,
      libero enim cum, repellat veniam mollitia totam ex quae impedit numquam consequatur illum! Ea, consequatur?
    </Text>
  </HFlow>
)
