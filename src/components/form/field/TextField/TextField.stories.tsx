import { action } from '@storybook/addon-actions'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons/withForm'
import { withPropTypes } from '../../../../stories-addons/withPropTypes'
import { withTheme } from '../../../../stories-addons/withTheme'

import { TextField } from './TextField'

storiesOf('Form', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .addDecorator(withForm())
    .add('TextField', () => (
        <TextField
            disabled={boolean('disabled', false)}
            name='nome'
            label='Nome'
            placeholder='Nome'
            required
        />
    ))
    .add('TextField password', () =>
        <TextField name='senha' label='Senha' placeholder='Senha' password required />
    )
    .add('Input with icon', () => (
        <TextField
            name='iconized'
            label='Input with icon'
            icon={{ icon: 'search', onClick: action('icon-clicked') }}
        />
    ))
