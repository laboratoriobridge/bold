import React from 'react'
import { Rectangle } from 'recharts'
import { blue } from '../../styles/colors'

import { splitIntoLines } from '../../util/string'
import { Tooltip } from '../Tooltip'
import { Icon } from '../Icon'
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

  const nameLines = splitIntoLines(referenceArea.name, Math.floor(width / 10))
  const fill = (referenceArea.tickColor ?? referenceArea.fillColor ?? blue.c60) || 'none'

  return (
    <>
      <g transform={`translate(${x + width / 2}, ${y})`}>
        <text textAnchor='middle' fill={fill} style={{ fontWeight: 'bold' }}>
          {nameLines.map(
            (namePart, i) =>
              namePart && (
                <tspan
                  key={namePart}
                  dx={referenceArea.tooltip ? -12 : 0}
                  dy={(nameLines.length - i) * -15}
                  textAnchor='middle'
                >
                  {namePart}
                </tspan>
              )
          )}
        </text>
        {referenceArea.tooltip && (
          <Tooltip text={referenceArea.tooltip}>
            <Icon x={20} y={-(nameLines.length * 15) / 2 - 20} icon='infoCircleFilled' size={1} fill='normal' />
          </Tooltip>
        )}
      </g>
      <Rectangle x={x} y={y - 7} width={width} height={4} fill={fill} />
    </>
  )
}
