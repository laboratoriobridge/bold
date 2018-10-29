import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons/withForm'

import { SwitchField } from './SwitchField'

storiesOf('Form/SwitchField', module)
    .addDecorator(withForm())
    .add('default', () => (
        <SwitchField
            name='switch'
            label={text('label', '')}
            disabled={boolean('disabled', false)}
            onChange={action('changed')}
        />
    ))
