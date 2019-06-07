import { render } from '@testing-library/react'
import React from 'react'

import { TableLoadingRow } from './TableLoadingRow'

it('should render correctly', () => {
  expect(
    render(
      <table>
        <tbody>
          <TableLoadingRow colSpan={3} />
        </tbody>
      </table>
    ).container
  ).toMatchSnapshot()

  expect(
    render(
      <table>
        <tbody>
          <TableLoadingRow colSpan={2} message='Loading...' />
        </tbody>
      </table>
    ).container
  ).toMatchSnapshot()
})
