import * as React from 'react'

export interface AlertModalContentProps {
    title?: string
}

export const AlertModalContent: React.SFC<AlertModalContentProps> = (props) => {
    return (
        <div className='alertmodal-content'>
            <div className='is-title'>
                {props.title}
            </div>
            {props.children}
        </div>
    )
}
