import { number, select, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../stories-addons'
import { TextColor } from '../../../styles'

import { ProgressIndicator } from './ProgressIndicator'

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

storiesOf('Components', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('ProgressIndicator', () => (
        <ProgressIndicator color={select('color', colors, 'primary')} value={number('percentage', 60)} />
    ))
