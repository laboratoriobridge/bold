import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons/withForm'
import { withPropTypes } from '../../../../stories-addons/withPropTypes'
import { withTheme } from '../../../../stories-addons/withTheme'

import { SelectField } from './SelectField'

const options = [
    { value: '1', label: 'value1' },
    { value: '2', label: 'value2' },
]

storiesOf('Form/Select', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .addDecorator(withForm())
    .add('SelectField', () => (
        <SelectField
            name='select'
            disabled={boolean('disabled', false)}
            label={text('label', 'Component label')}
            options={options}
            placeholder='Select'
        />
    ))
