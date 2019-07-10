import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Switch } from './Switch'

storiesOf('Components|Switch', module).add('default', () => (
  <Switch
    name='switch'
    label={text('label', 'Label')}
    disabled={boolean('disabled', false)}
    onChange={action('changed')}
  />
))
