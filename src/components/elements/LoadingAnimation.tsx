import * as React from 'react'


export class LoadingAnimation extends React.Component<any, any> {

    render() {
        return (
            <svg className='loading-animation' viewBox='25 25 50 50' >
                <circle className='loading-animation-path' cx='50' cy='50' r='20' fill='none' />
            </svg>
        )
    }

}
