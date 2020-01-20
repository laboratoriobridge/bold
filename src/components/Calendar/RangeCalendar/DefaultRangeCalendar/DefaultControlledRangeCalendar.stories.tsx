import { storiesOf } from '@storybook/react'
import React from 'react'

import { DefaultControlledRangeCalendar } from './DefaultControlledRangeCalendar'

storiesOf('Components|Controlled Range Calendar', module).add('undefined interval', () => (
  <DefaultControlledRangeCalendar />
))
