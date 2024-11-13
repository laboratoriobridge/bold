import React from 'react'

import { convertTickProps } from './util'
interface TickPayload {
  coordinate: number
  isShow: boolean
  offset: number
  tickCoord: number
  value: any
}

export interface TickProps {
  x?: number
  y?: number
  height?: number
  payload?: TickPayload
  fill?: string
  stroke?: string
  textAnchor?: string
  width?: number
  isOutlierIndicator?: boolean
  domainMaxValue?: number | Date
}

export function Tick(props: TickProps) {
  const {
    payload: { value },
  } = props

  return <text {...convertTickProps(props)}> {props.isOutlierIndicator ? `>${props.domainMaxValue}` : value} </text>
}
