import React from 'react'

import { TickProps } from './model'

export function Tick(props: TickProps) {
  const {
    payload: { value },
  } = props

  return <text {...props}> {props.isOutlierIndicator ? `>${props.domainMaxValue}` : value} </text>
}
