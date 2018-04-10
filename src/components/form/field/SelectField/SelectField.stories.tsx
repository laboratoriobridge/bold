import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons/withForm'
import { withPropTypes } from '../../../../stories-addons/withPropTypes'
import { withTheme } from '../../../../stories-addons/withTheme'

import { SelectField } from './SelectField'

const options = [
    { value: '1', label: 'Value #1' },
    { value: '2', label: 'Value #2' },
    { value: '3', label: 'Value #3' },
    { value: '4', label: 'Value #4' },
    { value: '5', label: 'Value #5' },
]

storiesOf('Form/Select', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .addDecorator(withForm())
    .add('SelectField', () => (
        <SelectField
            name='select'
            label={text('label', 'Component label')}
            options={options}
            placeholder='Select'
            disabled={boolean('disabled', false)}
            multi={boolean('multi', false)}
        />
    ))
