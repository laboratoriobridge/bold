import { number, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../stories-addons'

import { Spinner } from './Spinner'

storiesOf('Components', module)
    .addDecorator(withKnobs)
    .addDecorator(withPropTypes())
    .addDecorator(withTheme())
    .add('Spinner', () => (
        <Spinner size={number('size', 1)} borderWidth={number('borderWidth', 2)} />
    ))
