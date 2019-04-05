import { select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { VFlow } from '../../Flow'

import { HeadingSection, HeadingSectionProps } from './HeadingSection'

const levelOptions: Array<HeadingSectionProps['level']> = [1, 2, 3, 4, 5, 6]

storiesOf('Components|Textual', module).add('HeadingSection', () => (
  <VFlow>
    <HeadingSection level={select('level', levelOptions, 1)} title={text('title', 'Heading section title')}>
      {text('content', 'Section content')}
    </HeadingSection>
    <HeadingSection level={select('level', levelOptions, 1)} title={text('title', 'Heading section title')}>
      {text('content', 'Section content')}
    </HeadingSection>
  </VFlow>
))
