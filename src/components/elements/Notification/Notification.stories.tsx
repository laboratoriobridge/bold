import { storiesOf } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../stories-addons'
import { VFlow } from '../../layout/Flow/VFlow'

import { Notification } from './Notification'

const click = action('Close has been clicked')
const enter = action('Mouve enter')
const leave = action('Mouve leave')

storiesOf('Components/Notification', module)
    .addDecorator(withPropTypes())
    .addDecorator(withTheme())
    .add('default', () => (
        <VFlow>
            <Notification
                type='info'
                onCloseClick={click}
                onMouseEnter={enter}
                onMouseLeave={leave}
                animated
            >Information.
            </Notification>
            <Notification
                type='success'
                onCloseClick={click}
                onMouseEnter={enter}
                onMouseLeave={leave}
                animated
            >Success message.
            </Notification>
            <Notification
                type='alert'
                onCloseClick={click}
                onMouseEnter={enter}
                onMouseLeave={leave}
                animated
            >Alert message.
            </Notification>
            <Notification
                type='error'
                onCloseClick={click}
                onMouseEnter={enter}
                onMouseLeave={leave}
                animated
            >Error message.
            </Notification>
        </VFlow>
    ))
