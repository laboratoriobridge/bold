import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { withForm } from '../../../../stories-addons/withForm'

import { NumberField } from './NumberField'

storiesOf('Form/NumberField', module)
    .addDecorator(withForm())
    .add('default', () => (
        <NumberField
            name='number'
            label='Number'
            placeholder='Type a number...'
            onChange={action('changed')}
        />
    ))
