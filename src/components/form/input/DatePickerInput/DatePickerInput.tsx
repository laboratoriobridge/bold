import * as moment from 'moment'
import * as React from 'react'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'

import { withStyles, WithStylesProps } from '../../../../styles'
import { TextInput, TextInputProps } from '../TextInput/TextInput'

export interface DatePickerInputProps extends WithStylesProps, ReactDatePickerProps,
    Pick<TextInputProps, 'status'> {

}

@withStyles
export class DatePickerInput extends React.Component<DatePickerInputProps> {

    render() {
        const { css, value, status, ...rest } = this.props
        const styles = {
            container: {
                '& .react-datepicker-wrapper': { width: '100%' },
                '& .react-datepicker__input-container': { width: '100%' },
            },
        }

        const mom = value && moment.isMoment(value) ? value : null

        return (
            <div className={css(styles.container)}>
                <DatePicker
                    selected={mom as any}
                    todayButton='Hoje'
                    locale='pt-br'
                    showYearDropdown
                    dropdownMode='select'
                    customInput={<DateInput status={status} />}
                    {...rest}
                />
            </div>
        )
    }
}

interface DateInputProps extends TextInputProps {
}

class DateInput extends React.Component<DateInputProps> {

    render() {
        return (
            <TextInput
                {...this.props}
                icon={{ icon: 'calendar', position: 'right', onClick: this.props.onClick }}
                onChange={this.handleChange}
                placeholder='dd/mm/yyyy'
                onFocus={null} // do not open datepicker when focused
                onClick={null} // do not open datepicker when clicked
            />
        )
    }

    handleChange = (e) => {
        e.target.value = this.normalize(e.target.value)

        if (this.props.onChange) {
            this.props.onChange(e)
        }
    }

    normalize = (value) => {
        const onlyNums = value.replace(/[^\d]/g, '')
        if (onlyNums.length < 3) {
            return onlyNums
        } else if (onlyNums.length < 5) {
            return onlyNums.slice(0, 2) + '/' + onlyNums.slice(2, 4)
        } else {
            return onlyNums.slice(0, 2) + '/' + onlyNums.slice(2, 4) + '/' + onlyNums.slice(4, 8)
        }
    }

}
