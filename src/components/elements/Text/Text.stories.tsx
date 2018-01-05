import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, number, select } from '@storybook/addon-knobs'
import { Text, Weight, TextTag } from './Text'
import { withPropTypes } from '../../../stories-addons/withPropTypes/index'
import { withTheme } from '../../../stories-addons/withTheme'
import { colors } from '../../../styles/theme/Theme'

const weights: {[key in Weight]} = {
    'normal': 'Normal',
    'bold': 'Bold'
}

const tags: {[key in TextTag]} = {
    'span': 'span',
    'label': 'label',
    'div': 'div',
    'p': 'p',
}

storiesOf('Components', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('Text', () => (
        <Text
            color={select('color', colors, 'gray70')}
            size={number('size', 1)}
            weight={select('weight', weights, 'normal')}
            tag={select('tag', tags, 'span')}
        >
            {text('text', 'text here')}
        </Text>
    ))
