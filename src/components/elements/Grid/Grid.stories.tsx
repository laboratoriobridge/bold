import { number, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { AlignItems, AlignSelf, Cell, Direction, Grid, JustifyContent } from '../'

const styles = {
  bg: {
    backgroundColor: '#eee',
  },
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

storiesOf('Grid', module)
  .add('Grid/Cell', () => (
    <Grid>
      <Cell size={6} style={styles.bg}>
        1
      </Cell>
      <Cell size={3} style={styles.bg}>
        2
      </Cell>
      <Cell size={2} style={styles.bg}>
        3
      </Cell>
      <Cell size={1} style={styles.bg}>
        4
      </Cell>
    </Grid>
  ))
  .add('Grid playground', () => (
    <>
      <Grid
        alignItems={select('alignItems', alignItemsOptions, 'center')}
        justifyContent={select('justifyContent', justifyContentOptions, 'center')}
        direction={select('direction', directionOptions, 'row')}
        wrap
      >
        <Cell size={6} style={styles.bg}>
          1
        </Cell>
        <Cell size={6} style={styles.bg}>
          2
        </Cell>
        <Cell size={6} style={styles.bg}>
          3
        </Cell>
      </Grid>
      <hr />
      <div style={{ height: 300 }}>
        <Grid
          alignItems={select('alignItems', alignItemsOptions, 'center')}
          justifyContent={select('justifyContent', justifyContentOptions, 'center')}
          direction={select('direction', directionOptions, 'row')}
        >
          <Cell size={1} style={styles.bg}>
            1
          </Cell>
          <Cell size={1} style={styles.bg}>
            <div style={{ height: 60 }}>2</div>
          </Cell>
          <Cell size={1} style={styles.bg}>
            3
          </Cell>
        </Grid>
      </div>
    </>
  ))
  .add('Cell playground', () => (
    <Grid alignItems='flex-start'>
      <Cell size={1} style={styles.bg}>
        1
      </Cell>
      <Cell size={1} style={styles.bg}>
        <div style={{ height: 60 }}>2</div>
      </Cell>
      <Cell size={number('size', 2) as any} alignSelf={select('alignSelf', alignSelfOptions, 'auto')} style={styles.bg}>
        <strong>3</strong>
      </Cell>
      <Cell size={1} style={styles.bg}>
        4
      </Cell>
    </Grid>
  ))
