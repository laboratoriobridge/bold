import React from 'react'

import { withStyles } from '../../../styles'

import { Flow, FlowProps } from './Flow'

export interface HFlowProps extends FlowProps {
}

@withStyles
export class HFlow extends React.PureComponent<HFlowProps> {

    render() {
        return (
            <Flow direction='horizontal' vSpacing={0} hSpacing={1} {...this.props}>
                {this.props.children}
            </Flow>
        )
    }
}
