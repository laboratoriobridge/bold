import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withForm } from '../../../../stories-addons'

import { MonthField } from './MonthField'

storiesOf('Form/MonthField', module)
    .addDecorator(withForm())
    .add('default', () => (
        <MonthField
            onValueChange={action('changed')}
            name='month'
        />
    ))
