import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, number, select } from '@storybook/addon-knobs'
import { Text, Weight } from './Text'
import { withPropTypes } from '../../stories-addons/withPropTypes/index'
import { withTheme } from '../../stories-addons/withTheme'
import { colors } from '../style/Theme'

const weights: {[key in Weight]} = {
    'normal': 'Normal',
    'bold': 'Bold'
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
        >
            {text('text', 'text here')}
        </Text>
    ))
