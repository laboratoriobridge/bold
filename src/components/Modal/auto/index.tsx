import React from 'react'

import { Omit } from '../../../util/types'

import { ModalAuto, ModalAutoProps } from './ModalAuto'
import defaultStore, { ModalStore, ModalStoreAppendProps } from './ModalStore'

export { ModalStore } from './ModalStore'
export { ModalMountTarget } from './ModalMountTarget'

export interface ModalConfig extends Omit<ModalAutoProps, 'dispose'> {
  store?: ModalStore
}

export const modal = (config: ModalConfig) => {
  return () => {
    const store = config.store || defaultStore

    store.append((props: ModalStoreAppendProps) => <ModalAuto {...config} dispose={props.dispose} />)
  }
}
