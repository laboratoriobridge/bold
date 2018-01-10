import { number, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../../stories-addons'

import { Currency } from './Currency'

storiesOf('Textual', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('Currency', () => (
        <Currency value={number('value', 12.34)} />
    ))
