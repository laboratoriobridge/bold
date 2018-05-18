import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'
import { HFlow } from '../../layout/Flow/HFlow'
import { IconButton } from '../button/IconButton/IconButton'

export interface AriaControlNavProps extends WithStylesProps {
}

@withStyles
export class AriaControlNav extends React.Component<AriaControlNavProps> {
    render() {
        return (
            <HFlow hSpacing={0.5}>
                <IconButton icon='decreaseFont' onClick={this.handleDecreaseFont} />
                <IconButton icon='increaseFont' onClick={this.handleIncreaseFont} />
                <IconButton icon='contrast' onClick={this.handleContrastChange} />
            </HFlow>
        )
    }

    private handleDecreaseFont = () => {
        // this.props.theme.aria.increaseFont()
        console.log('handleDecreaseFont')
    }

    private handleIncreaseFont = () => {
        // this.props.theme.aria.decreaseFont()
        console.log('handleIncreaseFont')
    }

    private handleContrastChange = () => {
        // this.props.theme.aria.toggleContrastFont()
        console.log('handleContrastChange')
    }
}
