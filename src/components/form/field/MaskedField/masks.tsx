import * as React from 'react'
import { Omit } from 'react-redux'

import { MaskType } from '../../input/MaskedInput/MaskedInput'

import { MaskedField, MaskedFieldProps } from './MaskedField'

export interface GenericMaskedProps extends Omit<MaskedFieldProps, 'mask'> {
}

const createMaskedField = (displayName: string, mask: MaskType) => {
    return class extends React.PureComponent<GenericMaskedProps> {
        static displayName = displayName

        render() {
            return (
                <MaskedField mask={mask} {...this.props} />
            )
        }
    }
}

export const masks: { [key: string]: MaskType } = {
    telefone: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    cpf: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
}

export const TelefoneField = createMaskedField('TelefoneField', masks.telefone)
export const CpfField = createMaskedField('CpfField', masks.cpf)
