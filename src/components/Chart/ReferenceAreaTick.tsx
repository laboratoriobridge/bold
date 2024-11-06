import React from 'react'
import { Rectangle } from 'recharts'

import { useTheme } from '../../styles'
import { splitIntoLines } from '../../util/string'
import { ReferenceAreaWithPercents, TickProps } from './model'

const MAX_CHARS_PER_LINE = 8
const TICK_MARGIN = 5
const TICK_X_DISLOCATION = 15
const TICK_Y_DISLOCATION = 15

const TICK_HORIZONTAL_HEIGHT = 2
const TICK_HORIZONTAL_WIDTH = 8
const TICK_VERTICAL_WIDTH = 2

export interface ReferenceTickProps extends TickProps {
  refTicks: Map<number, ReferenceAreaWithPercents<any>>
}

export function ReferenceAreaTick(props: ReferenceTickProps) {
  const { x, y, payload, refTicks, height } = props

  const ref = refTicks.get(+payload.value)

  const theme = useTheme()

  const nameLines = splitIntoLines(ref.name, MAX_CHARS_PER_LINE)
  const description = ref.description

  const dominantBaseline = ref.nameAlignment ?? 'hanging'

  const rectangleDefaultHeight = (ref.areaPercents.slice(-1)[0].percent / 100) * height - TICK_MARGIN / 2
  const rectangleHeight = ref.tickType === 'horizontal' ? TICK_HORIZONTAL_HEIGHT : rectangleDefaultHeight
  const rectangleWidth = ref.tickType === 'horizontal' ? TICK_HORIZONTAL_WIDTH : TICK_VERTICAL_WIDTH

  return (
    <>
      <text
        x={x}
        y={y}
        dx={TICK_X_DISLOCATION}
        dy={0}
        textAnchor='start'
        dominantBaseline={dominantBaseline}
        fill={ref.nameColor ?? ref.tickColor ?? ref.color}
        style={{ fontWeight: 'bold' }}
      >
        {nameLines.map(
          (namePart, i) =>
            namePart && (
              // TODO see alignemntBaseline prop to align all tspan on center (current only the first)
              <tspan key={namePart} dx={TICK_X_DISLOCATION} dy={i * TICK_Y_DISLOCATION} x={x} y={y}>
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
          dy={0}
          textAnchor='start'
          dominantBaseline={dominantBaseline}
          fill={theme.pallete.text.main}
        >
          {splitIntoLines(description, MAX_CHARS_PER_LINE).map(
            (descriptionPart, i) =>
              descriptionPart && (
                <tspan
                  key={descriptionPart}
                  dx={TICK_X_DISLOCATION}
                  dy={i * TICK_Y_DISLOCATION}
                  x={x}
                  // TODO check if TICK_MARGIN was added along with description.align
                  y={y + nameLines.length * TICK_Y_DISLOCATION + TICK_MARGIN}
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
        width={rectangleWidth}
        height={rectangleHeight}
        fill={ref.tickColor ?? ref.color}
      />
    </>
  )
}
