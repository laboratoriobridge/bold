import React from 'react'

import { Heading } from '../Heading'
import { Text } from '../Text'

import { Paper } from './Paper'

export default {
  title: 'Components/Paper',
}

export const Default = () => (
  <Paper elevation={20} style={{ marginBottom: '2rem', marginTop: '0.5rem', padding: '1rem' }}>
    <Heading level={2}>Paper heading</Heading>
    <Text>Paper content</Text>
  </Paper>
)
