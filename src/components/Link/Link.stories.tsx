import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Link } from './Link'

storiesOf('Components|Link', module).add('default', () => (
  <Link href={text('href', '/')} target='_blank'>
    {text('children', 'Link to somewhere')}
  </Link>
))
