import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons/withForm'
import { DateInput } from '../../input/DatePickerInput/DateInput'

import { DateField } from './DateField'

storiesOf('Form/DateField', module)
    .addDecorator(withForm())
    .add('field', () => (
        <DateField
            name='date'
            label='Data'
            disabled={boolean('disabled', false)}
            onChange={action('changed')}
            required
        />
    ))
    .add('input', () => (
        <DateInput
            name='date'
            onChange={action('changed')}
            value={new Date()}
        />
    ))
