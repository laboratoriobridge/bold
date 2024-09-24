import React from 'react'
import { Rectangle } from 'recharts'

import { useTheme } from '../../styles'
import { splitIntoLines } from '../../util/string'
import { ReferenceAreaWithPercents, TickProps } from './model'

const MAX_CHARS_PER_LINE = 8
const TICK_MARGIN = 5
const TICK_X_DISLOCATION = 15
const TICK_Y_DISLOCATION = 15

export interface ReferenceTickProps extends TickProps {
  refTicks: Map<number, ReferenceAreaWithPercents<any>>
}

export function ReferenceAreaTick(props: ReferenceTickProps) {
  const { x, y, payload, refTicks, height } = props

  const ref = refTicks.get(+payload.value)

  const theme = useTheme()

  const nameLines = splitIntoLines(ref.name, MAX_CHARS_PER_LINE)
  const description = ref.description

  return (
    <>
      <text
        x={x}
        y={y}
        dx={TICK_X_DISLOCATION}
        dy={TICK_Y_DISLOCATION}
        textAnchor='start'
        fill={ref.tickColor ?? ref.color}
        style={{ fontWeight: 'bold' }}
      >
        {nameLines.map(
          (namePart, i) =>
            namePart && (
              <tspan key={namePart} dx={TICK_X_DISLOCATION} dy={(i + 1) * TICK_Y_DISLOCATION} x={x} y={y}>
                {namePart}
              </tspan>
            )
        )}
      </text>
      {description && (
        <text
          x={x + TICK_X_DISLOCATION}
          y={y + 5 + nameLines.length * TICK_Y_DISLOCATION}
          dx={TICK_X_DISLOCATION}
          dy={TICK_Y_DISLOCATION}
          textAnchor='start'
          fill={description.color ?? theme.pallete.text.main}
          style={description.style}
        >
          {splitIntoLines(description.text, MAX_CHARS_PER_LINE).map(
            (descriptionPart, i) =>
              descriptionPart && (
                <tspan
                  key={descriptionPart}
                  dx={TICK_X_DISLOCATION}
                  dy={(i + 1) * TICK_Y_DISLOCATION}
                  x={x}
                  y={y + 5 + nameLines.length * TICK_Y_DISLOCATION}
                >
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
        dy={TICK_MARGIN / 2}
        width={4}
        height={(ref.areaPercents.slice(-1)[0].percent / 100) * height - TICK_MARGIN / 2}
        fill={ref.tickColor ?? ref.color}
      />
    </>
  )
}
