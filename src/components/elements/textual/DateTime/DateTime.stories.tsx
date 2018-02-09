import { select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as moment from 'moment'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../../stories-addons'

import { DateTime } from './DateTime'

moment.locale('pt-BR')

const options = {
    '': '',
    'date': 'date',
    'time': 'time',
    'dateTime': 'dateTime',
}

storiesOf('Textual', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('DateTime', () => (
        <DateTime
            value={text('value', '2010-09-18T11:57:23.046')}
            mode={select('mode', options, null)}
        />
    ))
