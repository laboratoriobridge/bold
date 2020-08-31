import { css } from 'emotion'
import React, { CSSProperties, useEffect, useState } from 'react'

import { useLocale } from '../../i18n'
import { Theme, useStyles } from '../../styles'
import { getUserLocale } from '../../util/locale'
import { capitalize } from '../../util/string'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Text } from '../Text'

export interface MonthPaginatorProps {
  month?: number
  year?: number
  minimized?: boolean
  onChange?(referenceMonth: ReferenceMonth): any
}

/**
 * Interface representing the selected month.
 *
 * Months are zero indexed, so January is month 0 and December is month 11.
 */
export interface ReferenceMonth {
  month: number
  year: number
}

export function MonthPaginator(props: MonthPaginatorProps) {
  const { month, year, minimized, onChange } = props
  const locale = useLocale()

  const [minimizado, setMinimizado] = useState(minimized || true)
  const { classes } = useStyles(createStyles, minimizado)

  const [visibleMonth, setVisibleMonth] = useState(month || new Date().getMonth())
  useEffect(() => {
    setVisibleYear(month || new Date().getMonth())
  }, [month])

  const [visibleYear, setVisibleYear] = useState(year || new Date().getFullYear())
  useEffect(() => {
    setVisibleYear(year || new Date().getFullYear())
  }, [year])

  const onExpand = () => setMinimizado(!minimizado)

  const onPrevClick = () => {
    if (minimizado) {
      setVisibleMonth((currMonth) => (currMonth === 0 ? 11 : currMonth - 1))
      setVisibleYear((currYear) => (visibleMonth === 0 ? currYear - 1 : currYear))
      onMonthClick(visibleMonth)
    } else setVisibleYear((currYear) => currYear - 1)
  }
  const onNextClick = () => {
    if (minimizado) {
      setVisibleMonth((currMonth) => (currMonth === 11 ? 0 : currMonth + 1))
      setVisibleYear((currYear) => (visibleMonth === 11 ? currYear + 1 : currYear))
      onMonthClick(visibleMonth)
    } else setVisibleYear((currYear) => currYear + 1)
  }

  const onMonthClick = (month: number) => () => {
    onChange({ month, year: visibleYear })
    if (!minimizado) {
      setVisibleMonth(month)
      setVisibleYear(visibleYear)
      onExpand()
    }
  }

  const baseYearDate = new Date(visibleYear, visibleMonth, 1, 0, 0, 0, 0)
  const yearFormatter = new Intl.DateTimeFormat(getUserLocale(), { year: 'numeric' })
  const monthFormatter = new Intl.DateTimeFormat(getUserLocale(), { month: 'short' })

  const monthNames = getMonthNames(getUserLocale())

  return (
    <div className={classes.container}>
      <div className={css(classes.wrapper, classes.header)}>
        <div className={classes.item}>
          <Button
            title={minimizado ? locale.calendar.previousMonth : locale.calendar.previousYear}
            size='small'
            skin='ghost'
            onClick={onPrevClick}
          >
            <Icon icon='angleLeft' />
          </Button>
        </div>
        <div className={classes.item}>
          <Button size='small' skin='ghost' onClick={onExpand}>
            <Text fontWeight='bold' fontSize={0.875}>
              {minimizado && `${monthFormatter.format(baseYearDate)} - `}
              {yearFormatter.format(baseYearDate)}
            </Text>
          </Button>
        </div>
        <div className={classes.item}>
          <Button
            title={minimizado ? locale.calendar.nextMonth : locale.calendar.nextYear}
            size='small'
            skin='ghost'
            onClick={onNextClick}
          >
            <Icon icon='angleRight' />
          </Button>
        </div>
      </div>
      {!minimizado && (
        <div className={css(classes.wrapper, classes.months)}>
          {monthNames.map((month, index) => (
            <div key={index} className={css(classes.item, classes.itemMonth)}>
              <Button
                title={month.long}
                onClick={onMonthClick(index)}
                skin='ghost'
                style={css(classes.button, index === visibleMonth && classes.active)}
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

export function getMonthNames(locale: string) {
  const year = new Date().getFullYear()

  const shortFormatter = new Intl.DateTimeFormat(locale, { month: 'short' })
  const longFormatter = new Intl.DateTimeFormat(locale, { month: 'long' })

  const baseDates = Array.from(Array(12)).map((_, i) => new Date(year, i, 1, 0, 0, 0))
  return baseDates.map((date) => ({
    short: capitalize(shortFormatter.format(date)),
    long: capitalize(longFormatter.format(date)),
  }))
}

export const createStyles = (theme: Theme, minimizado) => ({
  container: {
    backgroundColor: theme.pallete.surface.main,
    display: 'inline-block',
    padding: minimizado ? '1rem 0.5rem' : '1rem',
    border: `1px solid ${theme.pallete.divider}`,
    boxShadow: theme.shadows.outer['20'],
    borderRadius: theme.radius.popper,
  } as CSSProperties,
  wrapper: {
    display: 'grid',
    alignItems: 'center',
  } as CSSProperties,
  header: {
    margin: '-0.25rem -0.25rem',
    gridTemplateColumns: minimizado ? '2.75rem repeat(auto-fill, 6.2rem) 2.75rem' : 'repeat(3, 1fr)',
  } as CSSProperties,
  months: {
    margin: '-0.25rem -0.25rem',
    gridTemplateColumns: 'repeat(3, 1fr)',
  } as CSSProperties,
  item: {
    textAlign: 'center',
  } as CSSProperties,
  itemMonth: {
    margin: '0.25rem 0.25rem',
  } as CSSProperties,
  button: {
    padding: 'calc(0.25rem - 1px) 1rem',
    transitionProperty: 'background',
    minWidth: '70px',
  } as CSSProperties,
  active: {
    background: theme.pallete.primary.main + ' !important',
    color: theme.pallete.surface.main,
  } as CSSProperties,
})
