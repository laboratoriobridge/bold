import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  container?: Element
  children: React.ReactNode
}

export function Portal(props: PortalProps) {
  const { children, container } = props

  const mountNode = useRef<Element>(typeof document !== 'undefined' ? document.body : null)
  useEffect(() => {
    mountNode.current = container || document.body
    return () => {
      mountNode.current = null
    }
  }, [container])

  return mountNode.current ? createPortal(children, mountNode.current) : null
}
