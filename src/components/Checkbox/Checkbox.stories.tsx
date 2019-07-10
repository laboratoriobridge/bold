import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Checkbox } from './Checkbox'

storiesOf('Components|Checkbox', module).add('default', () => (
  <Checkbox
    name='check'
    label={text('label', 'Component label')}
    disabled={boolean('disabled', false)}
    indeterminate={boolean('indeterminate', false)}
    onChange={action('changed')}
  />
))
