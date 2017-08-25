import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

export interface ScrollToTopProps {
    onMount?: boolean
}

class ScrollToTopComp extends React.Component<RouteComponentProps<any> & ScrollToTopProps, any> {

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    componentDidMount() {
        if (this.props.onMount) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        return null
    }
}

export const ScrollToTop = withRouter<ScrollToTopProps>(ScrollToTopComp)
