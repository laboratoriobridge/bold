import React from 'react'

import { Number, NumberProps } from '../Number/Number'

export interface CurrencyLabelProps extends NumberProps {
  currency?: string
}

export function Currency(props: CurrencyLabelProps) {
  const { currency, ...rest } = props
  return <Number formatOptions={{ style: 'currency', currency }} {...rest} />
}

Currency.defaultProps = {
  currency: 'USD',
} as Partial<CurrencyLabelProps>
