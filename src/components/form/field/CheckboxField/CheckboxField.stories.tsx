import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons'

import { CheckboxField } from './CheckboxField'
import * as Doc from './CheckboxField.md'

storiesOf('Form/CheckboxField', module)
    // @ts-ignore
    .addParameters({
        info: { text: Doc },
    })
    .addDecorator(withForm())
    .add('default', () => (
        <CheckboxField
            name='check'
            label={text('label', 'Component label')}
            disabled={boolean('disabled', false)}
            indeterminate={boolean('indeterminate', false)}
            onChange={action('changed')}
        />
    ))
