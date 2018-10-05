import { boolean, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons/withForm'

import { TextAreaField } from './TextAreaField'

storiesOf('Form/Fields', module)
    .addDecorator(withForm())
    .add('TextAreaField', () => (
        <TextAreaField
            disabled={boolean('disabled', false)}
            name='nome'
            label='Nome'
            placeholder='Nome'
            maxLength={number('maxLength', null)}
            required
        />
    ))
