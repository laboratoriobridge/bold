import Downshift, { ControllerStateAndHelpers, DownshiftProps, StateChangeOptions } from 'downshift'
import * as matchSorterAll from 'match-sorter'
import * as React from 'react'

// TODO: remove this dirty hack when storybook starts supporing allowSyntheticDefaultImports or a workaround is found
const matchSorter = (matchSorterAll as any).default || matchSorterAll

/**
 * Function to be used to asynchronously load the select items.
 * @param inputValue The string typed on the select input.
 * @param populate Function that receive the loaded items to populate the select.
 */
export type SelectLoadFn<T> = (inputValue: string, populate: (items: T[]) => void) => void

export interface SelectDownshiftProps<T> extends DownshiftProps<T> {
    /**
     * Items to be populated on the select component or a function to be used to asynchronously them.
     */
    items: T[] | SelectLoadFn<T>

    onChange?(item: T, downshift: SelectDownshiftRenderProps<T>): void

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

export interface SelectDownshiftRenderProps<T> extends ControllerStateAndHelpers<T>, State<T> {
    load(inputValue: string): void
}

interface State<T> {
    loadedItems: T[]
    isLoading: boolean
    isFirstLoading: boolean
    isAsync: boolean
}

/**
 * Default filter prop used by the Select component.
 */
export const defaultSelectFilter: SelectDownshiftProps<any>['filter'] = (items, inputValue, itemToString) =>
    matchSorter(items, inputValue, { keys: [itemToString] })

/**
 * Downshift extension with item loading and filter management.
 */
export class SelectDownshift<T> extends React.Component<SelectDownshiftProps<T>, State<T>> {

    static defaultProps: Partial<SelectDownshiftProps<any>> = {
        filter: defaultSelectFilter,
    }

    constructor(props: SelectDownshiftProps<T>) {
        super(props)
        this.state = {
            isLoading: false,
            loadedItems: typeof props.items === 'object' ? props.items : [],
            isFirstLoading: true,
            isAsync: typeof props.items !== 'object',
        }
    }

    load = (inputValue: string) => {
        const { items, filter, itemToString } = this.props

        if (typeof items === 'function') {
            this.setState({ isLoading: true, loadedItems: [] }, () => {
                items(inputValue, (loadedItems) => {
                    this.setState({
                        isLoading: false,
                        isFirstLoading: false,
                        loadedItems,
                    })
                })
            })
        } else {
            this.setState({
                isLoading: false,
                isFirstLoading: false,
                loadedItems: filter(items, inputValue, itemToString),
            })
        }
    }

    handleDownshiftChange = (options: StateChangeOptions<T>, stateAndHelpers: ControllerStateAndHelpers<T>) => {
        if (this.state.isFirstLoading // Reload items on first interaction
            || options.type === Downshift.stateChangeTypes.changeInput // Reload items when inputValue is changed
        ) {
            this.load(options.inputValue)
        }

        this.props.onStateChange && this.props.onStateChange(options, this.getStateAndHelpers(stateAndHelpers))
    }

    handleChange = (item: T, downshift: ControllerStateAndHelpers<T>) => {
        this.props.onChange && this.props.onChange(item, this.getStateAndHelpers(downshift))
    }

    getStateAndHelpers = (downshift: ControllerStateAndHelpers<T>): SelectDownshiftRenderProps<T> => ({
        ...downshift,
        ...this.state,
        load: this.load,
    })

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
