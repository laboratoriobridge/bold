import React from 'react'

import { masks, onlyNumbers } from '../../../../../util/masks'
import { MaskedField, MaskedFieldProps } from '../MaskedField'

export interface CpfFieldProps extends MaskedFieldProps {}

export class CpfField extends React.Component<CpfFieldProps> {
  static defaultProps: Partial<CpfFieldProps> = {}

  render() {
    return <MaskedField mask={masks.cpf} placeholder='___.___.___-__' parse={onlyNumbers} {...this.props} />
  }
}
