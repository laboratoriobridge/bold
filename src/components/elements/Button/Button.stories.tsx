import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { Button } from './Button'


storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('with text', withInfo({ text: 'Texto sobre o botão' })(() => <Button disabled={boolean('disabled', true)}>{text('label', 'Hello')}</Button>))
