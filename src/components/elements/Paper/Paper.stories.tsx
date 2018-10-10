import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Heading } from '../textual/Heading/Heading'
import { Text } from '../textual/Text/Text'

import { Paper } from './Paper'

storiesOf('Components', module)
    .add('Paper', () => (
        <Paper elevation={20} style={{ marginBottom: '2rem', marginTop: '0.5rem', padding: '1rem' }}>
            <Heading level={2}>Paper heading</Heading>
            <Text>Paper content</Text>
        </Paper>
    ))
