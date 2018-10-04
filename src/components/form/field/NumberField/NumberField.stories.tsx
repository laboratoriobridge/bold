import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons/withForm'

import { NumberField } from './NumberField'

storiesOf('Form/Fields', module)
    .addDecorator(withForm())
    .add('NumberField', () =>
        <NumberField name='quantidade' label='Quantidade' placeholder='Quantidade' />
    )
