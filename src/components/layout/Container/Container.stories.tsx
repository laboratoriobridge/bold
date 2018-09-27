import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../stories-addons'

import { Container } from './Container'

storiesOf('Grid', module)
    .addDecorator(withPropTypes())
    .addDecorator(withTheme())
    .add('Container', () => (
        <Container style={{ background: '#f2f2f2' }}>
            Content
        </Container>
    ))
