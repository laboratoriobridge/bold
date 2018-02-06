import { number, select, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../stories-addons'

import {
    AlignItems, AlignSelf, Cell as CellRaiz, Direction, Grid, JustifyContent, PageContainer as PageContainerRaiz
} from './'

const styles = {
    bg: {
        backgroundColor: '#eee',
    },
}

const justifyContentOptions: {[key in JustifyContent]: string} = {
    'flex-start': 'flex-start',
    'flex-end': 'flex-end',
    'center': 'center',
    'space-between': 'space-between',
    'space-around': 'space-around',
    'space-evenly': 'space-evenly',
}

const alignItemsOptions: {[key in AlignItems]: string} = {
    'flex-start': 'flex-start',
    'flex-end': 'flex-end',
    'center': 'center',
    'baseline': 'baseline',
    'stretch': 'stretch',
}

const alignSelfOptions: {[key in AlignSelf]: string} = {
    'auto': 'auto',
    'flex-start': 'flex-start',
    'flex-end': 'flex-end',
    'center': 'center',
    'baseline': 'baseline',
    'stretch': 'stretch',
}

const directionOptions: {[key in Direction]: string} = {
    'row': 'row',
    'row-reverse': 'row-reverse',
    'column': 'column',
    'column-reverse': 'column-reverse',
}

const Cell = (props) => {
    return <CellRaiz {...props} styles={styles.bg} />
}

const PageContainer = (props) => {
    return <PageContainerRaiz {...props} styles={styles.bg} />
}

storiesOf('Grid', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('PageContainer', () => (
        <PageContainer>
            Content
        </PageContainer>
    ))
    .add('Grid/Cell', () => (
        <Grid>
            <Cell size={6}>1</Cell>
            <Cell size={3}>2</Cell>
            <Cell>3</Cell>
            <Cell>4</Cell>
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
            <Cell size={6}>1</Cell>
            <Cell size={6}>2</Cell>
            <Cell size={6}>3</Cell>
        </Grid>
        <hr />
        <div style={{ height: 300 }}>
            <Grid
                alignItems={select('alignItems', alignItemsOptions, 'center')}
                justifyContent={select('justifyContent', justifyContentOptions, 'center')}
                direction={select('direction', directionOptions, 'row')}
            >
                <Cell size={1}>1</Cell>
                <Cell size={1}><div style={{ height: 60 }}>2</div></Cell>
                <Cell size={1}>3</Cell>
            </Grid>
        </div>
        </>
    ))
    .add('Cell playground', () => (
        <Grid alignItems='flex-start'>
            <Cell size={1}>1</Cell>
            <Cell size={1}><div style={{ height: 60 }}>2</div></Cell>
            <Cell
                size={number('size', 2)}
                alignSelf={select('alignSelf', alignSelfOptions, 'auto')}
            >
                <strong>3</strong>
            </Cell>
            <Cell size={1}>4</Cell>
        </Grid>
    ))
