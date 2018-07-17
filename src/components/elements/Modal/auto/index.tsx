import * as React from 'react'

import { Omit } from '../../../../util/types'

import { ModalAuto, ModalAutoProps } from './ModalAuto'
import { ModalAutoMountingTarget, ModalAutoRenderProps } from './ModalAutoMountingTarget'

export { ModalAutoMountingTarget, ModalAutoRenderFunction, ModalAutoRenderProps } from './ModalAutoMountingTarget'

export interface ModalConfig extends Omit<ModalAutoProps, 'dispose'> {
}

export const modal = (config: ModalConfig) => {
    return () => {
        const append = ModalAutoMountingTarget.append

        if (!append) {
            throw new Error(`Your must include a <ModalAutoMountingTarget /> component in your application.`)
        }

        append((props: ModalAutoRenderProps) => (
            <ModalAuto
                {...config}
                dispose={props.dispose}
            />
        ))
    }
}
