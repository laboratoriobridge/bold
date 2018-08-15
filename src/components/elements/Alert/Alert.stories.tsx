import { boolean, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../stories-addons'
import { VFlow } from '../../layout/Flow/VFlow'

import { Alert } from './Alert'

const click = action('Close has been clicked')

storiesOf('Components/Alert', module)
    .addDecorator(withPropTypes())
    .addDecorator(withTheme())
    .addDecorator(withKnobs)
    .add('default', () => (
        <VFlow>
            <Alert type='info' onCloseClick={boolean('onCloseClick', true) && click}>Information</Alert>
            <Alert type='success' onCloseClick={boolean('onCloseClick', true) && click}>Success message</Alert>
            <Alert type='warning' onCloseClick={boolean('onCloseClick', true) && click}>Alert message</Alert>
            <Alert type='danger' onCloseClick={boolean('onCloseClick', true) && click}>Error message</Alert>
        </VFlow>
    ))
    .add('inline', () => (
        <VFlow>
            <Alert type='info' onCloseClick={boolean('onCloseClick', true) && click} inline>Information</Alert>
            <Alert type='success' onCloseClick={boolean('onCloseClick', true) && click} inline>Success message</Alert>
            <Alert type='warning' onCloseClick={boolean('onCloseClick', true) && click} inline>Alert message</Alert>
            <Alert type='danger' onCloseClick={boolean('onCloseClick', true) && click} inline>Error message</Alert>
        </VFlow>
    ))
