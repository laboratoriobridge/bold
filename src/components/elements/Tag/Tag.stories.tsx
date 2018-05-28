import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../stories-addons'

import { Tag } from './Tag'

storiesOf('Components', module)
    .addDecorator(withPropTypes())
    .addDecorator(withTheme())
    .add('Tag', () => (
        <Tag>Normal</Tag>
    ))
