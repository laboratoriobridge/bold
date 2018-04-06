import { action } from '@storybook/addon-actions'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes } from '../../../../stories-addons/withPropTypes'
import { withTheme } from '../../../../stories-addons/withTheme'

import { DatePickerInput } from './DatePickerInput'

storiesOf('Components', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('DatePickerInput', () => (
        <DatePickerInput
            name='check'
            onChange={action('value-changed')}
            disabled={boolean('disabled', false)}
        />
    ))
