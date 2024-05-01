import React from 'react'
import { Rectangle } from 'recharts'
import { blue } from '../../styles/colors'

import { convertToLines } from './convertToLines'
import { RangeArea } from './model'

export interface RangeAreaTickProps<XDomain> {
  referenceArea: RangeArea<XDomain>
  viewBox?: { height: number; width: number; x: number; y: number }
}

export function RangeAreaTick<XDomain>(props: RangeAreaTickProps<XDomain>) {
  const {
    viewBox: { x, y, width },
    referenceArea,
  } = props

  const nameLines = convertToLines(referenceArea.name, Math.floor(width / 10))
  const fill = (referenceArea.tickColor ?? referenceArea.fillColor ?? blue.c60) || 'none'

  return (
    <>
      <text x={x} y={y} dx={15} dy={-15} textAnchor='middle' fill={fill} style={{ fontWeight: 'bold' }}>
        {nameLines.map(
          (namePart, i) =>
            namePart && (
              <tspan key={namePart} dx={width / 2} dy={(nameLines.length - i) * -15} x={x} y={y} textAnchor='middle'>
                {namePart}
              </tspan>
            )
        )}
      </text>
      <Rectangle x={x} y={y - 7} width={width} height={4} fill={fill} />
    </>
  )
}
