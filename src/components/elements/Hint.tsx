import * as React from 'react'

import { Placement, Popover } from './Popover'

export interface HintProps {
    placement?: Placement
    componente: any,
    type?: 'normal' | 'primary',
    className?: string
}

export interface HintState {
    showPopover: boolean
}

export class Hint extends React.Component<HintProps, HintState> {

    static defaultProps: Partial<HintProps> = {
        type: 'normal',
    }

    private instance: any

    constructor(props) {
        super(props)
        this.state = {
            showPopover: false,
        }
    }

    render() {
        return (
            <span className='hint-wrapper'>
                <Popover
                    className='hint'
                    color='dark-grey'
                    show={this.state.showPopover}
                    placement={this.props.placement}
                    target={this.instance}
                >
                    {this.props.children}
                </Popover>
                {this.props.componente && this.cloneComponent()}

            </span>
        )
    }

    cloneComponent() {
        return React.cloneElement(this.props.componente, {
            onMouseOver: () => this.setState({ showPopover: true }),
            onMouseLeave: () => this.setState({ showPopover: false }),
            ref: elem => this.instance = elem,
        })
    }

}

export interface WithHintProps {
    hint?: string | React.ReactNode
    hintClassName?: string
    hintPlacement?: string
    hintType?: 'normal' | 'primary',
}

export function withHint<P extends WithHintProps, T extends React.ComponentClass<P>>(WrappedComponent: T): T {
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
