import Downshift, { ControllerStateAndHelpers, DownshiftProps, StateChangeOptions } from 'downshift'
import * as matchSorterAll from 'match-sorter'
import * as React from 'react'

// TODO: remove this dirty hack when storybook starts supporing allowSyntheticDefaultImports or a workaround is found
const matchSorter = (matchSorterAll as any).default || matchSorterAll

export interface SelectDownshiftProps<T> extends DownshiftProps<T> {
    /**
     * Items to be populated on the select component or a function to be used to asynchronously them.
     */
    items: T[]

    children?(props: SelectDownshiftRenderProps<T>): React.ReactNode

    /**
     * Function used to filter the result list.
     * @param items All the items of the Select.
     * @param inputValue The string typed on the select input.
     * @param itemToString The `itemToString` function prop used by the component.
     * @returns The result item list.
     */
    filter?(items: T[], inputValue: string, itemToString: DownshiftProps<T>['itemToString']): T[]
}

export interface SelectDownshiftRenderProps<T> extends ControllerStateAndHelpers<T> {
    visibleItems: T[]
}

/**
 * Default filter prop used by the Select component.
 */
export const defaultSelectFilter: SelectDownshiftProps<any>['filter'] = (items, inputValue, itemToString) =>
    matchSorter(items, inputValue, { keys: [itemToString] })

/**
 * Downshift extension with item and filter management.
 */
export class SelectDownshift<T> extends React.Component<SelectDownshiftProps<T>> {

    static defaultProps: Partial<SelectDownshiftProps<any>> = {
        filter: defaultSelectFilter,
    }

    handleDownshiftChange = (options: StateChangeOptions<T>, stateAndHelpers: ControllerStateAndHelpers<T>) => {
        this.props.onStateChange && this.props.onStateChange(options, this.getStateAndHelpers(stateAndHelpers))
    }

    handleChange = (item: T, downshift: ControllerStateAndHelpers<T>) => {
        this.props.onChange && this.props.onChange(item, this.getStateAndHelpers(downshift))
    }

    getStateAndHelpers = (downshift: ControllerStateAndHelpers<T>): SelectDownshiftRenderProps<T> => {
        const { items, itemToString, filter } = this.props
        const { inputValue } = downshift
        return {
            ...downshift,
            visibleItems: filter(items, inputValue, itemToString),
        }
    }

    render() {
        const { items, filter, children, ...rest } = this.props

        return (
            <Downshift
                {...rest}
                onStateChange={this.handleDownshiftChange}
                onChange={this.handleChange}
            >
                {downshift => children(this.getStateAndHelpers(downshift))}
            </Downshift>
        )
    }
}
