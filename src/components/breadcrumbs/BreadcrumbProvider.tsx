import * as PropTypes from 'prop-types'
import * as React from 'react'

import { BreadcrumbSimpleStore, BreadcrumbStore } from './BreadcrumbStore'

export interface BreadcrumbProviderProps {
    store?: BreadcrumbStore
}

export class BreadcrumbProvider extends React.Component<BreadcrumbProviderProps> {

    static childContextTypes = {
        breadcrumbs: PropTypes.object,
    }

    static defaultProps: BreadcrumbProviderProps = {
        store: new BreadcrumbSimpleStore(),
    }

    getChildContext() {
        return {
            breadcrumbs: this.props.store,
        }
    }

    render() {
        return this.props.children
    }
}
