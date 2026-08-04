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
const colors: TextColor[] = [
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

export default {
  title: 'Components/Textual',
  component: Text,
  argTypes: {
    variant: {
      options: variants,
      control: { type: 'select' },
    },
    component: {
      options: components,
      control: { type: 'select' },
    },
    color: {
      options: colors,
      control: { type: 'select' },
    },
    fontWeight: {
      options: fontWeights,
      control: { type: 'select' },
    },
    fontStyle: {
      options: fontStyles,
      control: { type: 'select' },
    },
    textDecoration: {
      options: textDecorations,
      control: { type: 'select' },
    },
    text: {
      control: 'text',
    },
  },
  args: {
    text: 'Lorem ipsum',
  },
}

export const _Text = (args) => <Text {...args}> {args.text} </Text>
