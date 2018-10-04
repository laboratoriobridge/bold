import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons/withForm'

import { SwitchField } from './SwitchField'

storiesOf('Form/Fields', module)
    .addDecorator(withForm())
    .add('SwitchField', () => (
        <SwitchField
            name='switch'
            label={text('label', '')}
            disabled={boolean('disabled', false)}
        />
    ))
