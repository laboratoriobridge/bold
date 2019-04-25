import React from 'react'

import { Number, NumberProps } from '../Number/Number'

export interface CurrencyLabelProps extends NumberProps {}

export function Currency(props: CurrencyLabelProps) {
  return <Number prefix='R$ ' minDecimalPlaces={2} maxDecimalPlaces={2} {...props} />
}
