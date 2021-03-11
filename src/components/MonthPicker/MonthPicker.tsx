import { css, Interpolation } from 'emotion'
import React, { CSSProperties, forwardRef, useCallback, useMemo } from 'react'

import { useLocale } from '../../i18n'
import { Theme, useStyles } from '../../styles'
import { getUserLocale, getMonthNames } from '../../util/locale'
import { Button } from '../Button'
import { ModifierFn } from '../Calendar/Calendar'
import { Icon } from '../Icon'
import { isSameReferenceMonth } from '../MonthRangePicker/util'
import { Text } from '../Text'

export interface MonthPickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  visibleMonth: ReferenceMonth

  /**
   * Map of modifier predicates to apply custom or pre-defined styles to dates.
   */
  modifiers?: Partial<MonthModifierPredicateMap>

  /**
   * Map of modifier styles to be applied to a date if the respective modifier predicate applies.
   */
  modifierStyles?: Partial<MonthModifierStyleMap>

  onVisibleMonthChange(visibleMonth: ReferenceMonth): void
  onMouseLeave?(): void
  onMonthHover?(month: ReferenceMonth): void

  formatter?: (date: Date, month: Intl.DateTimeFormat) => string
  onMonthClick?(refMonth: ReferenceMonth): void

  isDisabled?(month: ReferenceMonth): boolean
}

/**
 * Interface representing the selected month.
 *  @
 * Months are zero indexed, so January is month 0.
 */
export interface ReferenceMonth {
  month: number
  year: number
}

export const MonthPicker = forwardRef<HTMLDivElement, MonthPickerProps>((props, ref) => {
  const {
    visibleMonth,
    modifierStyles,
    modifiers,
    formatter,
    onMouseLeave,
    onMonthHover,
    onMonthClick,
    onVisibleMonthChange,
    isDisabled,
    className,
    ...rest
  } = props
  const { classes, theme } = useStyles(createStyles)
  const locale = useLocale()

  const onLeftClick = () => {
    const year = visibleMonth.year - 1
    return onVisibleMonthChange({ month: visibleMonth.month, year: year })
  }
  const onRightClick = () => {
    const year = visibleMonth.year + 1
    return onVisibleMonthChange({ month: visibleMonth.month, year: year })
  }

  const baseYearDate = new Date(visibleMonth.year, 1, 1, 0, 0, 0, 0)
  const yearFormatter = new Intl.DateTimeFormat(getUserLocale(), { year: 'numeric' })

  const monthNames = getMonthNames(getUserLocale(), formatter)

  const allModifiers = useMemo(() => ({ ...defaultModifiers, ...modifiers }), [modifiers])

  const allModifierStyles = useMemo(() => ({ ...defaultModifierStyles, ...modifierStyles }), [modifierStyles])

  const createMonthStyles = useMemo(() => createMonthStylesFn(allModifiers, allModifierStyles, theme), [
    allModifiers,
    allModifierStyles,
    theme,
  ])

  const handleMonthHover = useCallback((month: ReferenceMonth) => () => onMonthHover(month), [onMonthHover])

  const handleMonthClick = useCallback(
    (month: ReferenceMonth) => () => {
      onVisibleMonthChange(month)
      return onMonthClick && onMonthClick(month)
    },
    [onMonthClick, onVisibleMonthChange]
  )

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
          <div key={index} onMouseLeave={onMouseLeave} className={css(classes.item)}>
            <Button
              title={month.long}
              onClick={handleMonthClick({ month: index, year: visibleMonth.year })}
              skin='ghost'
              onMouseOver={handleMonthHover({ month: index, year: visibleMonth.year })}
              style={css(classes.button, createMonthStyles({ month: index, year: visibleMonth.year }))}
              disabled={isDisabled && isDisabled({ month: index, year: visibleMonth.year })}
            >
              {month.short}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
})

MonthPicker.defaultProps = {
  onMonthClick: () => null,
  onMonthHover: () => null,
} as Partial<MonthPickerProps>

export interface MonthModifierPredicateMap {
  selected: ModifierFn
  current: ModifierFn
  [key: string]: ModifierFn
}

export type MonthModifierStyleMap = { [key in keyof MonthModifierPredicateMap]: (theme: Theme) => Interpolation }

export const defaultModifiers: MonthModifierPredicateMap = {
  current: (month: ReferenceMonth) =>
    isSameReferenceMonth({ month: new Date().getMonth(), year: new Date().getFullYear() }, month),
  selected: () => false,
}

export const defaultModifierStyles: MonthModifierStyleMap = {
  current: () => ({
    fontWeight: 'bold',
    textDecoration: 'underline',
  }),
  selected: (theme: Theme) => ({
    background: theme.pallete.primary.main,
    color: theme.pallete.surface.main,
    ':hover': {
      background: theme.pallete.primary.main + '!important',
      color: theme.pallete.surface.main,
    },
  }),
}

export const createMonthStylesFn = (
  modifiers: MonthModifierPredicateMap,
  styles: MonthModifierStyleMap,
  theme: Theme
) => (month: ReferenceMonth): Interpolation => {
  return Object.keys(modifiers).reduce((s, modifier) => {
    if (!styles[modifier]) {
      throw new Error(`You must provied a modifierStyle for predicate "${modifier}"`)
    }
    return {
      ...s,
      ...(modifiers[modifier](month, null) ? (styles[modifier](theme) as any) : {}),
    }
  }, {})
}

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
    borderRadius: '0.25rem',
  } as CSSProperties,
  button: {
    padding: 'calc(0.25rem - 1px) 1rem',
    transitionProperty: 'background',
    minWidth: '70px',
  } as CSSProperties,
  active: {
    background: theme.pallete.primary.main,
    color: theme.pallete.surface.main,
  } as CSSProperties,
})
