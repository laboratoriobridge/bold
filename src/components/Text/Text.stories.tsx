import { number, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { TextColor } from '../../styles'

import { Text, TextProps } from './Text'

const variants: Array<TextProps['variant']> = [
  'main',
  'secondary',
  'disabled',
  'link',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
]
const components: Array<TextProps['component']> = ['span', 'p', 'button']
const fontWeights: Array<TextProps['fontWeight']> = ['' as any, 'normal', 'bold']
const fontStyles: Array<TextProps['fontStyle']> = ['' as any, 'normal', 'italic']
const textDecorations: Array<TextProps['textDecoration']> = ['' as any, 'normal', 'underline']
export const colors: TextColor[] = [
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

storiesOf('Components|Textual', module).add('Text', () => (
  <Text
    variant={select('variant', variants, undefined)}
    component={select('component', components as any, undefined)}
    fontSize={number('fontSize', undefined)}
    color={select('color', colors, undefined)}
    fontWeight={select('fontWeight', fontWeights, undefined)}
    fontStyle={select('fontStyle', fontStyles, undefined)}
    textDecoration={select('textDecoration', textDecorations, undefined)}
  >
    {text('text', 'Lorem ipsum')}
  </Text>
))
