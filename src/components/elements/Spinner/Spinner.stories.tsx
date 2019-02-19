import { number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Spinner } from './Spinner'

storiesOf('Components/Spinner', module)
    .add('default', () => (
        <Spinner size={number('size', 1)} borderWidth={number('borderWidth', 2)} />
    ))
