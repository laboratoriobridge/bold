import { number, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { TextColor } from '../../../../styles'

import { FontStyle, Text, TextTag, Weight } from './Text'

const weights: Weight[] = ['normal', 'bold']
const tags: TextTag[] = ['span', 'p']
const fontStyles: FontStyle[] = ['normal', 'italic']
export const colors: TextColor[] = ['normal', 'secondary', 'disabled', 'primary', 'danger', 'info', 'alert', 'success']

storiesOf('Textual', module)
    .add('Text', () => (
        <Text
            size={number('size', 1)}
            color={select('color', colors, 'normal')}
            weight={select('weight', weights, 'normal')}
            tag={select('tag', tags, 'span')}
            fontStyle={select('fontStyle', fontStyles, 'normal')}
        >
            {text('text', 'text here')}
        </Text>
    ))
