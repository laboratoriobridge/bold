import { css } from 'emotion'
import React, { CSSProperties, useEffect, useState } from 'react'

import { useLocale } from '../../i18n'
import { Theme, useStyles } from '../../styles'
import { getUserLocale, getMonthNames, getMonthShortFormat } from '../../util/locale'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { createStyles as importedStyles, ReferenceMonth } from '../MonthPicker/MonthPicker'

export interface MonthPaginatorProps {
  month?: number
  year?: number
  isOpen?: boolean
  formatter?: (date: Date, month: Intl.DateTimeFormat) => string
  onChange?(referenceMonth: ReferenceMonth): any
}

export function MonthPaginator(props: MonthPaginatorProps) {
  const { month, year, isOpen, formatter, onChange } = props
  const locale = useLocale()

  const [open, setOpen] = useState(isOpen || false)
  const { classes: importedClasses } = useStyles(importedStyles)
  const { classes } = useStyles(createStyles, open)

  const [visibleMonth, setVisibleMonth] = useState(month || new Date().getMonth())
  useEffect(() => {
    setVisibleMonth(month || new Date().getMonth())
  }, [month])

  const [visibleYear, setVisibleYear] = useState(year || new Date().getFullYear())
  useEffect(() => {
    setVisibleYear(year || new Date().getFullYear())
  }, [year])

  const onExpand = () => setOpen(!open)

  const onPrevClick = () => {
    if (open) setVisibleYear((currYear) => currYear - 1)
    else {
      setVisibleMonth((currMonth) => (currMonth === 0 ? 11 : currMonth - 1))
      setVisibleYear((currYear) => (visibleMonth === 0 ? currYear - 1 : currYear))
      onMonthClick(visibleMonth)
    }
  }
  const onNextClick = () => {
    if (open) setVisibleYear((currYear) => currYear + 1)
    else {
      setVisibleMonth((currMonth) => (currMonth === 11 ? 0 : currMonth + 1))
      setVisibleYear((currYear) => (visibleMonth === 11 ? currYear + 1 : currYear))
      onMonthClick(visibleMonth)
    }
  }

  const onMonthClick = (month: number) => () => {
    onChange({ month, year: visibleYear })
    if (open) {
      setVisibleMonth(month)
      setVisibleYear(visibleYear)
      onExpand()
    }
  }

  const baseYearDate = new Date(visibleYear, visibleMonth, 1, 0, 0, 0, 0)
  const yearFormatter = new Intl.DateTimeFormat(getUserLocale(), { year: 'numeric' })

  const monthFormatter = getMonthShortFormat(baseYearDate, formatter)
  const monthNames = getMonthNames(getUserLocale(), formatter)

  return (
    <div className={css(importedClasses.container, classes.container)}>
      <div className={css(classes.wrapper, classes.header)}>
        <div className={classes.item}>
          <Button
            title={open ? locale.calendar.previousYear : locale.calendar.previousMonth}
            size='small'
            skin='ghost'
            onClick={onPrevClick}
          >
            <Icon icon='angleLeft' />
          </Button>
        </div>
        <div className={classes.item}>
          <Button title={open ? 'Close' : 'Expand months'} size='small' skin='ghost' onClick={onExpand}>
            <Text fontWeight='bold' fontSize={0.875}>
              {!open && `${monthFormatter} - `}
              {yearFormatter.format(baseYearDate)}
            </Text>
          </Button>
        </div>
        <div className={classes.item}>
          <Button
            title={open ? locale.calendar.nextYear : locale.calendar.nextMonth}
            size='small'
            skin='ghost'
            onClick={onNextClick}
          >
            <Icon icon='angleRight' />
          </Button>
        </div>
      </div>
      {open && (
        <div className={css(classes.wrapper, classes.months)}>
          {monthNames.map((month, index) => (
            <div key={index} className={css(classes.item, classes.itemMonth)}>
              <Button
                title={month.long}
                onClick={onMonthClick(index)}
                skin='ghost'
                style={css(importedClasses.button, index === visibleMonth && importedClasses.active)}
              >
                {month.short}
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export const createStyles = (theme: Theme, open: boolean) => ({
  container: {
    padding: open ? '1rem' : '1rem 0.5rem',
  } as CSSProperties,
  wrapper: {
    margin: '-0.25rem -0.25rem',
    display: 'grid',
    alignItems: 'center',
  } as CSSProperties,
  header: {
    gridTemplateColumns: open ? 'repeat(3, 1fr)' : '2.75rem repeat(auto-fill, 6.2rem) 2.75rem',
  } as CSSProperties,
  months: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  } as CSSProperties,
  item: {
    textAlign: 'center',
  } as CSSProperties,
  itemMonth: {
    margin: '0.25rem 0.25rem',
  } as CSSProperties,
})
