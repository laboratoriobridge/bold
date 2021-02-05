import { text } from '@storybook/addon-knobs'
import React from 'react'

import { Link } from './Link'

export default {
  title: 'Components/Link',
}

export const Default = () => (
  <Link href={text('href', '/')} target='_blank'>
    {text('children', 'Link to somewhere')}
  </Link>
)
