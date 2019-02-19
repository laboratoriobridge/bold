import React from 'react'

import { masks, onlyNumbers } from '../../../../../util/masks'
import { MaskedField, MaskedFieldProps } from '../MaskedField'

export interface CnsFieldProps extends MaskedFieldProps {

}

export class CnsField extends React.Component<CnsFieldProps> {

    static defaultProps: Partial<CnsFieldProps> = {}

    render() {
        return (
            <MaskedField
                mask={masks.cns}
                parse={onlyNumbers}
                {...this.props}
            />
        )
    }

}
