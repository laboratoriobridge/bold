import { boolean, number, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../../stories-addons'

import { Number } from './Number'

storiesOf('Textual', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('Number', () => (
        <Number
            value={number('value', 1234.56789)}
            minDecimalPlaces={number('minDecimalPlaces', 2)}
            maxDecimalPlaces={number('maxDecimalPlaces', 5)}
            placeholder={text('placeholder', '')}
            title={text('title', '')}
            abbrev={boolean('abbrev', false)}
            prefix={text('prefix', '')}
            sufix={text('sufix', '')}
        />
    ))
