import React from 'react'
import { render } from 'react-testing-library'

import { Cell } from './Cell'
import { augmentGapMap, createGridContext, Grid, GridProps } from './Grid'

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

it('should accept "gap" and "gapCrossAxis" props', () => {
  const createGrid = (props: Partial<GridProps> = {}) => (
    <Grid gap={10} gapCrossAxis={5} {...props}>
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

describe('augmentGapMap', () => {
  it('should populate all breakpoints from map', () => {
    expect(augmentGapMap({ xs: 2 })).toEqual({ xs: 2, sm: 2, md: 2, lg: 2, xl: 2 })
    expect(augmentGapMap({ xs: 2, lg: 4 })).toEqual({ xs: 2, sm: 2, md: 2, lg: 4, xl: 4 })
    expect(augmentGapMap({ md: 3 })).toEqual({ xs: undefined, sm: undefined, md: 3, lg: 3, xl: 3 })
  })
})

describe('createGridContext', () => {
  it('should create grid context value given grid props and current breakpoint', () => {
    expect(createGridContext({ direction: 'row', gap: 2, gapCrossAxis: 3 }, 'lg')).toEqual({
      direction: 'row',
      gap: 2,
      gapCrossAxis: 3,
    })

    const props: GridProps = { direction: 'row', gap: { xs: 1, lg: 3 }, gapCrossAxis: { xs: 1, sm: 2, xl: 4 } }
    expect(createGridContext(props, 'xs')).toEqual({ direction: 'row', gap: 1, gapCrossAxis: 1 })
    expect(createGridContext(props, 'sm')).toEqual({ direction: 'row', gap: 1, gapCrossAxis: 2 })
    expect(createGridContext(props, 'md')).toEqual({ direction: 'row', gap: 1, gapCrossAxis: 2 })
    expect(createGridContext(props, 'lg')).toEqual({ direction: 'row', gap: 3, gapCrossAxis: 2 })
    expect(createGridContext(props, 'xl')).toEqual({ direction: 'row', gap: 3, gapCrossAxis: 4 })
  })
})
