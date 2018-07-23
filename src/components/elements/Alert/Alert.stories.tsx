import { storiesOf } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../stories-addons'
import { VFlow } from '../../layout/Flow/VFlow'

import { Alert } from './Alert'

const click = action('Close has been clicked')
const enter = action('Mouve enter')
const leave = action('Mouve leave')

storiesOf('Components/Alert', module)
    .addDecorator(withPropTypes())
    .addDecorator(withTheme())
    .add('default', () => (
        <VFlow>
            <Alert
                type='info'
                onCloseClick={click}
                onMouseEnter={enter}
                onMouseLeave={leave}
                animated
            >Information.
            </Alert>
            <Alert
                type='success'
                onCloseClick={click}
                onMouseEnter={enter}
                onMouseLeave={leave}
                animated
            >Success message.
            </Alert>
            <Alert
                type='alert'
                onCloseClick={click}
                onMouseEnter={enter}
                onMouseLeave={leave}
                animated
            >Alert message.
            </Alert>
            <Alert
                type='error'
                onCloseClick={click}
                onMouseEnter={enter}
                onMouseLeave={leave}
                animated
            >Error message.
            </Alert>
        </VFlow>
    ))
