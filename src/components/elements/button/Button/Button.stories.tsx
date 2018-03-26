import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../../stories-addons'

import { Button } from './Button'
import * as Doc from './Button.md'
import { Size, Skins, Type } from './ButtonSkins'

const typeOptions: {[key in Type]: string} = {
    'normal': 'normal',
    'primary': 'primary',
}

const skinOptions: {[key in Skins]: string} = {
    'default': 'default',
    'ghost': 'ghost',
    'secondary': 'secondary',
}

const sizeOptions: {[key in Size]: string} = {
    'small': 'small',
    'medium': 'medium',
}

storiesOf('Components', module)
    .addDecorator(withPropTypes(Doc))
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('Button', () => (
        <Button
            disabled={boolean('disabled', false)}
            label={text('label', 'Button')}
            loading={boolean('loading', false)}
            skin={select('skin', skinOptions, 'default')}
            size={select('size', sizeOptions, 'medium')}
            type={select('type', typeOptions, 'normal')}
        />
    ))
