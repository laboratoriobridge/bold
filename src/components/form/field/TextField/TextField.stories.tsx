import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons/withForm'
import { withPropTypes } from '../../../../stories-addons/withPropTypes/index'
import { withTheme } from '../../../../stories-addons/withTheme'

import { TextField } from './TextField'

storiesOf('Form', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .addDecorator(withForm())
    .add('TextField', () =>
        <TextField name='nome' label='Nome' placeholder='Nome' required />
    )
    .add('TextField password', () =>
        <TextField name='senha' label='Senha' placeholder='Senha' password required />
    )
