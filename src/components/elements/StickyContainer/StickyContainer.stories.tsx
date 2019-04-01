import { number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { StickyContainer } from './StickyContainer'

storiesOf('Components|StickyContainer', module).add('default', () => (
  <>
    <StickyContainer top={number('top', 140)}>
      <h1>Sticky title</h1>
      <p>(scroll window to see sticker in action)</p>
    </StickyContainer>
    <div style={{ height: '200vh' }} />
  </>
))
