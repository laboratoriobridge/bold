import { Interpolation } from 'emotion'
import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Calendar, CalendarProps } from '../../../elements/Calendar'
import { isSameDay } from '../../../elements/Calendar/util'
import { FocusManagerContainer } from '../../../elements/FocusManagerContainer'
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
        onFocus: () => null,
        onClick: () => null,
    }

    private inputRef = React.createRef<HTMLInputElement>()
    private controller: PopperController

    render() {
        const { value, calendarProps } = this.props
        return (
            <FocusManagerContainer onFocusIn={this.handleFocusIn} onFocusOut={this.handleFocusOut}>
                <Popper
                    control={this.setController}
                    renderTarget={this.renderTarget}
                    placement='bottom-start'
                    block
                >
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
            </FocusManagerContainer>
        )
    }

    setController = (ctrl: PopperController) => {
        this.controller = ctrl
    }

    renderTarget = (ctrl: PopperController) => {
        const { calendarProps, minDate, maxDate, ...rest } = this.props
        return (
            <DateInput
                icon='calendarOutline'
                onIconClick={ctrl.show}
                {...rest}
                inputRef={this.inputRef}
                onClick={this.handleInputClick(ctrl)}
                onFocus={this.handleInputFocus(ctrl)}
            />
        )
    }

    handleDayClick = (ctrl: PopperController) => (day: Date) => {
        this.inputRef.current.focus()
        ctrl.hide()
        return this.props.onChange(day)
    }

    handleInputClick = (ctrl: PopperController) => (e: React.MouseEvent<HTMLInputElement>) => {
        ctrl.show()
        return this.props.onClick(e)
    }

    handleInputFocus = (ctrl: PopperController) => (e: React.FocusEvent<HTMLInputElement>) => {
        ctrl.show()
        return this.props.onFocus(e)
    }

    handleFocusIn = () => {
        if (this.controller) {
            this.controller.show()
        }
    }

    handleFocusOut = () => {
        if (this.controller) {
            this.controller.hide()
        }
    }
}

export interface CalendarPopupProps extends CalendarProps, WithStylesProps {
}

@withStyles
class CalendarPopup extends React.PureComponent<CalendarPopupProps> {
    render() {
        const { css, theme, ...rest } = this.props
        const styles: Interpolation = {
            background: theme.pallete.surface.main,
            boxShadow: theme.shadows.outer[40],
            borderRadius: theme.radius.popper,
            padding: '0.5rem .25rem .25rem .25rem',
            outline: 'none',
        }
        return (
            <div className={css(styles)} tabIndex={-1}>
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
