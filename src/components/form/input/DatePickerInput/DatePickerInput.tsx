import { Interpolation } from 'emotion'
import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Calendar, CalendarProps } from '../../../elements/Calendar'
import { isSameDay } from '../../../elements/Calendar/util'
import { Popper, PopperController } from '../../../elements/Popper'

import { DateInput, DateInputProps } from './DateInput'

export interface DatePickerInputProps extends WithStylesProps, DateInputProps {

}

@withStyles
export class DatePickerInput extends React.Component<DatePickerInputProps> {

    static defaultProps: Partial<DatePickerInputProps> = {
        onChange: () => null,
        onBlur: () => null,
        onFocus: () => null,
    }

    render() {
        const { value } = this.props
        return (
            <Popper renderTarget={this.renderTarget} placement='bottom-start' block>
                {(ctrl: PopperController) => (
                    <CalendarPopup
                        key={value && value.getTime()}
                        initialVisibleDate={value || new Date()}
                        onDayClick={this.handleDayClick(ctrl)}
                        modifiers={{
                            selected: (day) => value && isSameDay(day, value),
                        }}
                    />
                )}
            </Popper>
        )
    }

    renderTarget = (ctrl: PopperController) => {
        return (
            <DateInput
                {...this.props}
                icon={{ icon: 'calendar', position: 'right', onClick: ctrl.show }}
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
