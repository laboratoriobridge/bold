import { number, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { Interpolation } from 'emotion'
import React from 'react'

import { AlignItems, AlignSelf, Cell, Direction, Grid, JustifyContent } from '../'

const styles = {
  box: {
    backgroundColor: '#eee',
    textAlign: 'center',
  } as Interpolation,
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

storiesOf('Components|Grid', module)
  .add('default', () => (
    <Grid>
      <Cell size={6} style={styles.box}>
        size=6
      </Cell>
      <Cell size={3} style={styles.box}>
        size=3
      </Cell>
      <Cell size={2} style={styles.box}>
        size=2
      </Cell>
      <Cell size={1} style={styles.box}>
        size=1
      </Cell>
    </Grid>
  ))
  .add('flex-grow', () => (
    <Grid>
      <Cell flexGrow={1} style={styles.box}>
        1
      </Cell>
      <Cell style={styles.box}>2</Cell>
      <Cell flexGrow={2} style={styles.box}>
        3
      </Cell>
      <Cell style={styles.box}>4</Cell>
    </Grid>
  ))
  .add('playground', () => (
    <>
      <Grid
        alignItems={select('alignItems', alignItemsOptions, 'center')}
        justifyContent={select('justifyContent', justifyContentOptions, 'center')}
        direction={select('direction', directionOptions, 'row')}
        gap={number('gap', 2)}
        gapCrossAxis={number('gapCrossAxis', 1)}
        wrap
      >
        <Cell size={6} style={styles.box}>
          size=6
        </Cell>
        <Cell size={6} style={styles.box}>
          size=6
        </Cell>
        <Cell size={6} style={styles.box}>
          size=6
        </Cell>
      </Grid>
      <hr />
      <div style={{ height: 300 }}>
        <Grid
          alignItems={select('alignItems', alignItemsOptions, 'center')}
          justifyContent={select('justifyContent', justifyContentOptions, 'center')}
          direction={select('direction', directionOptions, 'row')}
          style={{ height: '100%' }}
        >
          <Cell size={1} style={styles.box}>
            1
          </Cell>
          <Cell size={1} style={styles.box}>
            <div style={{ height: 60 }}>2</div>
          </Cell>
          <Cell size={1} style={styles.box}>
            3
          </Cell>
        </Grid>
      </div>
    </>
  ))
  .add('cell', () => (
    <Grid alignItems='flex-start'>
      <Cell size={1} style={styles.box}>
        1
      </Cell>
      <Cell size={1} style={styles.box}>
        <div style={{ height: 60 }}>2</div>
      </Cell>
      <Cell
        size={number('size', 2) as any}
        alignSelf={select('alignSelf', alignSelfOptions, 'auto')}
        style={styles.box}
      >
        <strong>3</strong>
      </Cell>
      <Cell size={1} style={styles.box}>
        4
      </Cell>
    </Grid>
  ))
