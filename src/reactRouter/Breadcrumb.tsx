import * as React from 'react'
import Store, { BreadcrumbActionType } from './CrumbStore'
import UUID from '../util/UUID'
import { RouteComponentProps } from 'react-router'
import { withRouter } from 'react-router-dom'

export interface BreadcrumbProps {
    hidden?: boolean
    icon?: string
    title?: string
}

export interface BreadcrumbState {
    id: string
}

class BreadcrumbCmp extends React.PureComponent<BreadcrumbProps & RouteComponentProps<any>, BreadcrumbState> {

    constructor(props, context?) {
        super(props, context)

        this.state = {
            id: UUID.generateUUID()
        }
    }

    componentDidMount() {
        if (!this.props.hidden) {
            this._dispatch('ADD_CRUMB', this.props)
        }
    }

    componentWillReceiveProps(nextProps: BreadcrumbProps & RouteComponentProps<any>) {
        if (nextProps.hidden && !this.props.hidden) {
            this._dispatch('REMOVE_CRUMB', nextProps)
        } else if (!nextProps.hidden && this.props.hidden) {
            this._dispatch('ADD_CRUMB', nextProps)
        } else {
            this._dispatch('UPDATE_CRUMB', nextProps)
        }
    }

    componentWillUnmount() {
        this._dispatch('REMOVE_CRUMB', this.props)
    }

    render() {
        return this.props.children as any
    }

    private _dispatch = (action: BreadcrumbActionType, props: BreadcrumbProps & RouteComponentProps<any>) => {
        Store.dispatch({
            type: action,
            payload: {
                id: this.state.id,
                title: props.title,
                icon: props.icon,
                location: props.location,
                match: props.match
            }
        })
    }

}

export const Breadcrumb: React.ComponentClass<BreadcrumbProps> = withRouter(BreadcrumbCmp)
