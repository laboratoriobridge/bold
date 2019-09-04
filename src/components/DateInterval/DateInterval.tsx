import React, { CSSProperties, useRef, useState } from 'react'

import { focusBoxShadow, Theme, useStyles } from '../../styles'
import { Button } from '../Button'
import { DateField } from '../DateField'
import { HFlow } from '../HFlow'
import { Icon } from '../Icon'

export interface Period {
  startDate: Date
  finalDate: Date
}

export interface LimitDateProps {
  /**
   * Props to limit max and min values for startDate and FinalDate
   */
  maxStartDate?: Date
  maxFinalDate?: Date
  minStartDate?: Date
  minFinalDate?: Date
}

export interface DateIntervalProps extends LimitDateProps {
  /**
   * Prop used to set an initial period in date interval
   */

  initialValue?: Period

  /**
   * Prop to disable the date field
   */
  disabled?: boolean

  /**
   * Prop to set an icon in date field button.
   * When this prop is not declared, date field will be shown without a icon.
   */
  icon?: Icon

  /**
   * Prop to disable the date field button
   */
  iconDisabled?: boolean

  /**
   * Function used to manipulate values of Period
   *
   * @param period
   */
  onChange?(period: Period): void
}

export function DateInterval(props: DateIntervalProps) {
  const firstDateFieldRef = useRef<HTMLInputElement>()
  const scondDateFieldRef = useRef<HTMLInputElement>()

  const {
    initialValue,
    disabled,
    onChange,
    icon,
    iconDisabled,
    maxStartDate,
    maxFinalDate,
    minFinalDate,
    minStartDate,
  } = props

  const { classes } = useStyles(createStyles, disabled)

  const [date, setDate] = useState(initialValue ? initialValue : ({} as Period))

  const onChangeStart = (data: Date) => {
    const period = { startDate: data, finalDate: date.finalDate } as Period
    onChange(period)
    setDate(period)
    if (data !== null) {
      scondDateFieldRef.current.focus()
    }
  }

  const onChangeFinal = (data: Date) => {
    const period = { startDate: date.startDate, finalDate: data } as Period
    onChange(period)
    setDate(period)
  }

  const onClearStart = () => {
    const period = { startDate: null, finalDate: date.finalDate } as Period
    onChange(period)
    setDate(period)
    if (period.startDate === null) {
      firstDateFieldRef.current.focus()
    }
  }

  const onClearFinal = () => {
    const period = { startDate: date.startDate, finalDate: null } as Period
    onChange(period)
    setDate(period)
    if (period.finalDate === null) {
      scondDateFieldRef.current.focus()
    }
  }

  const handleIconClick = () => {
    firstDateFieldRef.current.focus()
  }

  return (
    <HFlow style={classes.div}>
      <div className={classes.dateFieldWrapper}>
        <DateField
          aria-label='StartDateInput'
          clearable
          inputRef={firstDateFieldRef}
          maxDate={maxStartDate}
          minDate={minStartDate}
          onChange={onChangeStart}
          onClear={onClearStart}
          style={classes.dateField}
          value={date.startDate}
        />
      </div>
      <Icon icon='arrowRight' style={classes.arrowIcon} />
      <div className={classes.dateFieldWrapper}>
        <DateField
          aria-label='FinalDateInput'
          clearable
          inputRef={scondDateFieldRef}
          maxDate={maxFinalDate}
          minDate={minFinalDate}
          onChange={onChangeFinal}
          onClear={onClearFinal}
          style={classes.dateField}
          value={date.finalDate}
        />
      </div>
      {icon && (
        <Button
          aria-label='CalendarButton'
          size='small'
          skin='ghost'
          tabIndex={-1}
          onClick={handleIconClick}
          style={classes.calendarWrapper}
          disabled={iconDisabled}
        >
          <Icon icon={icon} />
        </Button>
      )}
    </HFlow>
  )
}

const createStyles = (theme: Theme, disabled: boolean) => ({
  arrowIcon: {
    marginTop: '0.3rem',
  },
  calendarIcon: {
    borderRadius: 'inherit',
  } as CSSProperties,
  calendarWrapper: {
    backgroundColor: theme.pallete.gray.c90,
    width: '2.5rem',
    '&:focus': {
      boxShadow: 'none',
    },
  } as CSSProperties,
  dateField: {
    border: 'none',
    marginTop: '0.05rem',
    '&:focus': {
      boxShadow: 'none !important',
    },
  } as CSSProperties,
  dateFieldWrapper: {
    flex: 1,
  } as CSSProperties,
  div: {
    display: 'flex',
    border: '1px solid ' + theme.pallete.gray.c70,
    borderRadius: '0.2rem',
    backgroundColor: disabled ? theme.pallete.surface.background : theme.pallete.surface.main,
    cursor: 'pointer',
    margin: '0.4rem',
    transition: 'box-shadow .2s ease',
    '&:focus-within': {
      boxShadow: focusBoxShadow(theme),
      outline: 'none',
    },
  } as CSSProperties,
})
