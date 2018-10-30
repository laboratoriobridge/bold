import { css, Interpolation } from 'emotion'
import * as React from 'react'

import { Styles, Theme } from '../../../styles'
import { Omit } from '../../../util/types'
import { HFlow } from '../../layout/Flow/HFlow'

import { MonthControl } from './MonthControl'
import { MonthView, MonthViewProps } from './MonthView'
import { isSameDay } from './util'
import { YearControl } from './YearControl'

export interface CalendarProps extends Omit<MonthViewProps, 'visibleDate'> {
    /**
     * Initial visible date to render.
     * Subsequent changes to this prop will NOT change the internal component state.
     */
    initialVisibleDate?: Date

    /**
     * Map of modifier predicates to apply custom or pre-defined styles to dates.
     */
    modifiers?: Partial<DayModifierPredicateMap>

    /**
     * Map of modifier styles to be applied to a date if the respective modifier predicate applies.
     */
    modifierStyles?: Partial<DayModifierStyleMap>
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
        const { initialVisibleDate, modifiers, modifierStyles, ...rest } = this.props
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
                    createDayStyles={createDayStyles(this.modifiers(), this.modifierStyles())}
                    {...rest}
                    visibleDate={this.state.visibleDate}
                    onDayClick={this.handleDayClick}
                />
            </div>
        )
    }

    modifiers = () => ({ ...defaultModifiers, ...this.props.modifiers })

    modifierStyles = () => ({ ...defaultModifierStyles, ...this.props.modifierStyles })

    changeVisibleDate = (visibleDate) => this.setState({ visibleDate })

    handleDayClick = (day: Date) => {
        if (!this.modifiers().disabled(day, this.props)) {
            this.changeVisibleDate(day)
            return this.props.onDayClick(day)
        }
    }
}

export type ModifierFn = (day: Date, props: MonthViewProps) => boolean

export interface DayModifierPredicateMap {
    disabled: ModifierFn
    selected: ModifierFn
    today: ModifierFn
    adjacentMonth: ModifierFn
    [key: string]: ModifierFn
}

export type DayModifierStyleMap = { [key in keyof DayModifierPredicateMap]: (theme: Theme) => Interpolation }

export const defaultModifiers: DayModifierPredicateMap = {
    today: (day: Date) => isSameDay(new Date(), day),
    disabled: () => false,
    selected: () => false,
    adjacentMonth: (day: Date, { visibleDate }) => visibleDate.getMonth() !== day.getMonth(),
}

export const defaultModifierStyles: DayModifierStyleMap = {
    today: () => ({
        fontWeight: 'bold',
    }),
    disabled: (theme: Theme) => ({
        color: theme.pallete.text.disabled,
        ':hover': {
            background: 'initial',
            cursor: 'not-allowed',
        },
    }),
    selected: (theme: Theme) => ({
        background: theme.pallete.primary.main,
        color: theme.pallete.surface.main,
        fontWeight: 'bold',
        ':hover': {
            background: theme.pallete.primary.main,
            color: theme.pallete.surface.main,
        },
    }),
    adjacentMonth: (theme: Theme) => ({
        color: theme.pallete.text.disabled,
    }),
}

export const createDayStyles = (modifiers: DayModifierPredicateMap, styles: DayModifierStyleMap) =>
    (day: Date, props: MonthViewProps): Interpolation => {
        return Object.keys(modifiers).reduce((s, modifier) => {
            if (!styles[modifier]) {
                throw new Error(`You must provied a modifierStyle for predicate "${modifier}"`)
            }

            return {
                ...s,
                ...(modifiers[modifier](day, props) ? styles[modifier](props.theme) as any : {}),
            }
        }, {})
    }
