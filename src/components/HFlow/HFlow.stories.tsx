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
  component: HFlow,
  argTypes: {
    alignItems: {
      control: 'select',
      options: alignItemsOptions,
    },
    justifyContent: {
      control: 'select',
      options: justifyContentOptions,
    },
  },
  args: {
    hSpacing: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}

export const Default = (args) => (
  <HFlow {...args}>
    <Button kind='primary'>Button 1</Button>
    <Button>Button 2</Button>
    <Icon icon='infoCircleFilled' />
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque incidunt esse consectetur suscipit facilis animi,
      libero enim cum, repellat veniam mollitia totam ex quae impedit numquam consequatur illum! Ea, consequatur?
    </Text>
  </HFlow>
)
