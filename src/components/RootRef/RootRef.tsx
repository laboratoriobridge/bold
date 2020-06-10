import React, { useEffect, useRef } from 'react'

import { setRef } from '../../util/react'

export interface RootRefProps<T extends Element = Element> {
  rootRef: React.Ref<T>
  children: React.ReactElement<any>
}

/**
 * Helper component to allow attaching a ref to a
 * wrapped element to access the underlying DOM element.
 *
 * From Material's UI RootRef component
 */
export function RootRef<T extends Element = Element>(props: RootRefProps) {
  const ref = useRef<Element>()

  useEffect(() => {
    setRef(props.rootRef, ref.current)
  }, [ref.current])

  return props.children
}
