import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons/withForm'
import { withPropTypes } from '../../../../stories-addons/withPropTypes'
import { withTheme } from '../../../../stories-addons/withTheme'

import { SwitchField } from './SwitchField'

storiesOf('Form/Fields', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .addDecorator(withForm())
    .add('SwitchField', () => (
        <SwitchField
            name='switch'
            label={text('label', '')}
            disabled={boolean('disabled', false)}
        />
    ))
