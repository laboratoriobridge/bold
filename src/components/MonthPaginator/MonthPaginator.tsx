import { Placement } from '@popperjs/core'
import React, { CSSProperties, useEffect, useState } from 'react'
import { usePopper } from 'react-popper'

import { css } from 'emotion'
import { useLocale } from '../../i18n'
import { Theme, useStyles } from '../../styles'
import { getUserLocale, getMonthShortFormat } from '../../util/locale'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { HFlow } from '../HFlow'
import { MonthPicker, ReferenceMonth } from '../MonthPicker/MonthPicker'
import { Text } from '../Text'
import { Tooltip } from '../Tooltip'
import { FocusManagerContainer } from '../FocusManagerContainer'

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
  const {
    classes: { container, ghostContainer, showMonth, popup },
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

  const updateStates = (newMonth: ReferenceMonth) => {
    setVisibleMonth(newMonth.month)
    setVisibleYear(newMonth.year)
    onChange && onChange(newMonth)
  }

  const onPrevClick = () => {
    if (open) setVisibleYear((currYear) => currYear - 1)
    else {
      const newMonth = visibleMonth === 0 ? 11 : visibleMonth - 1
      const newYear = visibleMonth === 0 ? visibleYear - 1 : visibleYear
      updateStates({ month: newMonth, year: newYear })
    }
  }
  const onNextClick = () => {
    if (open) setVisibleYear((currYear) => currYear + 1)
    else {
      const newMonth = visibleMonth === 11 ? 0 : visibleMonth + 1
      const newYear = visibleMonth === 11 ? visibleYear + 1 : visibleYear
      updateStates({ month: newMonth, year: newYear })
    }
  }

  const onMonthClick = (month: ReferenceMonth) => {
    updateStates(month)
    setOpen(!open)
  }

  const onVisibleMonthChange = (month: ReferenceMonth) => updateStates(month)

  const handleShowMonthsClick = () => setOpen(!open)

  const handleFocusOut = () => setOpen(false)
  useEffect(() => {
    open && popperRef?.focus()
  }, [open, popperRef])

  const baseYearDate = new Date(visibleYear, visibleMonth, 1, 0, 0, 0, 0)
  const yearFormatter = new Intl.DateTimeFormat(getUserLocale(), { year: 'numeric' })

  const monthFormatter = getMonthShortFormat(baseYearDate, formatter)

  return (
    <FocusManagerContainer onFocusOut={handleFocusOut}>
      <div className={ghost ? ghostContainer : container} ref={setAnchorRef}>
        <HFlow alignItems='center'>
          <Tooltip text={locale.calendar.previousMonth}>
            <Button
              disabled={open}
              size='small'
              skin='ghost'
              onClick={onPrevClick}
              data-testid='MonthPaginator.PrevButton'
            >
              <Icon icon='angleLeft' />
            </Button>
          </Tooltip>
          <Tooltip text={locale.monthPaginator.show}>
            <Button
              size='small'
              skin='ghost'
              disabled={false}
              onClick={handleShowMonthsClick}
              style={showMonth}
              data-testid='MonthPaginator.ShowMonthsButton'
            >
              <Text fontWeight='bold' fontSize={0.875}>
                {`${monthFormatter} - `}
                {yearFormatter.format(baseYearDate)}
              </Text>
            </Button>
          </Tooltip>
          <Tooltip text={locale.calendar.nextMonth}>
            <Button
              disabled={open}
              size='small'
              skin='ghost'
              onClick={onNextClick}
              data-testid='MonthPaginator.NextButton'
            >
              <Icon icon='angleRight' />
            </Button>
          </Tooltip>
        </HFlow>
      </div>
      {open && (
        <MonthPicker
          visibleMonth={{ month: visibleMonth, year: visibleYear }}
          onVisibleMonthChange={onVisibleMonthChange}
          onMonthClick={onMonthClick}
          ref={setPopperRef}
          className={css(popup, popperStyle as any)}
          data-placement={placement}
        />
      )}
    </FocusManagerContainer>
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
    padding: '1rem 0.5rem',
    backgroundColor: theme.pallete.surface.main,
    border: `1px solid ${theme.pallete.divider}`,
    boxShadow: theme.shadows.outer['20'],
    borderRadius: theme.radius.popper,
  } as CSSProperties,
  ghostContainer: {
    padding: '-2rem',
  } as CSSProperties,
  showMonth: {
    margin: 'auto -1rem',
  } as CSSProperties,
  popup: {
    zIndex: theme.zIndex.popper,
  },
})
