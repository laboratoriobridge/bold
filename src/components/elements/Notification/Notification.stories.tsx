import { storiesOf } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../stories-addons'
import { VFlow } from '../../layout/Flow/VFlow'

import { Notification } from './Notification'

const a = action('Close has been clicked')

storiesOf('Components', module)
    .addDecorator(withPropTypes())
    .addDecorator(withTheme())
    .add('Notification', () => (
        <VFlow>
            <Notification message='Information.' type='info' onCloseClick={a} />
            <Notification message='Success message.' type='success' onCloseClick={a} />
            <Notification message='Alert message.' type='alert' onCloseClick={a} />
            <Notification message='Error message.' type='error' onCloseClick={a} />
        </VFlow>
    ))
