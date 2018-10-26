import { Interpolation } from 'emotion'
import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Calendar, CalendarProps } from '../../../elements/Calendar'
import { Popper, PopperController } from '../../../elements/Popper'

import { DateInput, DateInputProps } from './DateInput'

export interface DatePickerInputProps extends WithStylesProps, DateInputProps {

}

@withStyles
export class DatePickerInput extends React.Component<DatePickerInputProps> {

    render() {
        const { value } = this.props
        return (
            <Popper renderTarget={this.renderTarget} placement='bottom-start' block>
                {(ctrl: PopperController) => (
                    <CalendarPopup
                        key={value && value.getTime()}
                        initialVisibleDate={value || new Date()}
                        activeDate={value}
                        onDayClick={this.handleDayClick(ctrl)}
                    />
                )}
            </Popper>
        )
    }

    renderTarget = (ctrl: PopperController) => {
        return (
            <DateInput
                icon={{ icon: 'calendar', position: 'right', onClick: ctrl.show }}
                {...this.props}
                onFocus={this.handleFocus(ctrl)}
            />
        )
    }

    handleDayClick = (ctrl: PopperController) => (day: Date) => {
        ctrl.hide()
        return this.props.onChange(day)
    }

    handleFocus = (ctrl: PopperController) => (e) => {
        ctrl.show()
        return this.props.onFocus(e)
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
