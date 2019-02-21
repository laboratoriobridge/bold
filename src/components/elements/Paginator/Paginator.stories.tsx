import { action } from '@storybook/addon-actions'
import { number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Paginator } from './Paginator'

storiesOf('Components/Paginator', module)
    .add('default', () => (
        <Paginator
            page={number('page', 4)}
            total={number('total', 20)}
            onChange={action('page-changed')}
        />
    ))
