import React from 'react'
import { render } from 'react-testing-library'

import { Cell } from './Cell'
import { Grid, GridProps } from './Grid'

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

it('should accept "gap" and "gapVertical" props', () => {
  const createGrid = (props: Partial<GridProps> = {}) => (
    <Grid gap={10} gapVertical={5} {...props}>
      <Cell>1</Cell>
      <Cell>2</Cell>
    </Grid>
  )

  const { container, rerender } = render(createGrid())
  expect(container).toMatchSnapshot()

  rerender(createGrid({ direction: 'row-reverse' }))
  expect(container).toMatchSnapshot()

  rerender(createGrid({ direction: 'column' }))
  expect(container).toMatchSnapshot()

  rerender(createGrid({ direction: 'column-reverse' }))
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
