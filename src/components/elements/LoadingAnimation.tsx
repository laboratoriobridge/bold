import * as React from 'react'
import * as classnames from 'classnames'

export interface LoadingAnimationProps {
    size?: 'small'
}

export class LoadingAnimation extends React.Component<LoadingAnimationProps> {

    render() {
        return (
            <svg className={classnames('loading-animation', {
                'is-small': this.props.size && this.props.size === 'small'
            })} viewBox='25 25 50 50' >
                <circle className='loading-animation-path' cx='50' cy='50' r='20' fill='none' />
            </svg>
        )
    }

}
