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

  const theme = useTheme()

  const ref = refTicks.get(+payload.value)

  const nameLines = splitIntoLines(ref.name, MAX_CHARS_PER_LINE)

  const nameHight = nameLines.length * TICK_Y_DISLOCATION
  const nameYOffset = ref.nameAlignment === 'central' ? -nameHight / 2 : 0
  const descriptionYOffset = ref.nameAlignment === 'central' ? nameHight / 2 : nameHight

  const rectangleDefaultHeight = (ref.areaPercents.slice(-1)[0].percent / 100) * height - TICK_MARGIN / 2
  const rectangleHeight = ref.tickType === 'horizontal' ? TICK_HORIZONTAL_HEIGHT : rectangleDefaultHeight
  const rectangleWidth = ref.tickType === 'horizontal' ? TICK_HORIZONTAL_WIDTH : TICK_VERTICAL_WIDTH

  return (
    <>
      <text
        x={x}
        y={y + nameYOffset}
        dx={TICK_X_DISLOCATION}
        dy={0}
        textAnchor='start'
        dominantBaseline='hanging'
        fill={ref.nameColor ?? ref.tickColor ?? ref.color}
        style={{ fontWeight: 'bold' }}
      >
        {nameLines.map(
          (namePart, i) =>
            namePart && (
              <tspan key={namePart} dx={TICK_X_DISLOCATION} dy={i * TICK_Y_DISLOCATION} x={x} y={y + nameYOffset}>
                {namePart}
              </tspan>
            )
        )}
      </text>
      {ref.description && (
        <text
          x={x + TICK_X_DISLOCATION}
          y={y + TICK_MARGIN + descriptionYOffset}
          dx={TICK_X_DISLOCATION}
          dy={0}
          textAnchor='start'
          dominantBaseline='hanging'
          fill={theme.pallete.text.main}
        >
          {splitIntoLines(ref.description, MAX_CHARS_PER_LINE).map(
            (descriptionPart, i) =>
              descriptionPart && (
                <tspan
                  key={descriptionPart}
                  dx={TICK_X_DISLOCATION}
                  dy={i * TICK_Y_DISLOCATION}
                  x={x}
                  y={y + TICK_MARGIN + descriptionYOffset}
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
