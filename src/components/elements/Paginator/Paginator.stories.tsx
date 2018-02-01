import { action } from '@storybook/addon-actions'
import { number, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes } from '../../../stories-addons/withPropTypes'
import { withTheme } from '../../../stories-addons/withTheme'

import { Paginator } from './Paginator'

storiesOf('Components', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('Paginator', () => (
        <Paginator
            page={number('page', 4)}
            total={number('total', 20)}
            range={number('range', 3)}
            onChange={action('page-changed')}
        />
    ))
