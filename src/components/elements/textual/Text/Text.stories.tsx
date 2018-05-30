import { number, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../../stories-addons'
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
    'primary': 'primary',
    'danger': 'danger',
    'info': 'info',
    'alert': 'alert',
    'success': 'success',
    'gray90': 'gray90',
    'gray80': 'gray80',
    'gray70': 'gray70',
    'gray60': 'gray60',
    'gray50': 'gray50',
    'gray40': 'gray40',
    'gray30': 'gray30',
    'gray20': 'gray20',
    'gray10': 'gray10',
}

storiesOf('Textual', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
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
