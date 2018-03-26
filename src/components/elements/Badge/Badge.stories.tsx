import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../stories-addons'

import { Badge } from './Badge'

storiesOf('Components', module)
    .addDecorator(withPropTypes())
    .addDecorator(withTheme())
    .add('Badge', () => (
        <Badge>Inativo</Badge>
    ))
