import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import axios from 'axios'
import * as React from 'react'

import { withForm } from '../../../../stories-addons/withForm'
import { withPropTypes } from '../../../../stories-addons/withPropTypes'
import { withTheme } from '../../../../stories-addons/withTheme'
import { AsyncSelectRequestParams } from '../../input/Select/AsyncSelect'

import { AsyncSelectField } from './AsyncSelectField'

const getPage = (params: AsyncSelectRequestParams) => {
    return axios.get('https://api.github.com/users/laboratoriobridge/repos',
        {
            params: { per_page: params.pageSize },
        })
}

storiesOf('Form', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .addDecorator(withForm())
    .add('AsyncSelectField', () => (
        <AsyncSelectField
            name='select'
            valueKey='id'
            labelKey='name'
            disabled={boolean('disabled', false)}
            label={text('label', 'Component label')}
            placeholder='Select'
            getPage={getPage}
        />
    ))
