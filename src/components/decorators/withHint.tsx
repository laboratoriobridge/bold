import * as React from 'react'
import { Hint } from '../elements/Hint'

export interface WithHintProps {
    hint?: string | React.ReactNode
    hintClassName?: string
    hintPlacement?: string
    hintType?: 'normal' | 'primary',
}

export default function withHint<P extends WithHintProps, T extends React.ComponentClass<P>>(WrappedComponent: T): T {
    class WithHint extends React.Component<P> {

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

    (WithHint as any).displayName = `${WrappedComponent.displayName || WrappedComponent.name}`

    return WithHint as T
}
