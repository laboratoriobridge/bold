import * as React from 'react'
import { Route } from 'react-router-dom'
import { Breadcrumb, BreadcrumbProps } from './Breadcrumb'
import { RouteProps } from 'react-router'

export interface CrumbRouteProps extends BreadcrumbProps, RouteProps {

}

export class CrumbRoute extends React.PureComponent<CrumbRouteProps> {

    render() {
        const {
            exact,
            path,
            location,
            component: Component,
            render,
            strict,
            ...rest } = this.props
        return (
            <Route
                exact={exact}
                location={location}
                path={path}
                strict={strict}
                render={routeProps => (
                    <Breadcrumb {...rest}>
                        {Component ? <Component { ...routeProps } /> : render(routeProps)}
                    </Breadcrumb>
                )}
            />
        )
    }

}
