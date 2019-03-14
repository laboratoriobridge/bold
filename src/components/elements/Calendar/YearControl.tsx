import React from 'react'

import { getUserLocale } from '../../../util/locale'
import { HFlow } from '../../layout/Flow/HFlow'
import { Button } from '../Button'
import { Icon } from '../Icon'

export interface YearControlProps {
  visibleDate: Date
  onChange(newDate: Date): void
  renderYear?(date: Date): React.ReactNode
}

export const YearControl = (props: YearControlProps) => {
  const { visibleDate, onChange, renderYear } = props

  const handleNext = () => {
    const next = new Date(visibleDate)
    next.setFullYear(visibleDate.getFullYear() + 1)
    return onChange(next)
  }

  const handlePrev = () => {
    const prev = new Date(visibleDate)
    prev.setFullYear(prev.getFullYear() - 1)
    return onChange(prev)
  }

  return (
    <HFlow alignItems='center' hSpacing={0.5}>
      <Button title='Previous year' size='small' skin='ghost' onClick={handlePrev} tabIndex={-1}>
        <Icon icon='angleLeft' />
      </Button>
      {renderYear(visibleDate)}
      <Button title='Next year' size='small' skin='ghost' onClick={handleNext} tabIndex={-1}>
        <Icon icon='angleRight' />
      </Button>
    </HFlow>
  )
}

YearControl.defaultProps = {
  renderYear: date => {
    const formatter = new Intl.DateTimeFormat(getUserLocale(), { year: 'numeric' })
    return formatter.format(date)
  },
} as Partial<YearControlProps>
