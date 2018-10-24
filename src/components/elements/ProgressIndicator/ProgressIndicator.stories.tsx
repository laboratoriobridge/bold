import { number, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { TextColor } from '../../../styles'

import { ProgressIndicator } from './ProgressIndicator'

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

storiesOf('Components/ProgressIndicator', module)
    .add('default', () => (
        <ProgressIndicator color={select('color', colors, 'primary')} value={number('percentage', 60)} />
    ))
