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
  const hasTooltip = Boolean(referenceArea.tooltip)
  const iconOffsetX = hasTooltip ? 10 : 0

  const lineHeight = 17
  const totalTextHeight = Math.max(1, nameLines.length) * lineHeight
  const halfText = totalTextHeight / 2

  const barTop = y - 7
  const gap = 8

  const labelCenterY = barTop - gap - halfText

  const labelTranslateX = centerX - iconOffsetX
  const labelTranslateY = labelCenterY

  const firstDy = -((nameLines.length - 1) / 2) * lineHeight

  const ICON_PX = 16 // <- ajuste se seu <Icon size={1}> renderiza com outra altura
  const tooltipX = Math.max(Math.floor(width / 10) * 4, (nameLines[0]?.length || 0) * 4)
  const tooltipCenterOffset = -1 // ajuste óptico leve
  const tooltipY = -ICON_PX / 2 + tooltipCenterOffset

  return (
    <>
      <g transform={`translate(${labelTranslateX}, ${labelTranslateY})`}>
        <text textAnchor='middle' dominantBaseline='middle' fill={fill} style={{ fontWeight: 'bold' }}>
          {nameLines.map((namePart, i) =>
            namePart ? (
              <tspan key={`${i}-${namePart}`} x={0} dy={i === 0 ? firstDy : lineHeight} textAnchor='middle'>
                {namePart}
              </tspan>
            ) : null
          )}
        </text>

        {referenceArea.tooltip && (
          <Tooltip text={referenceArea.tooltip}>
            <Icon x={tooltipX} y={tooltipY} icon='infoCircleFilled' size={1} fill='normal' />
          </Tooltip>
        )}
      </g>
      <g>
        <Rectangle x={x} y={y - 7} width={width} height={4} fill={fill} />
      </g>
    </>
  )
}
