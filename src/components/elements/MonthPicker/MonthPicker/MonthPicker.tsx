import { css } from 'emotion'
import React, { CSSProperties, useEffect, useState } from 'react'

import { useLocale } from '../../../../locale'
import { Theme, useStyles } from '../../../../styles'
import { Button } from '../../Button'
import { HFlow, VFlow } from '../../Flow'
import { Icon } from '../../Icon'
import { Text } from '../../textual'

export interface MonthPickerProps {
  month: number
  year: number
  monthDescriptions?: string[]
  onChange(referenceMonth: ReferenceMonth): any
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

export function MonthPicker(props: MonthPickerProps) {
  const { monthDescriptions, year, onChange } = props
  const { classes } = useStyles(createStyles)
  const locale = useLocale()

  const [visibleYear, setVisibleYear] = useState(year || new Date().getFullYear())
  useEffect(() => {
    setVisibleYear(year || new Date().getFullYear())
  }, [year])

  const onLeftClick = () => setVisibleYear(currYear => currYear - 1)
  const onRightClick = () => setVisibleYear(currYear => currYear + 1)

  const onMonthClick = (month: number) => () => {
    onChange({ month, year: visibleYear })
  }

  return (
    <div>
      <VFlow style={classes.container} vSpacing={0.5}>
        <HFlow style={classes.header} alignItems='center' justifyContent='space-between'>
          <Button title={locale.calendar.previousYear} size='small' skin='ghost' onClick={onLeftClick}>
            <Icon icon='angleLeft' />
          </Button>
          <Text weight='bold' size={0.875}>
            {visibleYear}
          </Text>
          <Button title={locale.calendar.nextYear} size='small' skin='ghost' onClick={onRightClick}>
            <Icon icon='angleRight' />
          </Button>
        </HFlow>
        <HFlow style={classes.content} hSpacing={0.375} vSpacing={1}>
          {monthDescriptions.map((month, index) => (
            <Button
              key={index}
              onClick={onMonthClick(index)}
              skin='ghost'
              style={css(classes.button, index === props.month && props.year === visibleYear && classes.active)}
            >
              {month}
            </Button>
          ))}
        </HFlow>
      </VFlow>
    </div>
  )
}

MonthPicker.defaultProps = {
  monthDescriptions: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
} as Partial<MonthPickerProps>

export const createStyles = (theme: Theme) => ({
  container: {
    backgroundColor: theme.pallete.surface.main,
    width: '21.25rem',
    height: '13.5rem',
    padding: '1rem',
    border: `1px solid ${theme.pallete.divider}`,
    boxShadow: theme.shadows.outer['20'],
    borderRadius: theme.radius.popper,
  } as CSSProperties,
  header: {
    padding: '0rem 1.5rem 0rem 1rem',
  } as CSSProperties,
  content: {
    flexWrap: 'wrap',
  } as CSSProperties,
  button: {
    padding: 'calc(0.25rem - 1px) 1.375rem',
    transitionProperty: 'background',
  } as CSSProperties,
  active: {
    background: theme.pallete.primary.main + ' !important',
    color: theme.pallete.surface.main,
  } as CSSProperties,
})
