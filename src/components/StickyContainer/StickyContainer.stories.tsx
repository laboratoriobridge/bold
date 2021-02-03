import { number } from '@storybook/addon-knobs'
import React from 'react'

import { StickyContainer } from './StickyContainer'

export default {
  title: 'Components/StickyContainer',
}

export const Default = () => (
  <>
    <StickyContainer top={number('top', 140)}>
      <h1>Sticky title</h1>
      <p>(scroll window to see sticker in action)</p>
    </StickyContainer>
    <div style={{ height: '200vh' }} />
  </>
)
