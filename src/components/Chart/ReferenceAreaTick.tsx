import React from 'react'
import { Rectangle } from 'recharts'

import { last } from 'lodash'
import { useTheme } from '../../styles'
import { splitIntoLines } from '../../util/string'
import { ReferenceAreaWithPercents, TickProps } from './model'

const MAX_CHARS_PER_LINE = 8
const TICK_MARGIN = 5
const TICK_X_DISLOCATION = 15
const TICK_Y_DISLOCATION = 15

const TICK_HORIZONTAL_HEIGHT = 2
const TICK_HORIZONTAL_WIDTH = 8
const TICK_VERTICAL_WIDTH = 4

export interface ReferenceAreaTickProps extends TickProps {
  refTicks: Map<number, ReferenceAreaWithPercents<any>>
}

export function ReferenceAreaTick(props: ReferenceAreaTickProps) {
  const { x, y, payload, refTicks, height } = props

  const theme = useTheme()

  const ref = refTicks.get(+payload.value)

  const nameLines = splitIntoLines(ref.label.name, MAX_CHARS_PER_LINE)

  const { nameYOffset, descriptionYOffset, dominantBaseline } = getLabelAlignmentParams(nameLines.length, ref)
  const { rectangleHeight, rectangleWidth } = getRectangleDimensions(height, ref)

  return (
    <>
      <text
        x={x}
        y={y + nameYOffset}
        dx={TICK_X_DISLOCATION}
        dy={0}
        textAnchor='start'
        dominantBaseline={dominantBaseline}
        fill={ref.label.color ?? ref.tick?.color ?? ref.color}
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
      {ref.label.description && (
        <text
          x={x + TICK_X_DISLOCATION}
          y={y + TICK_MARGIN + TICK_Y_DISLOCATION + descriptionYOffset}
          dx={TICK_X_DISLOCATION}
          dy={0}
          textAnchor='start'
          dominantBaseline={dominantBaseline}
          fill={theme.pallete.text.main}
        >
          {splitIntoLines(ref.label.description, MAX_CHARS_PER_LINE).map(
            (descriptionPart, i) =>
              descriptionPart && (
                <tspan
                  key={descriptionPart}
                  dx={TICK_X_DISLOCATION}
                  dy={i * TICK_Y_DISLOCATION}
                  x={x}
                  y={y + TICK_MARGIN + TICK_Y_DISLOCATION + descriptionYOffset}
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
        dx={TICK_X_DISLOCATION}
        dy={TICK_MARGIN / 2}
        width={rectangleWidth}
        height={rectangleHeight}
        fill={ref.tick?.color ?? ref.color}
      />
    </>
  )
}

function getLabelAlignmentParams(nameLines: number, ref: ReferenceAreaWithPercents<any>) {
  const dominantBaseline = ref.label.alignment ?? 'text-before-edge'
  const nameExtraLinesHeight = nameLines > 1 ? (nameLines - 1) * TICK_Y_DISLOCATION : 0

  const nameYOffset = dominantBaseline === 'central' ? -nameExtraLinesHeight / 2 : 0
  const descriptionYOffset = dominantBaseline === 'central' ? nameExtraLinesHeight / 2 : nameExtraLinesHeight

  return { nameYOffset, descriptionYOffset, dominantBaseline }
}

function getRectangleDimensions(height: number, ref: ReferenceAreaWithPercents<any>) {
  const rectangleDefaultHeight = (last(ref.areaPercents).percent / 100) * height - TICK_MARGIN / 2

  const rectangleHeight = ref.tick?.kind === 'horizontal' ? TICK_HORIZONTAL_HEIGHT : rectangleDefaultHeight
  const rectangleWidth = ref.tick?.kind === 'horizontal' ? TICK_HORIZONTAL_WIDTH : TICK_VERTICAL_WIDTH

  return { rectangleHeight, rectangleWidth }
}
