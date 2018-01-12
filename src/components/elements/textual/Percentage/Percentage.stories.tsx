import { number, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../../stories-addons'

import { Percentage } from './Percentage'

storiesOf('Textual', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('Percentage', () => (
        <Percentage
            value={number('value', 0.34567)}
            minDecimalPlaces={number('minDecimalPlaces', 2)}
            maxDecimalPlaces={number('maxDecimalPlaces', 2)}
            title={text('title', null)}
        />
    ))
