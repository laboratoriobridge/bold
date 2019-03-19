import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { VFlow } from '../../Flow'

import { DateTime } from './DateTime'

storiesOf('Textual', module).add('DateTime', () => (
  <VFlow>
    <DateTime value={text('value', '2016-08-19T19:08:16')} />
    <DateTime value={text('value', '2016-08-19T19:08:16')} format={text('format', 'DD/MM/YYYY HH:mm:ss')} />
  </VFlow>
))
