import { css } from '@emotion/core'
import React from 'react'
import { Checkbox } from '../Checkbox'
import { HFlow } from '../HFlow'
import { Box } from './Box'

export default {
  title: 'Components/Box',
}

export const Empty = () => (
  <Box label='Empty' icon='hamburguerMenu'>
    <div />
  </Box>
)

export const WithDefinedStyles = () => (
  <Box
    label='Colunas'
    icon='hamburguerMenu'
    rotation='90'
    styles={css`
      padding: 1rem;
      margin-right: 1rem;
      font-weight: ;
    `}
  >
    <div>
      <HFlow>
        <Checkbox label='Check1'></Checkbox>
        <Checkbox label='Check2'></Checkbox>
        <Checkbox label='Check3'></Checkbox>
      </HFlow>
    </div>
  </Box>
)
