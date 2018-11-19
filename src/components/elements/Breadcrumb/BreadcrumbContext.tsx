import * as React from 'react'

import { BreadcrumbSimpleStore, BreadcrumbStore } from './BreadcrumbStore'

const defaultStore = new BreadcrumbSimpleStore()

export const BreadcrumbContext = React.createContext<BreadcrumbStore>(defaultStore)

export const BreadcrumbConsumer = BreadcrumbContext.Consumer

export interface BreadcrumbProviderProps {
    value?: BreadcrumbSimpleStore
}

export class BreadcrumbProvider extends React.PureComponent<BreadcrumbProviderProps> {
    static defaultProps: BreadcrumbProviderProps = {
        value: defaultStore,
    }

    render() {
        return (
            <BreadcrumbContext.Provider value={this.props.value} {...this.props} />
        )
    }
}
