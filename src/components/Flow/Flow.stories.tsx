import React from 'react'

import { Button } from '../Button'
import { AlignItems, JustifyContent } from '../Grid/Grid'
import { Text } from '../Text'

import { Flow, FlowDirection, JustifyItems } from './Flow'

const directions: { [key in FlowDirection]: FlowDirection } = {
  horizontal: 'horizontal',
  vertical: 'vertical',
}

const alignItemsOptions: AlignItems[] = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']

const justifyContentOptions: JustifyContent[] = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
]

const justifyItemsOptions: JustifyItems[] = ['start', 'center', 'end', 'stretch']

export default {
  title: 'Components/Flow',
  components: Flow,
  argTypes: {
    direction: {
      control: 'select',
      options: Object.keys(directions),
    },
    alignItems: {
      control: 'select',
      options: alignItemsOptions,
    },
    justifyContent: {
      control: 'select',
      options: justifyContentOptions,
    },
    justifyItems: {
      control: 'select',
      options: justifyItemsOptions,
    },
  },
  args: {
    direction: 'horizontal',
    alignItems: 'center',
    justifyContent: 'flex-start',
    justifyItems: 'start',
    gap: 1,
  },
}

export const Default = (args) => (
  <Flow {...args}>
    <Button kind='primary'>Button 1</Button>
    <Button>Button 2</Button>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque incidunt esse consectetur suscipit facilis animi,
      libero enim cum, repellat veniam mollitia totam ex quae impedit numquam consequatur illum! Ea, consequatur?
    </Text>
  </Flow>
)
