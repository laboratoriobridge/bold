import { css } from 'emotion'
import React, { CSSProperties, forwardRef, useEffect, useState } from 'react'

import { useLocale } from '../../i18n'
import { Theme, useStyles } from '../../styles'
import { getUserLocale, getMonthNames } from '../../util/locale'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Text } from '../Text'

export interface MonthPickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  month?: number
  year?: number
  formatter?: (date: Date, month: Intl.DateTimeFormat) => string
  onChange?(referenceMonth: ReferenceMonth): any
}

/**
 * Interface representing the selected month.
 *
 * Months are zero indexed, so January is month 0.
 */
export interface ReferenceMonth {
  month: number
  year: number
}

export const MonthPicker = forwardRef<HTMLDivElement, MonthPickerProps>((props, ref) => {
  const { year, month, formatter, onChange, className, ...rest } = props
  const { classes } = useStyles(createStyles)
  const locale = useLocale()

  const [visibleYear, setVisibleYear] = useState(year || new Date().getFullYear())
  useEffect(() => {
    setVisibleYear(year || new Date().getFullYear())
  }, [year])

  const onLeftClick = () => setVisibleYear((currYear) => currYear - 1)
  const onRightClick = () => setVisibleYear((currYear) => currYear + 1)

  const onMonthClick = (month: number) => () => {
    onChange({ month, year: visibleYear })
  }

  const baseYearDate = new Date(visibleYear, 1, 1, 0, 0, 0, 0)
  const yearFormatter = new Intl.DateTimeFormat(getUserLocale(), { year: 'numeric' })

  const monthNames = getMonthNames(getUserLocale(), formatter)

  return (
    <div className={css(classes.container, className)} ref={ref} {...rest}>
      <div className={classes.months}>
        <div className={classes.item}>
          <Button title={locale.calendar.previousYear} size='small' skin='ghost' onClick={onLeftClick}>
            <Icon icon='angleLeft' />
          </Button>
        </div>
        <div className={classes.item}>
          <Text fontWeight='bold' fontSize={0.875}>
            {yearFormatter.format(baseYearDate)}
          </Text>
        </div>
        <div className={classes.item}>
          <Button title={locale.calendar.nextYear} size='small' skin='ghost' onClick={onRightClick}>
            <Icon icon='angleRight' />
          </Button>
        </div>

        {monthNames.map((month, index) => (
          <div key={index} className={classes.item}>
            <Button
              title={month.long}
              onClick={onMonthClick(index)}
              skin='ghost'
              style={css(classes.button, index === props.month && props.year === visibleYear && classes.active)}
            >
              {month.short}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
})

export const createStyles = (theme: Theme) => ({
  container: {
    backgroundColor: theme.pallete.surface.main,
    display: 'inline-block',
    padding: '1rem',
    border: `1px solid ${theme.pallete.divider}`,
    boxShadow: theme.shadows.outer['20'],
    borderRadius: theme.radius.popper,
  } as CSSProperties,
  header: {
    padding: '0rem 1.5rem 0rem 1rem',
  } as CSSProperties,
  months: {
    margin: '-0.25rem -0.25rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    alignItems: 'center',
  } as CSSProperties,
  item: {
    textAlign: 'center',
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
