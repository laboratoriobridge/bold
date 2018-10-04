import { number, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { TextColor } from '../../../../styles'

import { FontStyle, Text, TextTag, Weight } from './Text'

const weights: { [key in Weight] } = {
    'normal': 'normal',
    'bold': 'bold',
}

const tags: { [key in TextTag] } = {
    'span': 'span',
    'label': 'label',
    'div': 'div',
    'p': 'p',
}

const fontStyles: { [key in FontStyle] } = {
    'normal': 'normal',
    'italic': 'italic',
}

const colors: { [key in TextColor] } = {
    'normal': 'normal',
    'secondary': 'secondary',
    'disabled': 'disabled',
    'primary': 'primary',
    'danger': 'danger',
    'info': 'info',
    'alert': 'alert',
    'success': 'success',
}

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
