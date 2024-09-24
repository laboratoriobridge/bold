import { Color } from 'csstype'
import { CSSProperties, ReactElement } from 'react'
import { blue, gray, orange, pink } from '../../styles/colors'

const CHART_COLOR_SCHEMES = {
  blue: Object.values(blue).filter((_, i) => i % 2) as Color[],
  orange: Object.values(orange).filter((_, i) => i % 2) as Color[],
  pink: Object.values(pink).filter((_, i) => i % 2) as Color[],
  gray: Object.values(gray).filter((_, i) => i % 2) as Color[],
  default: [blue.c40, orange.c50, blue.c50, pink.c40, orange.c60, blue.c20, pink.c50],
}

export type ChartColorScheme = keyof typeof CHART_COLOR_SCHEMES | Color[]
export type ValueRange = { init: number; end: number; step?: number }
export type UnitOfTime = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond'
export type DateRangeStep = { amount: number; unit: UnitOfTime }
export type DateRange = {
  init: Date
  end: Date
  format?: (date: Date) => string
  step?: DateRangeStep
}
export type SeriesDataPoint = number | Date | DataPoint<number> | DataPoint<Date>
export type ReferenceAreaDataPoint = number | DataPoint<number>
export type AxisDomain = string[] | ValueRange | DateRange
export type TooltipType = 'point' | 'line' | 'none'
export type DotShape = 'circle' | 'square' | 'rect' | 'triangle' | 'diamond' | 'cross' | 'star' | 'happy'

export type TooltipRenderer<XDomain> = (
  points?: (DataPoint<XDomain> & { seriesName: string })[]
) => string | React.ReactNode

export enum SeriesType {
  Line,
  Column,
  Area,
}

export interface DataPoint<XDomain, YDomain = number> {
  x: XDomain
  y: YDomain
}

export interface ChartSeries<XDomain> {
  type?: SeriesType
  name: string
  data: number[] | DataPoint<XDomain>[]
  color?: string
  dashed?: boolean
  dot?: false | DotShape
}

export interface BarChartSeries<YDomain> {
  name: string
  data: number[] | DataPoint<number, YDomain>[]
  color?: string
}

export interface PieChartDataPoint {
  name: string
  value: number
  color?: string
}

export interface RangeArea<XDomain> {
  name: string
  init: XDomain
  end: XDomain
  strokeColor?: string | false
  fillColor?: string | false
  fillOpacity?: number
  tickColor?: string | false
}

export interface ReferenceAreaRange<XDomain> {
  x: XDomain
  upperLimit?: number | 'yEnd' | 'yInit'
}

export interface ReferenceAreaPercent<XDomain> {
  x: XDomain
  percent: number
}

interface ReferenceAreaDescription {
  text: string
  color?: string
  style?: CSSProperties
}

export interface ReferenceArea<XDomain> {
  name: string
  description?: ReferenceAreaDescription
  area: ReferenceAreaRange<XDomain>[]
  color?: string
  tickColor?: string
  stroke?: boolean
  strokeColor?: string
  strokeType?: 'line' | 'dashed'
}

export interface ReferenceAreaWithPercents<XDomain> extends ReferenceArea<XDomain> {
  areaPercents: ReferenceAreaPercent<XDomain>[]
}

export interface AxisOptions {
  title?: string
  unit?: string
  domain?: AxisDomain
  tickRenderer?: (tick: TickProps) => ReactElement<SVGElement>
}

export interface RangeSelectorOptions {
  label?: string
  options: { [x: string]: Partial<AxisDomain> }
  defaultOption?: string
}

export interface TickPayload {
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
}

export interface CustomDotProps {
  cx?: number
  cy?: number
  stroke?: string
  shape?: DotShape
}

export interface TooltipOptions<XDomain> {
  type: TooltipType
  render?: TooltipRenderer<XDomain>
}

export function isValueRange(x: AxisDomain): x is ValueRange {
  return typeof (x as ValueRange).init === 'number'
}

export function isDateRange(x: AxisDomain): x is DateRange {
  return Object.prototype.toString.call((x as DateRange).init) === '[object Date]'
}

export function getChartColorScheme(colorScheme: ChartColorScheme): Color[] {
  if (Array.isArray(colorScheme)) return colorScheme
  return CHART_COLOR_SCHEMES[colorScheme]
}
