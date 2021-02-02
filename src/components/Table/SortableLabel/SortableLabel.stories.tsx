import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'
import React from 'react'

import { SortableLabel, SortDirection } from './SortableLabel'

const dirOptions: SortDirection[] = ['', 'ASC', 'DESC']

export default {
  title: 'Components/Table',
}

export const _SortableLabel = () => (
  <SortableLabel direction={select('direction', dirOptions, '')} onChange={action('onChange')}>
    Property
  </SortableLabel>
)
