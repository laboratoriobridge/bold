import * as React from 'react'
import { Color } from '../style/Theme'

export type Weight = 'regular' | 'semibold' | 'bold'
export type Transform = 'uppercase' | 'lowercase' | 'capitalize'

interface TextProps {
    color?: Color
    className?: string
    weight?: Weight
    transform?: Transform
    italic?: boolean
}

export class Text extends React.PureComponent<TextProps> {

    render() {
        return (
            <span>
                {this.props.children}
            </span>
        )
    }

}

export default Text
