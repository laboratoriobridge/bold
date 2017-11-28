import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { Button } from './Button'
import { withTheme } from '../../../stories-addons/withTheme'

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('with text', withInfo({ text: 'Texto sobre o botão' })(() =>
        <Button
            disabled={boolean('disabled', true)}
            type='primary'
        >
            {text('label', 'Hello')}
        </Button>
    ))
