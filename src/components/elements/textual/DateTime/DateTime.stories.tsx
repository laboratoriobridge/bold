import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../../stories-addons'
import { VFlow } from '../../../layout/Flow/VFlow'

import { DateTime } from './DateTime'
import * as Doc from './DateTime.md'

storiesOf('Textual', module)
    .addDecorator(withPropTypes(Doc))
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('DateTime', () => (
        <VFlow>
            <DateTime
                value={text('value', '2016-08-19T19:08:16')}
            />
            <DateTime
                value={text('value', '2016-08-19T19:08:16')}
                format={text('format', 'DD/MM/YYYY HH:mm:ss')}
            />
        </VFlow>
    ))
