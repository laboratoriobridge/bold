import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../styles'
import { HFlow } from '../../layout/Flow/HFlow'
import { Button } from '../button/Button/Button'

export interface AriaControlNavProps extends WithStylesProps {
}

@withStyles
export class AriaControlNav extends React.Component<AriaControlNavProps> {
    render() {
        return (
            <HFlow hSpacing={0.5}>
                <Button size='small' skin='ghost' icon='decreaseFont' onClick={this.handleDecreaseFont} />
                <Button size='small' skin='ghost' icon='increaseFont' onClick={this.handleIncreaseFont} />
                <Button size='small' skin='ghost' icon='contrast' onClick={this.handleContrastChange} />
            </HFlow>
        )
    }

    private handleDecreaseFont = () => {
        return null
    }

    private handleIncreaseFont = () => {
        return null
    }

    private handleContrastChange = () => {
        return null
    }
}
