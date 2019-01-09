import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import axios from 'axios'
import * as React from 'react'
import { createFilter } from 'react-select'

import { withForm } from '../../../../stories-addons/withForm'

import { AsyncSelectField } from './AsyncSelectField'

const filter = createFilter({
    ignoreAccents: true,
    ignoreCase: true,
})

const loadOptions = (query: string, callback) => {
    return axios.get('https://api.github.com/users/laboratoriobridge/repos', {
        params: { per_page: 10 },
    }).then(respose => {
        callback(respose.data.filter(option => filter({
            label: option.name,
            value: option.id,
            data: option,
        }, query)))
    })
}

storiesOf('Form/AsyncSelectField', module)
    .addDecorator(withForm())
    .add('default', () => (
        // tslint:disable jsx-no-lambda
        <AsyncSelectField
            name='select'
            getOptionLabel={option => option && option.name}
            getOptionValue={option => option && option.id}
            loadOptions={loadOptions}
            defaultOptions={[]}
            cacheOptions={false}
            placeholder='Select a value...'
            label={text('label', 'Component label')}
            disabled={boolean('disabled', false)}
            isMulti={boolean('isMulti', false)}
            onChange={action('changed')}
        />
    ))
