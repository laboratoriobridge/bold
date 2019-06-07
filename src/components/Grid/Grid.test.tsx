import { render } from '@testing-library/react'
import React from 'react'

import { Cell } from './Cell'
import { Grid } from './Grid'

it('should render correctly', () => {
  expect(render(<Grid>Content</Grid>).container).toMatchSnapshot()
})

it('should accept flex container props', () => {
  const { container } = render(
    <Grid justifyContent='space-around' alignItems='center' direction='column-reverse' wrap>
      Content
    </Grid>
  )
  expect(container).toMatchSnapshot()
})

it('should accept "style" prop', () => {
  const { container } = render(<Grid style={{ color: 'red' }}>Content</Grid>)
  expect(container).toMatchSnapshot()
})

it('should pass props down to div', () => {
  const { container } = render(
    <Grid id='div' aria-label='test'>
      Content
    </Grid>
  )
  expect(container.querySelector('div').getAttribute('id')).toEqual('div')
  expect(container.querySelector('div').getAttribute('aria-label')).toEqual('test')
})

it('should accept "gap" and "gapVertical" props', () => {
  const { container } = render(
    <Grid gap={10} gapVertical={5}>
      <Cell>1</Cell>
      <Cell>2</Cell>
    </Grid>
  )
  expect(container).toMatchSnapshot()
})

it('should accept responsive gaps', () => {
  const { container } = render(
    <Grid gap={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} gapVertical={{ xs: 6, sm: 7, md: 8, lg: 9, xl: 10 }}>
      <Cell>1</Cell>
      <Cell>2</Cell>
    </Grid>
  )
  expect(container).toMatchSnapshot()
})
