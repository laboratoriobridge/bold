import * as React from 'react'

import { conformToMask } from 'text-mask-core'

import { masks } from '../../../../util/masks'
import { MaskType } from '../../../form/input/MaskedInput/MaskedInput'

export interface GenericMaskedLabelProps<T> {
    value: T
}

function createMaskedLabel<T>(displayName: string, mask: MaskType) {
    return class extends React.PureComponent<GenericMaskedLabelProps<T>> {
        static displayName = displayName

        render() {
            const { value } = this.props

            if (!value) {
                return null
            }

            const maskedResult = conformToMask(value, mask, { guide: false })
            return maskedResult.conformedValue
        }
    }
}

export const Telefone = createMaskedLabel<string>('Telefone', masks.telefone)
export const Cpf = createMaskedLabel<string>('Cpf', masks.cpf)
export const Cep = createMaskedLabel<string>('Cep', masks.cep)
