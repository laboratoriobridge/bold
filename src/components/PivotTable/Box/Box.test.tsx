import css from '@emotion/css'
import { render } from '@testing-library/react'
import React from 'react'

import { VFlow } from '../../VFlow'
import { Box } from './Box'

describe('PivotTable - Box', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Box label='Box'>
          <div />
        </Box>
      )
      expect(container).toMatchSnapshot()
    })

    it('should render correctly with icon', () => {
      const { container } = render(
        <Box label='WithIcon' icon='heartFilled'>
          <div />
        </Box>
      )
      expect(container).toMatchSnapshot()
    })

    it('should render correctly with rotated icon', () => {
      const { container } = render(
        <Box label='WithRotation' icon='heartFilled' rotation='90'>
          <div />
        </Box>
      )
      expect(container).toMatchSnapshot()
    })

    it('should render correctly with children and its styles', () => {
      const { container } = render(
        <Box
          label='Box'
          icon='heartFilled'
          styles={css`
            color: red;
            padding: 1rem;
            margin-right: 1rem;
            font-weight: bold;
          `}
        >
          <VFlow>
            <p>Child #0</p>
            <p>Child #1</p>
            <p>Child #2</p>
          </VFlow>
        </Box>
      )
      expect(container).toMatchSnapshot()
    })
  })
})
