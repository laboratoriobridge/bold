import { Placement } from '@popperjs/core'
import { css } from 'emotion'
import React, { CSSProperties, useEffect, useState } from 'react'
import { usePopper } from 'react-popper'

import { useLocale } from '../../i18n'
import { Theme, useStyles } from '../../styles'
import { getUserLocale, getMonthNames, getMonthShortFormat } from '../../util/locale'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { HFlow } from '../HFlow'
import { createStyles as importedStyles, ReferenceMonth } from '../MonthPicker/MonthPicker'
import { Text } from '../Text'
import { Tooltip } from '../Tooltip'

export interface MonthPaginatorProps {
  month?: number
  year?: number
  isOpen?: boolean
  ghost?: boolean
  popperPlacement?: Placement
  formatter?: (date: Date, month: Intl.DateTimeFormat) => string
  onChange?(referenceMonth: ReferenceMonth): any
}

export function MonthPaginator(props: MonthPaginatorProps) {
  const { month, year, isOpen, ghost, popperPlacement, formatter, onChange } = props
  const locale = useLocale()

  const [open, setOpen] = useState(isOpen)
  const { classes: importedClasses } = useStyles(importedStyles)
  const {
    classes: { container, ghostContainer, popup, popupItem, showMonth },
  } = useStyles(createStyles, open)

  const [visibleMonth, setVisibleMonth] = useState(month)
  useEffect(() => {
    setVisibleMonth(month)
  }, [month])

  const [visibleYear, setVisibleYear] = useState(year)
  useEffect(() => {
    setVisibleYear(year)
  }, [year])

  const [anchorRef, setAnchorRef] = useState<HTMLDivElement>()
  const [popperRef, setPopperRef] = useState<HTMLDivElement>()

  const {
    styles: { popper: popperStyle },
    attributes: { placement },
  } = usePopper(anchorRef, popperRef, { placement: popperPlacement })

  const updateStates = (newMonth: number, newYear: number) => {
    setVisibleMonth(newMonth)
    setVisibleYear(newYear)
    onChange && onChange({ month: newMonth, year: newYear })
  }

  const onPrevClick = () => {
    if (open) setVisibleYear((currYear) => currYear - 1)
    else {
      const newMonth = visibleMonth === 0 ? 11 : visibleMonth - 1
      const newYear = visibleMonth === 0 ? visibleYear - 1 : visibleYear
      updateStates(newMonth, newYear)
    }
  }
  const onNextClick = () => {
    if (open) setVisibleYear((currYear) => currYear + 1)
    else {
      const newMonth = visibleMonth === 11 ? 0 : visibleMonth + 1
      const newYear = visibleMonth === 11 ? visibleYear + 1 : visibleYear
      updateStates(newMonth, newYear)
    }
  }

  const onMonthClick = (month: number) => () => {
    updateStates(month, visibleYear)
    setOpen(!open)
  }

  const baseYearDate = new Date(visibleYear, visibleMonth, 1, 0, 0, 0, 0)
  const yearFormatter = new Intl.DateTimeFormat(getUserLocale(), { year: 'numeric' })

  const monthFormatter = getMonthShortFormat(baseYearDate, formatter)
  const monthNames = getMonthNames(getUserLocale(), formatter)

  return (
    <div className={ghost ? ghostContainer : container} ref={setAnchorRef}>
      <HFlow alignItems='center'>
        <Tooltip text={open ? locale.calendar.previousYear : locale.calendar.previousMonth}>
          <Button size='small' skin='ghost' onClick={onPrevClick} data-testid='MonthPaginator.PrevButton'>
            <Icon icon='angleLeft' />
          </Button>
        </Tooltip>
        <Tooltip text={open ? locale.monthPaginator.close : locale.monthPaginator.show}>
          <Button
            size='small'
            skin='ghost'
            onClick={() => setOpen(!open)}
            style={showMonth}
            data-testid='MonthPaginator.ShowMonthsButton'
          >
            <Text fontWeight='bold' fontSize={0.875}>
              {!open && `${monthFormatter} - `}
              {yearFormatter.format(baseYearDate)}
            </Text>
          </Button>
        </Tooltip>
        <Tooltip text={open ? locale.calendar.nextYear : locale.calendar.nextMonth}>
          <Button size='small' skin='ghost' onClick={onNextClick} data-testid='MonthPaginator.NextButton'>
            <Icon icon='angleRight' />
          </Button>
        </Tooltip>
      </HFlow>
      {open && (
        <div ref={setPopperRef} className={css(popperStyle as any, popup)} data-placement={placement}>
          {monthNames.map((month, index) => (
            <div key={index} className={popupItem}>
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

MonthPaginator.defaultProps = {
  isOpen: false,
  popperPlacement: 'bottom-start',
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
}

const createStyles = (theme: Theme, open: boolean) => ({
  container: {
    display: 'inline-block',
    padding: open ? '1rem' : '1rem 0.5rem',
    backgroundColor: theme.pallete.surface.main,
    border: `1px solid ${theme.pallete.divider}`,
    boxShadow: theme.shadows.outer['20'],
    borderRadius: theme.radius.popper,
  } as CSSProperties,
  ghostContainer: {
    padding: '-2rem',
  } as CSSProperties,
  popup: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(3, 1fr)',
    margin: '0.25rem 0.25rem',
    zIndex: theme.zIndex.popper,
    backgroundColor: theme.pallete.surface.main,
    borderTop: `0px`,
    border: `1px solid ${theme.pallete.divider}`,
    boxShadow: theme.shadows.outer['20'],
    borderRadius: theme.radius.popper,
  } as CSSProperties,
  popupItem: {
    textAlign: 'center',
    margin: '0.25rem',
  } as CSSProperties,
  showMonth: {
    margin: open ? 'auto' : 'auto -1rem',
  } as CSSProperties,
})
