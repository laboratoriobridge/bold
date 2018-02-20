import { action } from '@storybook/addon-actions'
import { number, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../../stories-addons'

import { TableFooter } from './TableFooter'

storiesOf('Components', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('TableFooter', () => (
        <TableFooter
            page={number('page', 0)}
            totalPages={number('totalPages', 10)}
            totalElements={number('totalElements', 100)}
            onPageChange={action('page-changed')}
        />
    ))
