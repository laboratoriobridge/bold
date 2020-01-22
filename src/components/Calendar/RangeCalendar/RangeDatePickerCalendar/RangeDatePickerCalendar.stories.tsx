import { storiesOf } from '@storybook/react'
import React from 'react'

import { Heading, HFlow, VFlow } from '../../..'

import { RangeDatePickerCalendar } from './RangeDatePickerCalendar'

const day = new Date('2019-02-22')

storiesOf('Components|Range Calendar', module)
  .add('undefined interval', () => <RangeDatePickerCalendar initialDate={undefined} finalDate={undefined} />)
  .add('only one date', () => (
    <HFlow>
      <VFlow style={{ textAlign: 'center' }}>
        <Heading level={3} color='normal'>
          Only initial date defined
        </Heading>
        <RangeDatePickerCalendar initialDate={day} finalDate={undefined} />
      </VFlow>
      <VFlow style={{ textAlign: 'center' }}>
        <Heading level={3} color='normal'>
          Only final date defined
        </Heading>
        <RangeDatePickerCalendar initialDate={undefined} finalDate={day} />
      </VFlow>
    </HFlow>
  ))
  .add('interval defined', () => {
    const nextDay = new Date(day)
    nextDay.setDate(day.getDate() + 5)

    return <RangeDatePickerCalendar initialDate={day} finalDate={nextDay} />
  })
