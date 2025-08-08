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
  const centerX = x + width / 2
  const iconOffset = referenceArea.tooltip ? 10 : 0
  const totalTextHeight = nameLines.length * 16.5
  const translateX = centerX - iconOffset
  const translateY = y - totalTextHeight

  const tooltipX = Math.max(Math.floor(width / 10) * 4, nameLines[0].length * 4)

  return (
    <>
      <g transform={`translate(${translateX}, ${translateY})`}>
        <text textAnchor='middle' fill={fill} style={{ fontWeight: 'bold' }}>
          {nameLines.map(
            (namePart, i) =>
              namePart && (
                <tspan key={namePart} x={0} dy={i === 0 ? 0 : 17} textAnchor='middle'>
                  {namePart}
                </tspan>
              )
          )}
        </text>

        {referenceArea.tooltip && (
          <Tooltip text={referenceArea.tooltip}>
            <Icon
              x={tooltipX ?? 0}
              y={((nameLines.length - 1) * 16.5) / 2 - 15}
              icon='infoCircleFilled'
              size={1}
              fill='normal'
            />
          </Tooltip>
        )}
      </g>
      <Rectangle x={x} y={y - 7} width={width} height={4} fill={fill} />
    </>
  )
}
