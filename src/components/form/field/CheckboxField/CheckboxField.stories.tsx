import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm, withPropTypes, withTheme } from '../../../../stories-addons'

import { CheckboxField } from './CheckboxField'
import * as Doc from './CheckboxField.md'

storiesOf('Form/Fields', module)
    .addDecorator(withPropTypes(Doc))
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .addDecorator(withForm())
    .add('CheckboxField', () => (
        <CheckboxField
            name='check'
            label={text('label', 'Component label')}
            disabled={boolean('disabled', false)}
            indeterminate={boolean('indeterminate', false)}
        />
    ))
