import { action } from '@storybook/addon-actions'
import { select, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../../stories-addons'

import { SortableLabel, SortDirection } from './SortableLabel'

const dirOptions: { [key in SortDirection]: SortDirection } = {
    '': '',
    'ASC': 'ASC',
    'DESC': 'DESC',
}

storiesOf('Components/Table', module)
    .addDecorator(withPropTypes())
    .addDecorator(withTheme())
    .addDecorator(withKnobs)
    .add('SortableLabel', () => (
        <SortableLabel
            dir={select('dir', dirOptions, '')}
            onChange={action('onChange')}
        >
            Property
        </SortableLabel>
    ))
