import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons/withForm'

import { DateField } from './DateField'

storiesOf('Form/Fields', module)
    .addDecorator(withForm())
    .add('DateField', () => (
        <DateField
            name='date'
            label='Data'
            disabled={boolean('disabled', false)}
            required
        />
    ))
