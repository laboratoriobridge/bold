import React from 'react'
import { Rectangle } from 'recharts'

import { useTheme } from '../../styles'
import { splitIntoLines } from '../../util/string'
import { ReferenceAreaWithPercents, TickProps } from './model'

const MAX_CHARS_PER_LINE = 8

export interface ReferenceTickProps extends TickProps {
  refTicks: Map<number, ReferenceAreaWithPercents<any>>
}

export function ReferenceAreaTick(props: ReferenceTickProps) {
  const { x, y, payload, refTicks, height } = props

  const ref = refTicks.get(+payload.value)
  const margin = 5

  const theme = useTheme()

  const nameLines = splitIntoLines(ref.name, MAX_CHARS_PER_LINE)

  return (
    <>
      <text
        x={x}
        y={y}
        dx={15}
        dy={15}
        textAnchor='start'
        fill={ref.tickColor ?? ref.color}
        style={{ fontWeight: 'bold' }}
      >
        {nameLines.map(
          (namePart, i) =>
            namePart && (
              <tspan key={namePart} dx={15} dy={(i + 1) * 15} x={x} y={y}>
                {namePart}
              </tspan>
            )
        )}
      </text>
      {ref.description && (
        <text
          x={x + 15}
          y={y + 5 + nameLines.length * 15}
          dx={15}
          dy={15}
          textAnchor='start'
          fill={theme.pallete.text.main}
        >
          {splitIntoLines(ref.description, MAX_CHARS_PER_LINE).map(
            (descriptionPart, i) =>
              descriptionPart && (
                <tspan key={descriptionPart} dx={15} dy={(i + 1) * 15} x={x} y={y + 5 + nameLines.length * 15}>
                  {descriptionPart}
                </tspan>
              )
          )}
        </text>
      )}
      <Rectangle
        x={x}
        y={y}
        dx={15}
        dy={margin / 2}
        width={4}
        height={(ref.areaPercents.slice(-1)[0].percent / 100) * height - margin / 2}
        fill={ref.tickColor ?? ref.color}
      />
    </>
  )
}
