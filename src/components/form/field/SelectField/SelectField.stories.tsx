import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm, withRouter } from '../../../../stories-addons'
import { DefaultOptionType } from '../../input/Select/Select'

import { SelectField } from './SelectField'

const options: DefaultOptionType[] = [
    { value: '1', label: 'Value #1' },
    { value: '2', label: 'Value #2' },
    { value: '3', label: 'Value #3' },
    { value: '4', label: 'Value #4' },
    { value: '5', label: 'Value #5' },
]

storiesOf('Form/Fields/Select', module)
    .addDecorator(withRouter())
    .addDecorator(withForm())
    .add('SelectField', () => (
        <SelectField
            name='select'
            label={text('label', 'Component label')}
            options={options}
            placeholder='Select a value...'
            disabled={boolean('disabled', false)}
            isMulti={boolean('isMulti', false)}
            status={boolean('hasError', false) && 'error'}
            onChange={action('changed')}
            convertToValueKey
        />
    ))
