import { css } from 'emotion'
import * as React from 'react'

import { Styles } from '../../../styles'
import { Omit } from '../../../util/types'
import { HFlow } from '../../layout/Flow/HFlow'

import { MonthControl } from './MonthControl'
import { MonthView, MonthViewProps } from './MonthView'
import { isSameDay } from './util'
import { YearControl } from './YearControl'

export interface CalendarProps extends Omit<MonthViewProps, 'visibleDate'> {
    /**
     * Current selected date.
     */
    activeDate?: Date

    /**
     * Initial visible date to render.
     * Subsequent changes to this prop will NOT change the internal component state.
     */
    initialVisibleDate?: Date
}

export interface CalendarState {
    /**
     * Current visible calendar date.
     */
    visibleDate: Date
}

export class Calendar extends React.PureComponent<CalendarProps, CalendarState> {

    static defaultProps: Partial<CalendarProps> = {
        initialVisibleDate: new Date(),
    }

    state: CalendarState = {
        visibleDate: this.props.initialVisibleDate,
    }

    render() {
        const { activeDate, initialVisibleDate, ...rest } = this.props
        const styles: Styles = {
            root: {
                width: 288,
            },
            controls: {
                marginBottom: '0.5rem',
                fontWeight: 'bold',
            },
        }
        return (
            <div className={css(styles.root)}>
                <HFlow hSpacing={0.5} justifyContent='space-around' style={styles.controls}>
                    <MonthControl
                        visibleDate={this.state.visibleDate}
                        onChange={this.changeVisibleDate}
                    />
                    <YearControl
                        visibleDate={this.state.visibleDate}
                        onChange={this.changeVisibleDate}
                    />
                </HFlow>

                <MonthView
                    createDayStyles={createDayStyles(this.props)}
                    {...rest}
                    visibleDate={this.state.visibleDate}
                    onDayClick={this.handleDayClick}
                />
            </div>
        )
    }

    changeVisibleDate = (visibleDate) => this.setState({ visibleDate })

    handleDayClick = (day: Date) => {
        this.changeVisibleDate(day)
        return this.props.onDayClick(day)
    }
}

export const createDayStyles = (calendarProps: CalendarProps) => (day: Date, props: MonthViewProps): Styles => {
    if (calendarProps.activeDate && isSameDay(calendarProps.activeDate, day)) {
        return {
            background: props.theme.pallete.primary.main,
            color: props.theme.pallete.surface.main,
            fontWeight: 'bold',
            ':hover': {
                background: props.theme.pallete.primary.main,
                color: props.theme.pallete.surface.main,
            },
        }
    }

    if (isSameDay(new Date(), day)) {
        return {
            fontWeight: 'bold',
        }
    }

    if (day.getMonth() !== props.visibleDate.getMonth()) {
        return {
            color: props.theme.pallete.text.disabled,
        }
    }

    return null
}
