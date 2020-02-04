import { select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { IconMap, Icons } from './generated/types'
import { Icon } from './Icon'

const options: Icons[] = Object.keys(IconMap) as Icons[]

storiesOf('Components|Icon', module).add('default', () => <Icon icon={select('icon', options, 'adjust') as Icons} />)
