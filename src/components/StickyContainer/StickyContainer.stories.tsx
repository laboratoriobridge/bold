import React from 'react'

import { StickyContainer } from './StickyContainer'

export default {
  title: 'Components/StickyContainer',
  component: StickyContainer,
  decorators: [
    (Story) => (
      <>
        <Story />
        <div style={{ height: '200px' }} />
      </>
    ),
  ],
}

export const Default = (args) => (
  <>
    <StickyContainer {...args}>
      <h1>Sticky title</h1>
      <p>(scroll window to see sticker in action)</p>
    </StickyContainer>
  </>
)
