import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes } from '../../../stories-addons/withPropTypes'
import { withTheme } from '../../../stories-addons/withTheme'
import { Heading } from '../textual/Heading/Heading'
import { Text } from '../textual/Text/Text'

import { Paper } from './Paper'

storiesOf('Components', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('Paper', () => (
        <Paper elevation={20} style={{ marginBottom: '2rem', marginTop: '0.5rem', padding: '1rem' }}>
            <Heading level={2}>Paper heading</Heading>
            <Text>Paper content</Text>
        </Paper>
    ))
