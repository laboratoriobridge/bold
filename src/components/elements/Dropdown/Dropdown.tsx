import Downshift, { ControllerStateAndHelpers, DownshiftProps } from 'downshift'
import * as React from 'react'
import { Manager, Popper, Reference, ReferenceChildrenProps } from 'react-popper'

import { useTheme } from '../../../styles'
import { Portal } from '../Portal'
import { FadeTransition } from '../Transition/FadeTransition'

export interface DropdownProps extends DownshiftProps<any> {
    renderTarget(renderProps: DropdownTargetRenderProps): React.ReactNode
    children(renderProps: DropdownRenderProps): React.ReactNode
}

export type DropdownRenderProps = ControllerStateAndHelpers<any>
export type DropdownTargetRenderProps = ControllerStateAndHelpers<any> & ReferenceChildrenProps

export const Dropdown = (props: DropdownProps) => {
    const { children, renderTarget, ...rest } = props

    const itemToString = () => null
    const theme = useTheme()

    return (
        <Downshift itemToString={itemToString} suppressRefError {...rest}>
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
                                                    style={{ ...style, zIndex: theme.zIndex.dropdown }}
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
