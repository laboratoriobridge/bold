import React from 'react'

import { PieChart } from './PieChart'

export default {
  title: 'Components/PieChart',
}

export const Default = () => (
  <PieChart
    title=''
    values={[
      { value: 40, name: 'A', color: '#0069D0' },
      { value: 20, name: 'B', color: '#498FFF' },
      { value: 60, name: 'C', color: '#C5D4FF' },
    ]}
  />
)
