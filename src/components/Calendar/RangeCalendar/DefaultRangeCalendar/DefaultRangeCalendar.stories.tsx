import { storiesOf } from '@storybook/react'
import React from 'react'

import { Heading, HFlow, VFlow } from '../../..'

import { DefaultRangeCalendar } from './DefaultRangeCalendar'

const day = new Date('2019-04-01')

storiesOf('Components|Range Calendar', module)
  .add('undefined interval', () => <DefaultRangeCalendar initialDate={undefined} finalDate={undefined} />)
  .add('only one date', () => (
    <HFlow>
      <VFlow style={{ textAlign: 'center' }}>
        <Heading level={3} color='normal'>
          Only initial date defined
        </Heading>
        <DefaultRangeCalendar initialDate={day} finalDate={undefined} />
      </VFlow>
      <VFlow style={{ textAlign: 'center' }}>
        <Heading level={3} color='normal'>
          Only final date defined
        </Heading>
        <DefaultRangeCalendar initialDate={undefined} finalDate={day} />
      </VFlow>
    </HFlow>
  ))
  .add('interval defined', () => {
    const nextDay = new Date(day)
    nextDay.setDate(day.getDate() + 11)

    return <DefaultRangeCalendar initialDate={day} finalDate={nextDay} />
  })
