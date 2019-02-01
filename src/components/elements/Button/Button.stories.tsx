import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { MemoryRouter } from 'react-router'

import * as Doc from './Button.md'
import { Button } from './Button/Button'
import { Size, Skins, Type } from './Button/ButtonSkins'
import { ButtonLink } from './ButtonLink/ButtonLink'

const typeOptions: Type[] = ['normal', 'primary', 'danger']
const skinOptions: Skins[] = ['default', 'ghost', 'outline']
const sizeOptions: Size[] = ['small', 'medium', 'large']

storiesOf('Components/Button', module)
    // @ts-ignore
    .addParameters({
        info: { text: Doc },
    })
    .add('default', () => (
        <Button
            label={text('label', 'Button')}
            skin={select('skin', skinOptions, 'default')}
            size={select('size', sizeOptions, 'medium')}
            type={select('type', typeOptions, 'normal')}
            loading={boolean('loading', false)}
            disabled={boolean('disabled', false)}
            block={boolean('block', false)}
            onClick={action('button-clicked')}
        />
    ))
    .add('icon', () => (
        <Button
            icon='adjust'
            skin={select('skin', skinOptions, 'ghost')}
            size={select('size', sizeOptions, 'small')}
            type={select('type', typeOptions, 'normal')}
            loading={boolean('loading', false)}
            disabled={boolean('disabled', false)}
            block={boolean('block', false)}
            onClick={action('button-clicked')}
        />
    ))
    .add('link', () => (
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
            <ButtonLink
                to='/links'
                icon='arrowLeft'
                label={text('label', 'Link')}
                skin={select('skin', skinOptions, 'default')}
                size={select('size', sizeOptions, 'medium')}
                type={select('type', typeOptions, 'normal')}
                loading={boolean('loading', false)}
                disabled={boolean('disabled', false)}
                block={boolean('block', false)}
                onClick={action('link-clicked')}
            />
        </MemoryRouter>
    ))
