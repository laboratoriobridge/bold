import { select } from '@storybook/addon-knobs'
import React from 'react'

import { IconMap, Icons } from './generated/types'
import { Icon } from './Icon'

const options: Icons[] = Object.keys(IconMap) as Icons[]

export default {
  title: 'Components/Icon',
}

export const Default = () => <Icon icon={select('icon', options, 'adjust') as Icons} />
