import { number, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { AlignItems, AlignSelf, Cell, Direction, Grid, JustifyContent } from '../'

const styles = {
    bg: {
        backgroundColor: '#eee',
    },
}

const justifyContentOptions: { [key in JustifyContent]: string } = {
    'flex-start': 'flex-start',
    'flex-end': 'flex-end',
    'center': 'center',
    'space-between': 'space-between',
    'space-around': 'space-around',
    'space-evenly': 'space-evenly',
}

const alignItemsOptions: { [key in AlignItems]: string } = {
    'flex-start': 'flex-start',
    'flex-end': 'flex-end',
    'center': 'center',
    'baseline': 'baseline',
    'stretch': 'stretch',
}

const alignSelfOptions: { [key in AlignSelf]: string } = {
    'auto': 'auto',
    'flex-start': 'flex-start',
    'flex-end': 'flex-end',
    'center': 'center',
    'baseline': 'baseline',
    'stretch': 'stretch',
}

const directionOptions: { [key in Direction]: string } = {
    'row': 'row',
    'row-reverse': 'row-reverse',
    'column': 'column',
    'column-reverse': 'column-reverse',
}

storiesOf('Grid', module)
    .add('Grid/Cell', () => (
        <Grid>
            <Cell size={6} style={styles.bg}>1</Cell>
            <Cell size={3} style={styles.bg}>2</Cell>
            <Cell style={styles.bg}>3</Cell>
            <Cell style={styles.bg}>4</Cell>
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
                <Cell size={6} style={styles.bg}>1</Cell>
                <Cell size={6} style={styles.bg}>2</Cell>
                <Cell size={6} style={styles.bg}>3</Cell>
            </Grid>
            <hr />
            <div style={{ height: 300 }}>
                <Grid
                    alignItems={select('alignItems', alignItemsOptions, 'center')}
                    justifyContent={select('justifyContent', justifyContentOptions, 'center')}
                    direction={select('direction', directionOptions, 'row')}
                >
                    <Cell size={1} style={styles.bg}>1</Cell>
                    <Cell size={1} style={styles.bg}><div style={{ height: 60 }}>2</div></Cell>
                    <Cell size={1} style={styles.bg}>3</Cell>
                </Grid>
            </div>
        </>
    ))
    .add('Cell playground', () => (
        <Grid alignItems='flex-start'>
            <Cell size={1} style={styles.bg}>1</Cell>
            <Cell size={1} style={styles.bg}><div style={{ height: 60 }}>2</div></Cell>
            <Cell
                size={number('size', 2) as any}
                alignSelf={select('alignSelf', alignSelfOptions, 'auto')}
                style={styles.bg}
            >
                <strong>3</strong>
            </Cell>
            <Cell size={1} style={styles.bg}>4</Cell>
        </Grid>
    ))
