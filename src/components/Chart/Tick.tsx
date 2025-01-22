import React from 'react'

import { convertTickProps } from './util'

const TICK_VERTICAL_DISLOCATION_AXIS_X = 15
const TICK_VERTICAL_DISLOCATION_AXIS_Y = 5

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
  isAxisX?: boolean
}

export function Tick(props: TickProps) {
  const {
    payload: { value },
  } = props

  const dy = props.isAxisX ? TICK_VERTICAL_DISLOCATION_AXIS_X : TICK_VERTICAL_DISLOCATION_AXIS_Y

  return (
    <text dy={dy} {...convertTickProps(props)}>
      {props.isOutlierIndicator ? `>${props.domainMaxValue}` : value}
    </text>
  )
}
