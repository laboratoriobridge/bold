import React from 'react'
import { StickyContainer } from './StickyContainer'

export default {
  title: 'Components/StickyContainer',
  component: StickyContainer,
  args: {
    top: 0,
  },
}

export const Default = (args) => (
  <div style={{ height: '400px', overflowY: 'auto' }}>
    <StickyContainer {...args}>
      <h1>Sticky title</h1>
      <p>(scroll window to see sticker in action)</p>
    </StickyContainer>

    <div style={{ height: '200vh' }} />
  </div>
)
