import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { TextField } from './TextField'
import { withPropTypes } from '../../../../stories-addons/withPropTypes/index'
import { withTheme } from '../../../../stories-addons/withTheme'
import { withForm } from '../../../../stories-addons/withForm'

storiesOf('TextField', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .addDecorator(withForm())
    .add('default', () =>
        <TextField name='nome' label='Nome' placeholder='Nome' />
    )
