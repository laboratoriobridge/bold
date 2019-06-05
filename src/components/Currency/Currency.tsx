import React from 'react'

import { Number, NumberProps } from '../Number/Number'

export interface CurrencyProps extends NumberProps {
  currency?: string
}

export function Currency(props: CurrencyProps) {
  const { currency, ...rest } = props
  return <Number formatOptions={{ style: 'currency', currency }} {...rest} />
}

Currency.defaultProps = {
  currency: 'USD',
} as Partial<CurrencyProps>
