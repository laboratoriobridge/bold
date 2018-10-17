import * as React from 'react'

import { masks, onlyNumbers } from '../../../../../util/masks'

import { MaskedField, MaskedFieldProps } from '../MaskedField'

export interface TelefoneFieldProps extends MaskedFieldProps {

}

export class TelefoneField extends React.Component<TelefoneFieldProps> {

    static defaultProps: Partial<TelefoneFieldProps> = {}

    render() {
        return (
            <MaskedField
                mask={masks.telefone}
                placeholder='(__) _____-____'
                parse={onlyNumbers}
                {...this.props}
            />
        )
    }

}
