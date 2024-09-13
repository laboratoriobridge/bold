import { Options as PopperOptions } from '@popperjs/core'
import React, { useEffect, useState } from 'react'
import { usePopper } from 'react-popper'
import { useStyles } from '../../styles/hooks/useStyles'
import { Theme } from '../../styles/theme/createTheme'
import { composeHandlers, composeRefs } from '../../util/react'
import { FocusManagerContainer } from '../FocusManagerContainer'
import { MonthPicker, MonthPickerProps, ReferenceMonth } from '../MonthPicker'
import { disabledByMonth, isSameReferenceMonth } from '../MonthRangePicker/util'
import { isValidReferenceMonth } from '../Calendar/util'
import { MonthInput, MonthInputProps } from './MonthInput'

export interface MonthFieldProps extends MonthInputProps {
  minMonth?: ReferenceMonth
  maxMonth?: ReferenceMonth
  popperProps?: PopperOptions
  monthPickerProps?: Partial<MonthPickerProps>
}

export function MonthField(props: MonthFieldProps) {
  const { value, popperProps, inputRef, onChange, onIconClick, maxMonth, minMonth, ...rest } = props

  const { classes, css } = useStyles(createStyles)

  const [open, setOpen] = useState(false)

  const [anchorRef, setAnchorRef] = useState<HTMLInputElement>()
  const [popperRef, setPopperRef] = useState<HTMLDivElement>()

  const [visibleMonth, setVisibleMonth] = useState<ReferenceMonth>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  })

  useEffect(() => {
    setVisibleMonth(
      isValidReferenceMonth(value)
        ? value
        : {
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
          }
    )
  }, [value])

  const {
    styles: { popper: popperStyle },
    attributes: { placement },
  } = usePopper(anchorRef, popperRef, { ...popperProps, placement: 'bottom-start' })

  const handleVisibleMonthChange = (month: ReferenceMonth) => setVisibleMonth(month)

  const handleInputChange = (month: ReferenceMonth) => {
    onChange(month)
  }

  const handleMonthClick = (month: ReferenceMonth) => {
    setOpen(false)
    onChange(month)
  }

  const handleInputIconClick = () => setOpen(true)
  const handleFocusIn = () => setOpen(true)
  const handleFocusOut = () => setOpen(false)

  return (
    <FocusManagerContainer onFocusIn={handleFocusIn} onFocusOut={handleFocusOut}>
      <MonthInput
        inputRef={composeRefs(setAnchorRef, inputRef)}
        value={value}
        icon='calendarOutline'
        onIconClick={composeHandlers(handleInputIconClick, onIconClick)}
        onChange={handleInputChange}
        {...rest}
      />

      {open && (
        <div
          ref={setPopperRef}
          className={css(classes.popup, popperStyle as any)}
          data-placement={placement}
          data-testid='MonthField.popup'
        >
          <MonthPicker
            visibleMonth={visibleMonth}
            onVisibleMonthChange={handleVisibleMonthChange}
            onMonthClick={handleMonthClick}
            isDisabled={disabledByMonth(minMonth, maxMonth)}
            modifiers={{
              selected: (month: ReferenceMonth) => value && isSameReferenceMonth(value, month),
            }}
            {...props.monthPickerProps}
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
