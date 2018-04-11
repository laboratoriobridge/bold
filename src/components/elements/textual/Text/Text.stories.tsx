import { number, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../../stories-addons'
import { colors } from '../../../../styles/theme/Theme'

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

storiesOf('Textual', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('Text', () => (
        <Text
            size={number('size', 1)}
            color={select('color', colors, 'gray30')}
            weight={select('weight', weights, 'normal')}
            tag={select('tag', tags, 'span')}
            fontStyle={select('fontStyle', fontStyles, 'normal')}
        >
            {text('text', 'text here')}
        </Text>
    ))
