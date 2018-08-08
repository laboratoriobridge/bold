import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import axios from 'axios'
import * as React from 'react'
import { createFilter } from 'react-select'

import { withForm } from '../../../../stories-addons/withForm'
import { withPropTypes } from '../../../../stories-addons/withPropTypes'
import { withTheme } from '../../../../stories-addons/withTheme'
import { AsyncSelectRequestParams } from '../../select/AsyncSelect/AsyncSelect'

import { AsyncSelectField } from './AsyncSelectField'

const filter = createFilter({
    ignoreAccents: true,
    ignoreCase: true,
})

const getPage = (params: AsyncSelectRequestParams) => {
    return axios.get('https://api.github.com/users/laboratoriobridge/repos', {
        params: { per_page: params.pageSize },
    }).then(respose => {
        return respose.data.filter(option => filter({
            label: option.name,
            value: option.id,
            data: option,
        }, params.query))
    })
}

storiesOf('Form/Fields/Select', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .addDecorator(withForm())
    .add('AsyncSelectField', () => (
        // tslint:disable jsx-no-lambda
        <AsyncSelectField
            name='select'
            getOptionLabel={option => option && option.name}
            getOptionValue={option => option && option.id}
            placeholder='Select a value...'
            getPage={getPage}
            label={text('label', 'Component label')}
            disabled={boolean('disabled', false)}
            isMulti={boolean('isMulti', false)}
            status={boolean('hasError', false) && 'error'}
            defaultOptions={[]}
            cacheOptions={false}
        />
    ))
