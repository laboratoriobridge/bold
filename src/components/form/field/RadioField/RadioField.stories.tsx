import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons/withForm'
import { Flow } from '../../../layout/Flow/Flow'

import { RadioField } from './RadioField'

storiesOf('Form/RadioField', module)
    .addDecorator(withForm())
    .add('default', () => (
        <Flow>
            <RadioField
                name='radio1'
                label={text('label', 'Component label')}
                value='1'
                onChange={action('changed')}
                disabled={boolean('disabled', false)}
            />
            <RadioField
                name='radio1'
                label={text('label', 'Component label')}
                value='2'
                onChange={action('changed')}
                disabled={boolean('disabled', false)}
            />
        </Flow>
    ))
