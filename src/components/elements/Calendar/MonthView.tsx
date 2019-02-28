import { Interpolation } from 'emotion'
import React from 'react'

import { Styles, Theme, withStyles, WithStylesProps } from '../../../styles'
import { getUserLocale } from '../../../util/locale'

import { createMonthMatrix } from './util'

export interface MonthViewProps extends WithStylesProps {
  visibleDate?: Date
  onDayClick?(day: Date): void
  onDayHover?(day: Date): void
  renderDay?(day: Date): React.ReactNode
  renderWeekName?(firstWeekDay: Date): React.ReactNode
  createDayStyles?(day: Date, props: MonthViewProps): Interpolation
}

@withStyles
export class MonthView extends React.PureComponent<MonthViewProps> {
  static defaultProps: Partial<MonthViewProps> = {
    visibleDate: new Date(),
    onDayClick: () => null,
    onDayHover: () => null,
    renderDay: day => {
      const dayFormatter = new Intl.DateTimeFormat(getUserLocale(), { day: '2-digit' })
      return dayFormatter.format(day)
    },
    renderWeekName: firstWeekDay => {
      const weekFormatter = new Intl.DateTimeFormat(getUserLocale(), { weekday: 'narrow' })
      return weekFormatter.format(firstWeekDay)
    },
    createDayStyles: () => null,
  }

  render() {
    const { visibleDate, renderDay, renderWeekName, css, theme, createDayStyles } = this.props
    const month = createMonthMatrix(visibleDate)
    const styles = createStyles(theme)
    return (
      <table className={css(styles.table)}>
        <thead>
          <tr>
            {month[0].map((day, d) => (
              <th key={d}>{renderWeekName(day)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {month.map((week, w) => (
            <tr key={w}>
              {week.map((day, d) => (
                <td key={d} data-date={day.toISOString().slice(0, 10)}>
                  <span
                    className={css(styles.day, createDayStyles(day, this.props))}
                    onClick={this.handleDayClick(day)}
                    onMouseOver={this.handleDayHover(day)}
                    role='button'
                  >
                    {renderDay(day)}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  handleDayClick = (day: Date) => () => this.props.onDayClick(day)
  handleDayHover = (day: Date) => () => this.props.onDayHover(day)
}

export const createStyles = (theme: Theme): Styles => ({
  table: {
    borderCollapse: 'collapse',
    textAlign: 'center',
    lineHeight: '1.5rem',
    width: '100%',

    th: {
      width: '2rem',
      padding: '0.25rem 0',
    },
  },
  day: {
    width: '2rem',
    padding: '0.25rem 0',
    display: 'inline-block',
    borderRadius: '50%',

    ':hover': {
      cursor: 'pointer',
      background: theme.pallete.surface.background,
    },
  },
  active: {
    background: theme.pallete.primary.main,
    color: theme.pallete.surface.main,
  },
})
