import Downshift, { ControllerStateAndHelpers, DownshiftProps, StateChangeOptions } from 'downshift'
import matchSorterAll from 'match-sorter'
import React from 'react'

// TODO: remove this dirty hack when storybook starts supporing allowSyntheticDefaultImports or a workaround is found
const matchSorter = (matchSorterAll as any).default || matchSorterAll

export interface SelectDownshiftProps<T> extends DownshiftProps<T> {
    /**
     * Items to be populated on the select component.
     */
    items: T[]

    children?(props: SelectDownshiftRenderProps<T>): React.ReactNode

    /**
     * Called when the inputValue is changed.
     * @param filter The `inputValue` or `null` if an item is selected.
     * @param downshift The downshift controller and helpers.
     */
    onFilterChange?(filter: string, downshift: SelectDownshiftRenderProps<T>): void
}

export interface SelectDownshiftRenderProps<T> extends ControllerStateAndHelpers<T>, State<T> {
    items: T[]
    setVisibleItems(visibleItems: T[]): void
}

interface State<T> {
    visibleItems: T[]
}

/**
 * Default filter prop used by the Select component.
 */
export function defaultSelectFilter<T>(
    items: T[], filter: string, itemToString: SelectDownshiftRenderProps<T>['itemToString']
): T[] {
    return matchSorter(items, filter, { keys: [itemToString] })
}

/**
 * Downshift extension with item and filter management.
 */
export class SelectDownshift<T> extends React.Component<SelectDownshiftProps<T>, State<T>> {

    static defaultProps: Partial<SelectDownshiftProps<any>> = {
        onFilterChange: (filter: string, downshift: SelectDownshiftRenderProps<any>) => {
            const { setVisibleItems, items, itemToString } = downshift
            setVisibleItems(defaultSelectFilter(items, filter, itemToString))
        },
    }

    constructor(props: SelectDownshiftProps<T>) {
        super(props)
        this.state = {
            visibleItems: props.items,
        }
    }

    componentWillReceiveProps(nextProps: SelectDownshiftProps<T>) {
        this.setState({ visibleItems: nextProps.items })
    }

    handleStateChange = (options: StateChangeOptions<T>, downshift: ControllerStateAndHelpers<T>) => {
        if (options.isOpen) {
            this.props.onFilterChange(null, this.getStateAndHelpers(downshift))
        }

        if (options.type === Downshift.stateChangeTypes.changeInput) {
            this.props.onFilterChange(options.inputValue, this.getStateAndHelpers(downshift))
        }

        if (options.type === Downshift.stateChangeTypes.clickItem ||
            options.type === Downshift.stateChangeTypes.keyDownEnter
        ) {
            this.props.onFilterChange(null, this.getStateAndHelpers(downshift))
        }

        this.props.onStateChange && this.props.onStateChange(options, this.getStateAndHelpers(downshift))
    }

    handleChange = (item: T, downshift: ControllerStateAndHelpers<T>) => {
        this.props.onChange && this.props.onChange(item, this.getStateAndHelpers(downshift))
    }

    getStateAndHelpers = (downshift: ControllerStateAndHelpers<T>): SelectDownshiftRenderProps<T> => {
        const { items } = this.props
        const { visibleItems } = this.state
        const { setVisibleItems } = this
        return {
            ...downshift,
            items,
            visibleItems,
            setVisibleItems,
        }
    }

    setVisibleItems = (visibleItems: T[]) => this.setState({ visibleItems })

    render() {
        const { items, onFilterChange, children, ...rest } = this.props

        return (
            <Downshift
                {...rest}
                onStateChange={this.handleStateChange}
                onChange={this.handleChange}
            >
                {downshift => children(this.getStateAndHelpers(downshift))}
            </Downshift>
        )
    }
}
