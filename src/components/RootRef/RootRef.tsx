import React, { useEffect, useRef } from 'react'

import { setRef } from '../../util/react'

export interface RootRefProps {
  rootRef: any
  children: any
}

export function RootRef(props: RootRefProps) {
  const Child = props.children
  const ref = useRef<HTMLDivElement>()

  useEffect(() => {
    setRef(props.rootRef, ref.current)
  }, [])

  return <Child ref={ref} />
}
