import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Calendar } from './Calendar'

storiesOf('Components/Calendar', module)
    .add('default', () => (
        <Calendar
            activeDate={new Date()}
            onDayClick={action('day-click')}
            onDayHover={action('day-hover')}
        />
    ))
