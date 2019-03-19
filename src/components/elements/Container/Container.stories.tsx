import { storiesOf } from '@storybook/react'
import React from 'react'

import { Container } from './Container'

storiesOf('Grid', module).add('Container', () => <Container style={{ background: '#f2f2f2' }}>Content</Container>)
