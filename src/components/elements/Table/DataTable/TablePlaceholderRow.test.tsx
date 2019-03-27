import React from 'react'
import { render } from 'react-testing-library'

import { TablePlaceholderRow } from './TablePlaceholderRow'

it('should render correctly', () => {
  expect(
    render(
      <table>
        <tbody>
          <TablePlaceholderRow colSpan={3} />
        </tbody>
      </table>
    ).container
  ).toMatchSnapshot()

  expect(
    render(
      <table>
        <tbody>
          <TablePlaceholderRow colSpan={2} message='No results' />
        </tbody>
      </table>
    ).container
  ).toMatchSnapshot()
})
