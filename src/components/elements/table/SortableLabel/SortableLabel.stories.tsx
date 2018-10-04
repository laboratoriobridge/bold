import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { SortableLabel, SortDirection } from './SortableLabel'

const dirOptions: { [key in SortDirection]: SortDirection } = {
    '': '',
    'ASC': 'ASC',
    'DESC': 'DESC',
}

storiesOf('Components/Table', module)
    .add('SortableLabel', () => (
        <SortableLabel
            direction={select('direction', dirOptions, '')}
            onChange={action('onChange')}
        >
            Property
        </SortableLabel>
    ))
