import * as React from 'react'

import { getUserLocale } from '../../../util/locale'
import { capitalize } from '../../../util/string'
import { HFlow } from '../../layout/Flow/HFlow'
import { Button } from '../Button'

export interface MonthControlProps {
    visibleDate: Date
    onChange(newDate: Date): void
    renderMonth?(date: Date): React.ReactNode
}

const formatter = new Intl.DateTimeFormat(getUserLocale(), {
    month: 'short',
})

export class MonthControl extends React.PureComponent<MonthControlProps> {

    static defaultProps: Partial<MonthControlProps> = {
        renderMonth: (date) => capitalize(formatter.format(date)),
    }

    render() {
        const { visibleDate, renderMonth } = this.props
        return (
            <HFlow alignItems='center' hSpacing={0.5}>
                <Button icon='angleLeft' size='small' skin='ghost' onClick={this.handlePrev} />
                {renderMonth(visibleDate)}
                <Button icon='angleRight' size='small' skin='ghost' onClick={this.handleNext} />
            </HFlow>
        )
    }

    handleNext = () => {
        const { visibleDate } = this.props
        const next = new Date(visibleDate)
        next.setMonth(visibleDate.getMonth() + 1)
        return this.props.onChange(next)
    }

    handlePrev = () => {
        const { visibleDate } = this.props
        const prev = new Date(visibleDate)
        prev.setMonth(prev.getMonth() - 1)
        return this.props.onChange(prev)
    }
}
