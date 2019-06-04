import React from 'react'

import { masks, onlyNumbers } from '../../../../../util/masks'
import { MaskedField, MaskedFieldProps } from '../../MaskedField'

export interface CepFieldProps extends MaskedFieldProps {}

export class CepField extends React.Component<CepFieldProps> {
  static defaultProps: Partial<CepFieldProps> = {}

  render() {
    return <MaskedField mask={masks.cep} placeholder='_____-___' parse={onlyNumbers} {...this.props} />
  }
}
