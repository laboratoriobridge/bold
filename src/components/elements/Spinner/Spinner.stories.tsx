import { number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Spinner } from './Spinner'

storiesOf('Components', module)
    .add('Spinner', () => (
        <Spinner size={number('size', 1)} borderWidth={number('borderWidth', 2)} />
    ))
