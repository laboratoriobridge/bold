import { number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Currency } from './Currency'

storiesOf('Textual', module)
    .add('Currency', () => (
        <Currency value={number('value', 12.34)} />
    ))
