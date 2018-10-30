import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons/withForm'
import { DateInput } from '../../input/DateInput/DateInput'

import { DateField } from './DateField'

const todayMinus10 = new Date((new Date()).setDate(new Date().getDate() - 10))

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
    .add('min/max date', () => (
        <DateField
            name='date'
            label='Data'
            disabled={boolean('disabled', false)}
            onChange={action('changed')}
            minDate={todayMinus10}
            maxDate={new Date()}
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
