import React from 'react'

import { VFlow } from '../VFlow'

import { HeadingSection, HeadingSectionProps } from './HeadingSection'

const levelOptions: Array<HeadingSectionProps['level']> = [1, 2, 3, 4, 5, 6]

export default {
  title: 'Components/Textual',
  component: HeadingSection,
  argTypes: {
    level: {
      control: 'select',
      options: levelOptions,
    },
    title: {
      control: 'text',
    },
  },
  args: {
    level: 1,
    title: 'Heading section title',
    content: 'Section content',
  },
}

export const _HeadingSection = (args) => (
  <VFlow>
    <HeadingSection {...args}>{args.content}</HeadingSection>
    <HeadingSection {...args}>{args.content}</HeadingSection>
  </VFlow>
)
