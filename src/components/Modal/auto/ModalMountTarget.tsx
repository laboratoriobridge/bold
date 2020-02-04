import React, { useEffect, useState } from 'react'

import defaultStore, { ModalStore, ModalStoreItem, ModalStoreState } from './ModalStore'

export interface ModalMountTargetProps {
  store?: ModalStore
}

export function ModalMountTarget(props: ModalMountTargetProps) {
  const { store } = props

  const [items, setItems] = useState<ModalStoreState['items']>([])

  useEffect(() => {
    const unsubstribe = store.subscribe(s => setItems(s.items))
    return () => unsubstribe()
  }, [store])

  return (
    <div>
      {items.map((item: ModalStoreItem) => (
        <React.Fragment key={item.key}>{item.component}</React.Fragment>
      ))}
    </div>
  )
}

ModalMountTarget.defaultProps = {
  store: defaultStore,
} as Partial<ModalMountTargetProps>
