import React from 'react'

import { VFlow } from '../VFlow'

import { InfoLabel } from './InfoLabel'

export default {
  title: 'Components/InfoLabel',
  component: InfoLabel,
  args: {
    title: 'Name',
    placeholder: '-',
  },
}

export const Default = (args) => (
  <VFlow vSpacing={0.5}>
    <InfoLabel {...args}>João da Silva</InfoLabel>
    <InfoLabel {...args}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo quasi ullam eos, fuga earum molestiae cum
      odit, modi exercitationem quis hic quae. Excepturi quia neque expedita explicabo facere corporis dolore?
    </InfoLabel>
    <InfoLabel {...args} />
  </VFlow>
)
