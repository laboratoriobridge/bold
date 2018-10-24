import { number, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Button } from '../../elements/Button'
import { AlignItems, JustifyContent } from '../Grid/Grid'

import { Flow } from './Flow'
import { HFlow } from './HFlow'
import { VFlow } from './VFlow'

const directionOptions = {
    'horizontal': 'horizontal',
    'vertical': 'vertical',
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

storiesOf('Layout', module)
    .add('Flow', () => (
        <>
            <Flow
                hSpacing={number('hSpacing', 1)}
                vSpacing={number('vSpacing', 0)}
                direction={select('direction', directionOptions, 'horizontal')}
                alignItems={select('alignItems', alignItemsOptions, 'stretch')}
                justifyContent={select('justifyContent', justifyContentOptions, 'flex-start')}
            >
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
            </Flow>
            <hr />
            <Flow
                hSpacing={number('hSpacing', 1)}
                vSpacing={number('vSpacing', 0)}
                direction={select('direction', directionOptions, 'horizontal')}
                alignItems={select('alignItems', alignItemsOptions, 'stretch')}
                justifyContent={select('justifyContent', justifyContentOptions, 'flex-start')}
            >
                <Button label='Botão 1' type='primary' />
                <Button label='Botão 2' />
                <Button label='Botão 3' />
            </Flow>
        </>
    ))
    .add('VFlow', () => (
        <VFlow>
            <Button label='Botão 1' type='primary' />
            <Button label='Botão 2' />
            <Button label='Botão 3' />
        </VFlow>
    ))
    .add('HFlow', () => (
        <HFlow>
            <Button label='Botão 1' type='primary' />
            <Button label='Botão 2' />
            <Button label='Botão 3' />
        </HFlow>
    ))
