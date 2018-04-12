import * as React from 'react'
import { Omit } from 'react-redux'

import { masks, onlyNumbers } from '../../../../util/masks'
import { MaskType } from '../../input/MaskedInput/MaskedInput'

import { MaskedField, MaskedFieldProps } from '../MaskedField/MaskedField'

export interface GenericMaskedProps extends Omit<MaskedFieldProps, 'mask'> {
}

const createMaskedField = (displayName: string, mask: MaskType, props?: Partial<GenericMaskedProps>) => {
    return class extends React.PureComponent<GenericMaskedProps> {
        static displayName = displayName

        render() {
            return (
                <MaskedField mask={mask} {...props} {...this.props} />
            )
        }
    }
}

export const TelefoneField = createMaskedField('TelefoneField', masks.telefone, {
    parse: onlyNumbers,
    placeholder: '(__) _____-____',
})
export const CpfField = createMaskedField('CpfField', masks.cpf, {
    parse: onlyNumbers,
    placeholder: '___.___.___-__',
})
export const CepField = createMaskedField('CepField', masks.cep, {
    parse: onlyNumbers,
    placeholder: '_____-___',
})
