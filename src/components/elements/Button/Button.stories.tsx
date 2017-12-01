import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { Button } from './Button'
import { withTheme } from '../../../stories-addons/withTheme'
import { withPropTypes } from '../../../stories-addons/withPropTypes'

storiesOf('Button', module)
    .addDecorator(withPropTypes)
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('primary', () =>
        <Button
            disabled={boolean('disabled', false)}
            type='primary'
            onClick={() => undefined}
        >
            {text('label', 'Hello')}
        </Button>
    )
