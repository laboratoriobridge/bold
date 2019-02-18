import React from 'react'
import { conformToMask } from 'text-mask-core'

import { masks } from '../../../../util/masks'
import { MaskType } from '../../../form/input/MaskedInput/MaskedInput'

export interface GenericMaskedLabelProps {
    value: string
}

function createMaskedLabel(displayName: string, mask: MaskType) {
    return class extends React.PureComponent<GenericMaskedLabelProps> {
        static displayName = displayName

        render() {
            const { value } = this.props

            if (!value || value.trim() === '') {
                return null
            }

            const maskedResult = conformToMask(value, mask, { guide: false })
            return maskedResult.conformedValue
        }
    }
}

export const Telefone = createMaskedLabel('Telefone', masks.telefone)
export const Cpf = createMaskedLabel('Cpf', masks.cpf)
export const Cep = createMaskedLabel('Cep', masks.cep)
