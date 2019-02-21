import React from 'react'

import { withStyles } from '../../../styles'

import { Flow, FlowProps } from './Flow'

export interface VFlowProps extends FlowProps {
}

@withStyles
export class VFlow extends React.PureComponent<VFlowProps> {

    render() {
        return (
            <Flow direction='vertical' vSpacing={1} hSpacing={0} {...this.props}>
                {this.props.children}
            </Flow>
        )
    }
}
