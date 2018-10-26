import * as React from 'react'

import { getUserLocale } from '../../../util/locale'
import { HFlow } from '../../layout/Flow/HFlow'
import { Button } from '../Button'

export interface YearControlProps {
    visibleDate: Date
    onChange(newDate: Date): void
    renderYear?(date: Date): React.ReactNode
}

const formatter = new Intl.DateTimeFormat(getUserLocale(), {
    year: 'numeric',
})

export class YearControl extends React.PureComponent<YearControlProps> {

    static defaultProps: Partial<YearControlProps> = {
        renderYear: (date) => formatter.format(date),
    }

    render() {
        const { visibleDate, renderYear } = this.props
        return (
            <HFlow alignItems='center' hSpacing={0.5}>
                <Button icon='angleLeft' size='small' skin='ghost' onClick={this.handlePrev} tabIndex={-1} />
                {renderYear(visibleDate)}
                <Button icon='angleRight' size='small' skin='ghost' onClick={this.handleNext} tabIndex={-1} />
            </HFlow>
        )
    }

    handleNext = () => {
        const { visibleDate } = this.props
        const next = new Date(visibleDate)
        next.setFullYear(visibleDate.getFullYear() + 1)
        return this.props.onChange(next)
    }

    handlePrev = () => {
        const { visibleDate } = this.props
        const prev = new Date(visibleDate)
        prev.setFullYear(prev.getFullYear() - 1)
        return this.props.onChange(prev)
    }
}
