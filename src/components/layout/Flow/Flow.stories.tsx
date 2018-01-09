import { number, select, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../stories-addons'
import { Button } from '../../elements/Button/Button'

import { Flow } from './Flow'

const directionOptions = {
    'horizontal': 'horizontal',
    'vertical': 'vertical',
}

storiesOf('Layout', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('Flow', () => (
        <>
        <Flow
            hSpacing={number('hSpacing', 1)}
            vSpacing={number('vSpacing', 0)}
            direction={select('direction', directionOptions, 'horizontal')}
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
        >
            <Button label='Botão 1' type='primary' />
            <Button label='Botão 2' />
            <Button label='Botão 3' />
        </Flow>
        </>
    ))
