import React from 'react'

import { useLocale } from '../../i18n'
import { getUserLocale } from '../../util/locale'
import { capitalize } from '../../util/string'
import { Button } from '../Button'
import { HFlow } from '../HFlow'
import { Icon } from '../Icon'

export interface MonthControlProps {
  visibleDate: Date
  onChange(newDate: Date): void
  renderMonth?(date: Date): React.ReactNode
}

export function MonthControl(props: MonthControlProps) {
  const { visibleDate, onChange, renderMonth } = props
  const locale = useLocale()

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
      <Button title={locale.calendar.previousMonth} size='small' skin='ghost' onClick={handlePrev} tabIndex={-1}>
        <Icon icon='angleLeft' />
      </Button>
      {renderMonth(visibleDate)}
      <Button title={locale.calendar.nextMonth} size='small' skin='ghost' onClick={handleNext} tabIndex={-1}>
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
