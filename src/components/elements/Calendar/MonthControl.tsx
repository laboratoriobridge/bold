import React from 'react'

import { getUserLocale } from '../../../util/locale'
import { capitalize } from '../../../util/string'
import { HFlow } from '../../layout/Flow/HFlow'
import { Button } from '../Button'
import { Icon } from '../Icon'

export interface MonthControlProps {
  visibleDate: Date
  onChange(newDate: Date): void
  renderMonth?(date: Date): React.ReactNode
}

export const MonthControl = (props: MonthControlProps) => {
  const { visibleDate, onChange, renderMonth } = props

  const handleNext = () => {
    const next = new Date(visibleDate)
    next.setMonth(visibleDate.getMonth() + 1)
    return onChange(next)
  }

  const handlePrev = () => {
    const prev = new Date(visibleDate)
    prev.setMonth(prev.getMonth() - 1)
    return onChange(prev)
  }

  return (
    <HFlow alignItems='center' hSpacing={0.5}>
      <Button title='Previous month' size='small' skin='ghost' onClick={handlePrev} tabIndex={-1}>
        <Icon icon='angleLeft' />
      </Button>
      {renderMonth(visibleDate)}
      <Button title='Next month' size='small' skin='ghost' onClick={handleNext} tabIndex={-1}>
        <Icon icon='angleRight' />
      </Button>
    </HFlow>
  )
}

MonthControl.defaultProps = {
  renderMonth: date => {
    const formatter = new Intl.DateTimeFormat(getUserLocale(), { month: 'short' })
    return capitalize(formatter.format(date))
  },
} as Partial<MonthControlProps>
