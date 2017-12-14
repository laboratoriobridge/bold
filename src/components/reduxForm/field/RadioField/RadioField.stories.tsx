import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { RadioField } from './RadioField'
import { withTheme } from '../../../../stories-addons/withTheme'
import { withPropTypes } from '../../../../stories-addons/withPropTypes'
import { withForm } from '../../../../stories-addons/withForm'
import { withText } from '../../../../stories-addons/withText'

storiesOf('RadioField', module)
    .addDecorator(withPropTypes())
    .addDecorator(withText(`
        test
    `))
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .addDecorator(withForm())
    .add('playground', () =>
        <div>
            <RadioField name='radio1' label={text('label', 'Component label')} value='1' disabled={boolean('disabled', false)} />
            <RadioField name='radio1' label={text('label', 'Component label')} value='2' disabled={boolean('disabled', false)} />
        </div>
    )
