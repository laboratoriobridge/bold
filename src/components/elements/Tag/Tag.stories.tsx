import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../stories-addons'
import { HFlow } from '../../layout/Flow/HFlow'

import { Tag } from './Tag'

storiesOf('Components/Tag', module)
    .addDecorator(withPropTypes())
    .addDecorator(withTheme())
    .add('default', () => (
        <HFlow>
            <Tag>Normal</Tag>
            <Tag type='alert'>Alert</Tag>
            <Tag type='danger'>Danger</Tag>
            <Tag type='info'>Info</Tag>
            <Tag type='success'>Success</Tag>
        </HFlow>
    ))
