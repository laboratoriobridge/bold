import * as React from 'react'
import { Hint } from '../elements/Hint'

export interface WithHintProps {
    hint?: string | React.ReactNode
    hintClassName?: string
    hintPlacement?: string
    hintType?: 'normal' | 'primary',
}

export default function withHint<WrappedComponentsProps>(WrappedComponent: React.SFC<WrappedComponentsProps> | React.ComponentClass<WrappedComponentsProps>): React.ComponentClass<WithHintProps & WrappedComponentsProps> {
    return class ComponentWithHint extends React.Component<WithHintProps & WrappedComponentsProps> {
        render() {
            const { hint, hintClassName, hintPlacement, hintType, ...rest } = this.props as any
            if (hint) {
                return (
                    <Hint
                        componente={<WrappedComponent {...rest} />}
                        placement={hintPlacement}
                        type={hintType}
                        className={hintClassName}
                    >
                        {this.props.hint}
                    </Hint>
                )
            } else {
                return (<WrappedComponent {...rest} />)
            }
        }
    }
}
