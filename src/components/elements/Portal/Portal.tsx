import React from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
    target?: Element
    children: React.ReactNode
}

export const Portal = ({ children, target }: PortalProps) => {
    return createPortal(children, target)
}

Portal.defaultProps = {
    target: document.body,
} as Partial<PortalProps>
