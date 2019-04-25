import React from 'react'

import * as numberUtil from '../../../../util/number'

export interface NumberProps {
  value: number
  minDecimalPlaces?: number
  maxDecimalPlaces?: number
  placeholder?: string
  title?: string
  abbrev?: boolean
  prefix?: string
  suffix?: string
}

export function Number(props: NumberProps) {
  const { value, minDecimalPlaces, maxDecimalPlaces, placeholder, title, abbrev, prefix, suffix, ...rest } = props

  const renderTitle = () => {
    return title || (abbrev && numberUtil.format(value))
  }

  const renderNumber = () => {
    if (typeof value !== 'number' || isNaN(value)) {
      return placeholder
    }

    const num = abbrev
      ? numberUtil.abbrev(value, minDecimalPlaces, maxDecimalPlaces)
      : numberUtil.format(value, minDecimalPlaces, maxDecimalPlaces)

    return prefix + num + suffix
  }

  return (
    <span {...rest} title={renderTitle()}>
      {renderNumber()}
    </span>
  )
}

Number.defaultProps = {
  placeholder: '',
  prefix: '',
  suffix: '',
} as Partial<NumberProps>
