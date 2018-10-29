import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons/withForm'

import { TextField } from './TextField'

storiesOf('Form/TextField', module)
    .addDecorator(withForm())
    .add('default', () => (
        <TextField
            disabled={boolean('disabled', false)}
            name='nome'
            label='Nome'
            placeholder='Nome'
            onChange={action('changed')}
            required
        />
    ))
    .add('password', () =>
        <TextField name='password' label='Password' placeholder='Type your password...' type='password' required />
    )
    .add('with icon', () => (
        <TextField
            name='iconized'
            label='Input with icon'
            icon={{ icon: 'search', onClick: action('icon-clicked') }}
        />
    ))
