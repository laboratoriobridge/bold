import { Options as PopperOptions } from '@popperjs/core'
import React, { useEffect, useRef, useState } from 'react'
import { usePopper } from 'react-popper'
import { Theme, useStyles } from '../..'
import { DateRange } from '../DateRangePicker'
import { FocusManagerContainer } from '../FocusManagerContainer'
import { MonthPickerProps, ReferenceMonth } from '../MonthPicker'
import { ControlledMonthRangeCalendar } from './RangeMonthCalendar/ControlledMonthRangeCalendar'
import { MonthRangePickerInput, MonthRangePickerInputProps } from './MonthRangePickerInput'
import { disabledByMonth, transformRangeReferenceMonth } from './util'

export interface MonthRangePickerProps extends Omit<MonthRangePickerInputProps, 'onChange'> {
  popperProps?: PopperOptions
  monthPickerProps?: Partial<MonthPickerProps>
  onFocus?(e: React.FocusEvent<HTMLDivElement>): void
  onBlur?(e: React.FocusEvent<HTMLDivElement>): void
  onChange?(dateRange: DateRange): void
}

export interface ReferenceMonthRange {
  start?: ReferenceMonth
  end?: ReferenceMonth
}

export function MonthRangePicker(props: MonthRangePickerProps) {
  const { minMonth, maxMonth, popperProps, onFocus, onBlur, onChange, value, icon, monthPickerProps, ...rest } = props

  const [rangeInputFocus, setRangeInputFocus] = useState(1)
  const [visibleMonth, setVisibleMonth] = useState<ReferenceMonth>({ month: undefined, year: undefined })
  const [open, setOpen] = useState(false)

  const finalInputRef = useRef<HTMLInputElement>()
  const [anchorRef, setAnchorRef] = useState<HTMLDivElement>()
  const [popupRef, setPopupRef] = useState<HTMLDivElement>()

  const { classes, css } = useStyles(createStyles)

  useEffect(() => {
    const month = (): ReferenceMonth => {
      if (rangeInputFocus === 1 && value?.start) {
        return value.start
      } else if (rangeInputFocus === 2 && value?.end) {
        return value.end
      } else if (value?.start && !value?.end) {
        return value.start
      } else if (!value?.start && value?.end) {
        return value.end
      } else {
        const today = new Date()
        return { month: today.getMonth(), year: today.getFullYear() }
      }
    }

    setVisibleMonth(month)
  }, [rangeInputFocus, value])

  const {
    styles: { popper: popperStyle },
    attributes: { placement },
  } = usePopper(anchorRef, popupRef, { ...popperProps, placement: 'bottom' })

  const handleInputFocus = (inputOnFocus: number) => setRangeInputFocus(inputOnFocus)

  const handleFocusIn = (event: React.FocusEvent<HTMLDivElement>) => {
    onFocus && onFocus(event)
    setOpen(true)
  }

  const handleFocusOut = (event: React.FocusEvent<HTMLDivElement>) => {
    onBlur && onBlur(event)
    setOpen(false)
  }

  const handleMonthRangeChanged = (range: ReferenceMonthRange) => {
    const { start, end } = range

    start && end
      ? onChange(transformRangeReferenceMonth(range))
      : !end
      ? onChange(transformRangeReferenceMonth({ start: start, end: start }))
      : onChange(transformRangeReferenceMonth({ start: end, end: end }))
  }

  const handleInputMonthRangeChanged = (range: ReferenceMonthRange) => onChange(transformRangeReferenceMonth(range))

  const handleOnVisibleMonthChange = (month: ReferenceMonth) => setVisibleMonth(month)

  const handleOnMonhtClick = () => finalInputRef.current.focus()

  return (
    <FocusManagerContainer onFocusIn={handleFocusIn} onFocusOut={handleFocusOut}>
      <MonthRangePickerInput
        value={value}
        onChange={handleInputMonthRangeChanged}
        divRef={setAnchorRef}
        minMonth={minMonth}
        maxMonth={maxMonth}
        icon={icon}
        finalInputRef={finalInputRef}
        onInputOnFocus={handleInputFocus}
        {...rest}
      />

      {open && (
        <div
          ref={setPopupRef}
          className={css(classes.popup, popperStyle as any)}
          tabIndex={-1}
          data-placement={placement}
        >
          <ControlledMonthRangeCalendar
            value={value}
            onChange={handleMonthRangeChanged}
            onMonthClick={handleOnMonhtClick}
            inputOnFocus={rangeInputFocus}
            visibleMonth={visibleMonth}
            onVisibleMonthChange={handleOnVisibleMonthChange}
            minMonth={minMonth}
            maxMonth={maxMonth}
            isDisabled={disabledByMonth(minMonth, maxMonth)}
            {...monthPickerProps}
          />
        </div>
      )}
    </FocusManagerContainer>
  )
}

const createStyles = (theme: Theme) => ({
  popup: {
    zIndex: theme.zIndex.popper,
  },
})
