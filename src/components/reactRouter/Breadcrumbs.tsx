import * as React from 'react'
import { Link } from 'react-router-dom'
import Store, { Crumb } from './CrumbStore'
import { Icon } from '../elements/Icon'
import { Unsubscribe } from 'redux'

export interface BreadcrumbsProps {
    className?: string
    hidden?: boolean
    wrapper?: React.SFC | React.ComponentClass
}

export class Breadcrumbs extends React.PureComponent<BreadcrumbsProps> {

    static defaultProps: Partial<BreadcrumbsProps> = {
        wrapper: props => (
            <ul>
                {props.children}
            </ul>
        )
    }
    private _unsubscribe: Unsubscribe

    componentWillMount() {
        this._unsubscribe = Store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount() {
        this._unsubscribe()
    }

    render() {
        const { wrapper: Wrapper, hidden } = this.props

        if (hidden) {
            return null
        }

        const crumbs = Store.getState().crumbs

        const items = crumbs
            .sort((a, b) => a.match.path.length - b.match.path.length)
            .map((crumb, i, arr) => this.renderItem(crumb, i === arr.length - 1))

        return (
            <div className='breadcrumbs'>
                <Wrapper>
                    {items}
                </Wrapper>
            </div>
        )
    }

    private renderItem = (crumb: Crumb, active: boolean) => {
        const breadcrumbItem = ([
            crumb.icon && <Icon key='icon' icon={crumb.icon} />,
            crumb.title
        ])

        const itemBody = active ?
            <a>{breadcrumbItem}</a> :
            <Link to={crumb.match.url}>{breadcrumbItem}</Link>

        return (
            <li key={crumb.id} className={active ? 'breadcrumb-active' : undefined}>
                {itemBody}
            </li>
        )

    }

}
