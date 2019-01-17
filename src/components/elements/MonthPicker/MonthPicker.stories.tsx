import { action } from '@storybook/addon-actions'
import { number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { MonthPicker } from './MonthPicker/MonthPicker'
import { MonthPickerInput } from './MonthPickerInput/MonthPickerInput'

storiesOf('Components/MonthPicker', module)
    .add('MonthPicker', () => (
        <MonthPicker
            month={number('month', new Date().getMonth())}
            year={number('year', new Date().getFullYear())}
        />
    ))
    .add('MonthPickerInput', () => (
        <MonthPickerInput
            onValueChange={action('date selected')}
        />
    ))
