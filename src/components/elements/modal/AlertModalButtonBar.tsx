import * as React from 'react'
import { ButtonBar } from '../../layout/ButtonBar'

export interface AlertModalButtonBarProps {

}

export const AlertModalButtonBar: React.SFC<AlertModalButtonBarProps> = (props) => {
    return (
        <div className='alertmodal-buttonbar'>
            <ButtonBar>
                {props.children}
            </ButtonBar>
        </div >
    )
}
