import Downshift, { ControllerStateAndHelpers, DownshiftProps, StateChangeOptions } from 'downshift'
import * as matchSorter from 'match-sorter'
import * as React from 'react'

/**
 * Function to be used to asynchronously load the select items.
 * @param inputValue The string typed on the select input.
 * @returns The select items to be populated on the componente.
 */
export type SelectLoadFn<T> = (inputValue: string) => Promise<T[]>

export interface SelectDownshiftProps<T> extends DownshiftProps<T> {
    /**
     * Items to be populated on the select component or a function to be used to asynchronously them.
     */
    items: T[] | SelectLoadFn<T>

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
            this.setState({ isLoading: true, loadedItems: [] })

            return items(inputValue).then(res => {
                this.setState({
                    isLoading: false,
                    isFirstLoading: false,
                    loadedItems: res,
                })
                return res
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
        if (this.state.isFirstLoading || options.type === Downshift.stateChangeTypes.changeInput) {
            this.load(options.inputValue)
        }
    }

    render() {
        const { load } = this
        const { items, filter, children, ...rest } = this.props

        return (
            <Downshift
                {...rest}
                onStateChange={this.handleDownshiftChange}
            >
                {downshift => children({
                    ...downshift,
                    ...this.state,
                    load,
                })}
            </Downshift>
        )
    }
}
