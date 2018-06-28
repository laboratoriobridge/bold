import { array, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../../stories-addons'

import { Highlight } from './Highlight'

storiesOf('Textual', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('Highlight', () => (
        <Highlight words={array('search', ['car'])} text={text('text', 'The blue car, the blue scarf')} />
    ))
