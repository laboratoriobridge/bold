import React from 'react'
import { Manager, Popper, PopperProps, Reference, ReferenceChildrenProps } from 'react-popper'

import { useTheme } from '../../../styles'
import { Omit } from '../../../util'
import { Portal } from '../Portal'
import { FadeTransition } from '../Transition/FadeTransition'

export interface DropdownProps {
    popperProps?: Omit<PopperProps, 'children'>
    renderTarget(renderProps: DropdownTargetRenderProps): React.ReactNode
    children(renderProps: DropdownRenderProps): React.ReactNode
}

export type DropdownTargetRenderProps = DropdownRenderProps & ReferenceChildrenProps

export interface DropdownRenderProps {
    isOpen: boolean
    open(): void
    close(): void
    toggle(): void
}

export const Dropdown = (props: DropdownProps) => {
    const { children, renderTarget, popperProps } = props
    const theme = useTheme()

    const [isOpen, setOpen] = React.useState<boolean>(false)

    const renderProps: DropdownRenderProps = {
        isOpen,
        open: () => setOpen(true),
        close: () => setOpen(false),
        toggle: () => setOpen(!isOpen),
    }

    return (
        <Manager>
            <Reference>
                {(refProps) =>
                    renderTarget({ ...refProps, ...renderProps })
                }
            </Reference>
            <FadeTransition in={isOpen}>
                {({ className }) => (
                    isOpen && (
                        <Portal>
                            <Popper {...popperProps}>
                                {(popper) => (
                                    <div
                                        ref={popper.ref}
                                        className={className}
                                        style={{ ...popper.style, zIndex: theme.zIndex.dropdown }}
                                    >
                                        {children(renderProps)}
                                    </div>
                                )}
                            </Popper>
                        </Portal>
                    )
                )}
            </FadeTransition>
        </Manager>
    )
}
