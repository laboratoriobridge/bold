import { Interpolation } from 'emotion'
import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Calendar, CalendarProps } from '../../../elements/Calendar'
import { isSameDay } from '../../../elements/Calendar/util'
import { Popper, PopperController } from '../../../elements/Popper'

import { DateInput, DateInputProps } from './DateInput'

export interface DatePickerInputProps extends DateInputProps {
    /**
     * Minimum date that can be selected in the calendar
     */
    minDate?: Date

    /**
     * Maximum date that can be selected in the calendar.
     */
    maxDate?: Date

    /**
     * Props delegated to the Calendar
     */
    calendarProps?: CalendarProps
}

export class DatePickerInput extends React.Component<DatePickerInputProps> {

    static defaultProps: Partial<DatePickerInputProps> = {
        onChange: () => null,
        onBlur: () => null,
        onFocus: () => null,
    }

    render() {
        const { value, calendarProps } = this.props
        return (
            <Popper renderTarget={this.renderTarget} placement='bottom-start' block>
                {(ctrl: PopperController) => (
                    <CalendarPopup
                        key={value && value.getTime()}
                        initialVisibleDate={value || new Date()}
                        onDayClick={this.handleDayClick(ctrl)}
                        modifiers={{
                            selected: (day) => value && isSameDay(day, value),
                            disabled: disableByRange(this.props.minDate, this.props.maxDate),
                        }}
                        {...calendarProps}
                    />
                )}
            </Popper>
        )
    }

    renderTarget = (ctrl: PopperController) => {
        const { calendarProps, minDate, maxDate, ...rest } = this.props
        return (
            <DateInput
                icon={{ icon: 'calendar', position: 'right', onClick: ctrl.show }}
                {...rest}
                onChange={this.handleInputChange}
                onFocus={this.handleFocus(ctrl)}
                onBlur={this.handleBlur(ctrl)}
            />
        )
    }

    handleDayClick = (ctrl: PopperController) => (day: Date) => {
        ctrl.hide()
        return this.props.onChange(day)
    }

    handleInputChange = (date) => {
        return this.props.onChange(date)
    }

    handleFocus = (ctrl: PopperController) => (e) => {
        ctrl.show()
        return this.props.onFocus(e)
    }

    handleBlur = (ctrl: PopperController) => (e) => {
        return this.props.onBlur(e)
    }
}

@withStyles
class CalendarPopup extends React.PureComponent<CalendarProps & WithStylesProps> {
    render() {
        const { css, theme, ...rest } = this.props
        const styles: Interpolation = {
            background: theme.pallete.surface.main,
            boxShadow: theme.shadows.outer[40],
            borderRadius: theme.radius.popper,
            padding: '0.5rem .25rem .25rem .25rem',
        }
        return (
            <div className={css(styles)}>
                <Calendar {...rest} />
            </div>
        )
    }
}

export const disableByRange = (minDate?: Date, maxDate?: Date) => {
    const realMinDate = new Date(minDate)
    realMinDate.setHours(0, 0, 0, 0)

    const realMaxDate = new Date(maxDate)
    realMaxDate.setHours(23, 59, 59, 999)

    return (day: Date) => {
        return (minDate && day < realMinDate) || (maxDate && day > realMaxDate)
    }
}
