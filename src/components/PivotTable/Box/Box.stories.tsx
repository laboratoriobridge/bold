import { css } from '@emotion/core'
import React from 'react'
import { Checkbox } from '../../Checkbox'
import { HFlow } from '../../HFlow'
import { Box } from './Box'

export default {
  title: 'Components/PivotTable/Box',
}

export const Empty = () => (
  <Box label='Empty'>
    <div />
  </Box>
)

export const WithDefinedStyles = () => (
  <Box
    label='WithDefinedStyles'
    icon='hamburguerMenu'
    rotation='90'
    styles={css`
      padding: 1rem;
      margin-right: 1rem;
      font-weight: bold;
    `}
  >
    <HFlow>
      <Checkbox label='Check1' />
      <Checkbox label='Check2' />
      <Checkbox label='Check3' />
    </HFlow>
  </Box>
)
