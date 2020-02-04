import { Interpolation } from 'emotion'
import React, { CSSProperties, MouseEvent, useCallback, useMemo } from 'react'

import { Theme, useStyles } from '../../styles'
import { HFlow } from '../HFlow'

import { MonthControl } from './MonthControl'
import { MonthView, MonthViewProps } from './MonthView'
import { isSameDay } from './util'
import { YearControl } from './YearControl'

export interface CalendarProps extends MonthViewProps {
  /**
   * Map of modifier predicates to apply custom or pre-defined styles to dates.
   */
  modifiers?: Partial<DayModifierPredicateMap>

  /**
   * Map of modifier styles to be applied to a date if the respective modifier predicate applies.
   */
  modifierStyles?: Partial<DayModifierStyleMap>

  /**
   * Called when the current visible date changes.
   * You might want to change the current `visibleDate` prop when this occurs.
   * @param visibleDate The new visible date.
   */
  onVisibleDateChange(visibleDate: Date): void

  /**
   *
   */
  onMouseLeave?(e: MouseEvent<HTMLDivElement>): void

  /**
   *
   */
  isDaySelected?(day: Date): boolean
}

export function Calendar(props: CalendarProps) {
  const { visibleDate, modifiers, modifierStyles, onVisibleDateChange, onMouseLeave, isDaySelected, ...rest } = props
  const { classes, theme } = useStyles(createStyles)

  const allModifiers = useMemo(() => ({ ...defaultModifiers, ...modifiers }), [modifiers])
  const allModifierStyles = useMemo(() => ({ ...defaultModifierStyles, ...modifierStyles }), [modifierStyles])
  const createDayStyles = useMemo(() => createDayStylesFn(allModifiers, allModifierStyles, theme), [
    allModifiers,
    allModifierStyles,
    theme,
  ])

  const handleDayClick = useCallback(
    (day: Date) => {
      if (!allModifiers.disabled(day, props)) {
        onVisibleDateChange(day)
        return props.onDayClick && props.onDayClick(day)
      }
    },
    [allModifiers, onVisibleDateChange, props]
  )

  return (
    <div className={classes.root} onMouseLeave={onMouseLeave}>
      <HFlow hSpacing={0.5} justifyContent='space-around' style={classes.controls}>
        <MonthControl visibleDate={visibleDate} onChange={onVisibleDateChange} />
        <YearControl visibleDate={visibleDate} onChange={onVisibleDateChange} />
      </HFlow>
      <MonthView
        visibleDate={visibleDate}
        createDayStyles={createDayStyles}
        {...rest}
        onDayClick={handleDayClick}
        isDaySelected={isDaySelected}
      />
    </div>
  )
}

export const createStyles = () => ({
  root: {
    width: 288,
  } as CSSProperties,
  controls: {
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  } as CSSProperties,
})

export type ModifierFn = (day: Date, props: MonthViewProps) => boolean

export interface DayModifierPredicateMap {
  disabled: ModifierFn
  selected: ModifierFn
  today: ModifierFn
  adjacentMonth: ModifierFn
  [key: string]: ModifierFn
}

export type DayModifierStyleMap = { [key in keyof DayModifierPredicateMap]: (theme: Theme) => Interpolation }

export const defaultModifiers: DayModifierPredicateMap = {
  today: (day: Date) => isSameDay(new Date(), day),
  disabled: () => false,
  selected: () => false,
  adjacentMonth: (day: Date, { visibleDate }) => visibleDate.getMonth() !== day.getMonth(),
}

export const defaultModifierStyles: DayModifierStyleMap = {
  today: () => ({
    fontWeight: 'bold',
  }),
  disabled: (theme: Theme) => ({
    color: theme.pallete.text.disabled,
    ':hover': {
      background: 'initial',
      cursor: 'not-allowed',
    },
  }),
  selected: (theme: Theme) => ({
    background: theme.pallete.primary.main,
    color: theme.pallete.surface.main,
    fontWeight: 'bold',
    ':hover': {
      background: theme.pallete.primary.main,
      color: theme.pallete.surface.main,
    },
  }),
  adjacentMonth: (theme: Theme) => ({
    color: theme.pallete.text.disabled,
  }),
}

export const createDayStylesFn = (modifiers: DayModifierPredicateMap, styles: DayModifierStyleMap, theme: Theme) => (
  day: Date,
  props: MonthViewProps
): Interpolation => {
  return Object.keys(modifiers).reduce((s, modifier) => {
    if (!styles[modifier]) {
      throw new Error(`You must provied a modifierStyle for predicate "${modifier}"`)
    }

    return {
      ...s,
      ...(modifiers[modifier](day, props) ? (styles[modifier](theme) as any) : {}),
    }
  }, {})
}
