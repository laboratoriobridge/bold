import Downshift, { ControllerStateAndHelpers, DownshiftProps } from 'downshift'
import * as React from 'react'
import { Manager, Popper, Reference, ReferenceChildrenProps } from 'react-popper'

import { Portal } from '../Portal'
import { FadeTransition } from '../Transition/FadeTransition'

export interface DropdownProps extends DownshiftProps<any> {
    renderTarget(renderProps: DropdownTargetRenderProps): React.ReactNode
    children(renderProps: DropdownRenderProps): React.ReactNode
}

export type DropdownRenderProps = ControllerStateAndHelpers<any>
export type DropdownTargetRenderProps = ControllerStateAndHelpers<any> & ReferenceChildrenProps

export class Dropdown extends React.Component<DropdownProps> {

    public render() {
        const { children, renderTarget, ...rest } = this.props

        return (
            <Downshift itemToString={this.itemToString} suppressRefError {...rest}>
                {(downshift) => {
                    return (
                        <Manager>
                            <Reference>
                                {(refProps) => renderTarget({ ...downshift, ...refProps })}
                            </Reference>
                            <FadeTransition in={downshift.isOpen}>
                                {({ className }) => (
                                    downshift.isOpen && (
                                        <Portal>
                                            <Popper placement='bottom'>
                                                {({ ref, style, placement }) => (
                                                    <div
                                                        ref={ref}
                                                        className={className}
                                                        style={style}
                                                        data-placement={placement}
                                                    >
                                                        {children(downshift)}
                                                    </div>
                                                )}
                                            </Popper>
                                        </Portal>
                                    )
                                )}
                            </FadeTransition>
                        </Manager>
                    )
                }}
            </Downshift>
        )
    }

    itemToString = () => null

}
