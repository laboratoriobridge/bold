import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons/withForm'
import { withPropTypes } from '../../../../stories-addons/withPropTypes'
import { withText } from '../../../../stories-addons/withText'
import { withTheme } from '../../../../stories-addons/withTheme'
import { Flow } from '../../../layout/Flow/Flow'

import { RadioField } from './RadioField'

storiesOf('Form/Fields', module)
    .addDecorator(withPropTypes())
    .addDecorator(withText(`
        test
    `))
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
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
