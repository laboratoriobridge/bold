import { number, select } from '@storybook/addon-knobs'
import React from 'react'

import { AlignItems, AlignSelf, Cell as CellPure, Direction, Grid, JustifyContent } from '../'
import { useBreakpoint } from '../../hooks/useBreakpoint'
import { useWindowSize } from '../../hooks/useWindowSize'

const styles = {
  box: {
    backgroundColor: '#eee',
    textAlign: 'center',
    height: '100%',
  } as React.CSSProperties,
}

const justifyContentOptions: JustifyContent[] = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
]
const alignItemsOptions: AlignItems[] = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']
const alignSelfOptions: AlignSelf[] = ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']
const directionOptions: Direction[] = ['row', 'row-reverse', 'column', 'column-reverse']

function CurrentBreakpoint() {
  const { innerWidth } = useWindowSize()
  const breakpoint = useBreakpoint()

  return (
    <>
      width: {innerWidth}px | breakpoint: <strong>{breakpoint}</strong>
    </>
  )
}

function Cell(props: any) {
  return (
    <CellPure {...props}>
      <div style={styles.box}>{props.children}</div>
    </CellPure>
  )
}

export default {
  title: 'Components/Grid',
}

export const Default = () => (
  <>
    <CurrentBreakpoint />
    <Grid wrap>
      <Cell xs={12}>xs=12</Cell>
      <Cell xs={12} sm={6}>
        xs=12 sm=6
      </Cell>
      <Cell xs={12} sm={6}>
        xs=12 sm=6
      </Cell>
      <Cell xs={12} sm={6} md={4}>
        xs=12 sm=6 md=4
      </Cell>
      <Cell xs={12} sm={6} md={4}>
        xs=12 sm=6 md=4
      </Cell>
      <Cell xs={12} sm={6} md={4}>
        xs=12 sm=6 md=4
      </Cell>
      <Cell xs={12} sm={6} md={4} lg={3}>
        xs=12 sm=6 md=4 lg=3
      </Cell>
      <Cell xs={12} sm={6} md={4} lg={3}>
        xs=12 sm=6 md=4 lg=3
      </Cell>
      <Cell xs={12} sm={6} md={4} lg={3}>
        xs=12 sm=6 md=4 lg=3
      </Cell>
      <Cell xs={12} sm={6} md={4} lg={3}>
        xs=12 sm=6 md=4 lg=3
      </Cell>
    </Grid>
  </>
)
export const FlexGrow = () => (
  <Grid>
    <Cell flexGrow={1}>1</Cell>
    <Cell>2</Cell>
    <Cell flexGrow={2}>3</Cell>
    <Cell>4</Cell>
  </Grid>
)

export const Playground = () => (
  <>
    <Grid
      alignItems={select('alignItems', alignItemsOptions, 'center')}
      justifyContent={select('justifyContent', justifyContentOptions, 'center')}
      direction={select('direction', directionOptions, 'row')}
      gap={number('gap', 2)}
      gapVertical={number('gapCrossAxis', 1)}
      wrap
    >
      <Cell xs={6}>xs=6</Cell>
      <Cell xs={6}>xs=6</Cell>
      <Cell xs={6}>xs=6</Cell>
    </Grid>
    <hr />
    <div style={{ height: 300 }}>
      <Grid
        alignItems={select('alignItems', alignItemsOptions, 'center')}
        justifyContent={select('justifyContent', justifyContentOptions, 'center')}
        direction={select('direction', directionOptions, 'row')}
        style={{ height: '100%' }}
      >
        <Cell xs={1}>1</Cell>
        <Cell xs={1}>
          <div style={{ height: 60 }}>2</div>
        </Cell>
        <Cell xs={1}>3</Cell>
      </Grid>
    </div>
  </>
)

export const _Cell = () => (
  <Grid alignItems='flex-start'>
    <Cell xs={1}>1</Cell>
    <Cell xs={1}>
      <div style={{ height: 60 }}>2</div>
    </Cell>
    <Cell xs={number('xs', 2) as any} alignSelf={select('alignSelf', alignSelfOptions, 'auto')}>
      <strong>3</strong>
    </Cell>
    <Cell xs={1}>4</Cell>
  </Grid>
)
