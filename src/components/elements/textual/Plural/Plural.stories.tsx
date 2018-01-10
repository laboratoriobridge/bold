import { boolean, number, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../../stories-addons'

import { Plural } from './Plural'

storiesOf('Textual', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('Plural', () => (
        <Plural
            word={text('word', 'cidadão')}
            count={number('count', 2)}
            inclusive={boolean('inclusive', false)}
        />
    ))
