import React, { useEffect, useRef } from 'react'

import { setRef } from '../../util/react'

export interface RootRefProps {
  rootRef: any
  children: any
}

export function RootRef(props: RootRefProps) {
  const ref = useRef<HTMLDivElement>()

  useEffect(() => {
    setRef(props.rootRef, ref.current)
  }, [])

  const ChildrenComponent = React.forwardRef<any, { children: any }>(props.children)

  return <ChildrenComponent ref={ref}>{props.children}</ChildrenComponent>
}
