import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons/withForm'

import { TextField } from './TextField'

storiesOf('Form/Fields', module)
    .addDecorator(withForm())
    .add('TextField', () => (
        <TextField
            disabled={boolean('disabled', false)}
            name='nome'
            label='Nome'
            placeholder='Nome'
            onChange={action('changed')}
            required
        />
    ))
    .add('TextField password', () =>
        <TextField name='senha' label='Senha' placeholder='Senha' password required />
    )
    .add('TextField with icon', () => (
        <TextField
            name='iconized'
            label='Input with icon'
            icon={{ icon: 'search', onClick: action('icon-clicked') }}
        />
    ))
