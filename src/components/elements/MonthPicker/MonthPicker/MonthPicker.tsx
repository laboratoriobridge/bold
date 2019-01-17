import { css } from 'emotion'
import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../../styles'
import { HFlow, VFlow } from '../../../layout'
import { Button } from '../../Button'
import { Text } from '../../textual'

export interface MonthPickerProps extends WithStylesProps {
    month: number
    year: number
    monthDescriptions?: string[]
    onChange(date: Date): any
}

export interface MonthPickerState {
    visibleYear: number
}

@withStyles
export class MonthPicker extends React.Component<MonthPickerProps, MonthPickerState> {

    static defaultProps: Partial<MonthPickerProps> = {
        monthDescriptions: [
            'Jan', 'Fev', 'Mar', 'Abr',
            'Mai', 'Jun', 'Jul', 'Ago',
            'Set', 'Out', 'Nov', 'Dez',
        ],
    }

    constructor(props: MonthPickerProps) {
        super(props)
        this.state = {
            visibleYear: props.year || new Date().getFullYear(),
        }
    }

    componentWillReceiveProps(nextProps: MonthPickerProps) {
        this.setState({ visibleYear: nextProps.year || new Date().getFullYear() })
    }

    render() {
        const { theme, monthDescriptions } = this.props
        const styles: Styles = {
            container: {
                backgroundColor: '#fff',
                width: '21.25rem',
                height: '13.5rem',
                padding: '1rem',
                border: `1px solid ${theme.pallete.divider}`,
                boxShadow: theme.shadows.outer['20'],
                borderRadius: theme.radius.popper,
            },
            header: {
                padding: '0rem 1.5rem 0rem 1rem',
            },
            content: {
                flexWrap: 'wrap',
            },
            button: {
                padding: 'calc(0.25rem - 1px) 1.375rem',
                transitionProperty: 'background',
            },
            active: {
                background: theme.pallete.primary.main + ' !important',
                color: theme.pallete.surface.main,
            },
        }

        return (
            <div>
                <VFlow style={styles.container} vSpacing={0.5}>
                    <HFlow style={styles.header} alignItems='center' justifyContent='space-between'>
                        <Button
                            title='Ano anterior'
                            size='small'
                            skin='ghost'
                            icon='angleLeft'
                            onClick={this.onLeftClick}
                        />
                        <Text weight='bold' size={0.875}>{this.state.visibleYear}</Text>
                        <Button
                            title='Ano posterior'
                            size='small'
                            skin='ghost'
                            icon='angleRight'
                            onClick={this.onRightClick}
                        />
                    </HFlow>
                    <HFlow style={styles.content} hSpacing={0.375} vSpacing={1}>
                        {monthDescriptions.map((month, index) => (
                            <Button
                                key={index}
                                onClick={this.onMonthClick(index)}
                                label={month}
                                skin='ghost'
                                style={css(styles.button, index === this.props.month
                                    && this.props.year === this.state.visibleYear && styles.active)}
                            />
                        ))}
                    </HFlow>
                </VFlow>
            </div >
        )
    }

    private onLeftClick = () => {
        this.setState({ visibleYear: this.state.visibleYear - 1 })
    }

    private onRightClick = () => {
        this.setState({ visibleYear: this.state.visibleYear + 1 })
    }

    private onMonthClick = (month: number) => () => {
        const year = this.state.visibleYear
        this.props.onChange(new Date(year, month))
    }
}
