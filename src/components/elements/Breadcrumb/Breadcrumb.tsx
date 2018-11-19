import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { withRouter } from 'react-router-dom'

import { Omit } from '../../../util/types'

import { BreadcrumbConsumer } from './BreadcrumbContext'
import { BreadcrumbEntry, BreadcrumbStore } from './BreadcrumbStore'

export interface BreadcrumbProps extends Pick<BreadcrumbEntry, 'title' | 'to'>, RouteComponentProps {
    store: BreadcrumbStore
}

class BreadcrumbCmp extends React.Component<BreadcrumbProps> {

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
        this.props.store.push(this.entry)
    }

    componentWillUnmount() {
        this.props.store.pop(this.entry)
    }

    render() {
        return null
    }
}

export const Breadcrumb = withRouter((props: Omit<BreadcrumbProps, 'store'>) => (
    <BreadcrumbConsumer>
        {value => <BreadcrumbCmp store={value} {...props} />}
    </BreadcrumbConsumer>
))
