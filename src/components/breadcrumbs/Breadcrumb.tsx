import * as PropTypes from 'prop-types'
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { withRouter } from 'react-router-dom'

import { BreadcrumbEntry, BreadcrumbStore } from './BreadcrumbStore'

export interface BreadcrumbProps extends Pick<BreadcrumbEntry, 'title' | 'to'>, RouteComponentProps<any> {
}

class BreadcrumbCmp extends React.Component<BreadcrumbProps> {

    static contextTypes = {
        breadcrumbs: PropTypes.object,
    }

    private entry: BreadcrumbEntry

    constructor(props: BreadcrumbProps) {
        super(props)
        this.entry = {
            key: Math.random().toString(36).substring(2),
            title: props.title,
            to: props.to || props.match.url,
        }
    }

    componentDidMount() {
        this.store().push(this.entry)
    }

    componentWillUnmount() {
        this.store().pop(this.entry)
    }

    render() {
        return null
    }

    private store(): BreadcrumbStore {
        if (!this.context.breadcrumbs) {
            throw new Error('No <BreadcrumbProvider> specified.')
        }

        return this.context.breadcrumbs
    }
}

export const Breadcrumb = withRouter(BreadcrumbCmp)
Breadcrumb.displayName = 'Breadcrumb'
