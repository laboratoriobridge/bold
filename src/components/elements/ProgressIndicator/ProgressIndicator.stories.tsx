import { number, select, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../stories-addons'
import { colors } from '../../../styles/theme/Theme'

import { ProgressIndicator } from './ProgressIndicator'

storiesOf('Components', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('ProgressIndicator', () => (
        <ProgressIndicator color={select('color', colors, 'primary')} value={number('percentage', 60)} />
    ))
