import React from 'react'

import { TickProps } from './model'
import { convertTickProps } from './util'

export function Tick(props: TickProps) {
  const {
    payload: { value },
  } = props

  return <text {...convertTickProps(props)}> {props.isOutlierIndicator ? `>${props.domainMaxValue}` : value} </text>
}
