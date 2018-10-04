import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons/withForm'
import { Flow } from '../../../layout/Flow/Flow'

import { RadioField } from './RadioField'

storiesOf('Form/Fields', module)
    .addDecorator(withForm())
    .add('RadioField', () => (
        <Flow>
            <RadioField
                name='radio1'
                label={text('label', 'Component label')}
                value='1'
                disabled={boolean('disabled', false)}
            />
            <RadioField
                name='radio1'
                label={text('label', 'Component label')}
                value='2'
                disabled={boolean('disabled', false)}
            />
        </Flow>
    ))
