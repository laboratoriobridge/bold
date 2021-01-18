import { Interpolation } from 'emotion'
import React, { CSSProperties, MouseEvent, useCallback, useMemo } from 'react'

import { Theme, useStyles } from '../../styles'
import { HFlow } from '../HFlow'

import { MonthControl } from './MonthControl'
import { MonthView, MonthViewProps } from './MonthView'
import { isSameDay, isSameWeek } from './util'
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

  modifiersWeek?: Partial<WeekModifierPredicateMap>

  modifierWeekStyles?: Partial<WeekModifierStyleMap>

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
  const {
    onlyWeeks,
    visibleDate,
    modifiers,
    modifierStyles,
    onVisibleDateChange,
    onMouseLeave,
    isDaySelected,
    onWeekClick,
    modifiersWeek,
    modifierWeekStyles,
    ...rest
  } = props
  const { classes, theme } = useStyles(createStyles)

  const allDayModifiers = useMemo(() => ({ ...defaultModifiers, ...modifiers }), [modifiers])
  const allModifierStyles = useMemo(() => ({ ...defaultModifierStyles, ...modifierStyles }), [modifierStyles])
  const createDayStyles = useMemo(() => createDayStylesFn(allDayModifiers, allModifierStyles, theme), [
    allDayModifiers,
    allModifierStyles,
    theme,
  ])

  const allWeekModifiers = useMemo(() => ({ ...defaultWeekModifier, ...modifiersWeek }), [modifiersWeek])
  const allWeekModifierStyles = useMemo(() => ({ ...defaultModifierWeekStyles, ...modifierWeekStyles }), [
    modifierWeekStyles,
  ])

  const createWeekStyles = useMemo(() => createWeekStylesFn(allWeekModifiers, allWeekModifierStyles, theme), [
    allWeekModifiers,
    allWeekModifierStyles,
    theme,
  ])

  const handleDayClick = useCallback(
    (day: Date) => {
      if (!allDayModifiers.disabled(day, props)) {
        onVisibleDateChange(day)
        return props.onDayClick && props.onDayClick(day)
      }
    },
    [allDayModifiers, onVisibleDateChange, props]
  )

  const handleWeekClick = useCallback(
    (week: Date[]) => {
      onVisibleDateChange(week[0])
      return props.onWeekClick && props.onWeekClick(week)
    },
    [onVisibleDateChange, props]
  )

  if (onlyWeeks && onlyWeeks === true) {
    return (
      <div className={classes.root} onMouseLeave={onMouseLeave}>
        <HFlow hSpacing={0.5} justifyContent='space-around' style={classes.controls}>
          <MonthControl visibleDate={visibleDate} onChange={onVisibleDateChange} />
          <YearControl visibleDate={visibleDate} onChange={onVisibleDateChange} />
        </HFlow>
        <MonthView
          visibleDate={visibleDate}
          createWeekStyles={createWeekStyles}
          {...rest}
          onWeekClick={handleWeekClick}
          onlyWeeks={true}
        />
      </div>
    )
  } else {
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
          onlyWeeks={false}
        />
      </div>
    )
  }
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
export type ModifierWeekFn = (week: Date[], props: MonthViewProps) => boolean

export interface DayModifierPredicateMap {
  disabled: ModifierFn
  selected: ModifierFn
  today: ModifierFn
  adjacentMonth: ModifierFn
  [key: string]: ModifierFn
}

export interface WeekModifierPredicateMap {
  disabled: ModifierWeekFn
  selected: ModifierWeekFn
  todayWeek: ModifierWeekFn
  [key: string]: ModifierWeekFn
}

export type DayModifierStyleMap = { [key in keyof DayModifierPredicateMap]: (theme: Theme) => Interpolation }
export type WeekModifierStyleMap = { [key in keyof WeekModifierPredicateMap]: (theme: Theme) => Interpolation }

export const defaultModifiers: DayModifierPredicateMap = {
  today: (day: Date) => isSameDay(new Date(), day),
  disabled: () => false,
  selected: () => false,
  adjacentMonth: (day: Date, { visibleDate }) => visibleDate.getMonth() !== day.getMonth(),
}

export const defaultWeekModifier: WeekModifierPredicateMap = {
  todayWeek: (week: Date[]) => isSameWeek(new Date(), week),
  disabled: () => false,
  selected: () => false,
}

export const defaultModifierWeekStyles: WeekModifierStyleMap = {
  todayWeek: () => ({
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

export const createWeekStylesFn = (modifiers: WeekModifierPredicateMap, styles: WeekModifierStyleMap, theme: Theme) => (
  week: Date[],
  props: MonthViewProps
): Interpolation => {
  return Object.keys(modifiers).reduce((s, modifier) => {
    if (!styles[modifier]) {
      throw new Error(`You must provied a modifierStyle for predicate "${modifier}"`)
    }
    return {
      ...s,
      ...(modifiers[modifier](week, props) ? (styles[modifier](theme) as any) : {}),
    }
  }, {})
}
