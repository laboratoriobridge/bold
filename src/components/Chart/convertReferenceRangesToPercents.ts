import { ReferenceArea, ReferenceAreaPercent, ReferenceAreaRange, ReferenceAreaWithPercents, ValueRange } from './model'

export function convertReferenceRangesToPercents<XDomain>(
  referenceAreas: ReferenceArea<XDomain>[],
  yRange: ValueRange
): ReferenceAreaWithPercents<XDomain>[] {
  return referenceAreas?.map((ref, i) => ({
    ...ref,
    areaPercents: ref.area.map((area) => getReferenceAreaPercent(area, referenceAreas, yRange, i)).filter((e) => e),
  }))
}

function getReferenceAreaPercent<XDomain>(
  range: ReferenceAreaRange<XDomain>,
  rangeAreas: ReferenceArea<XDomain>[],
  yRange: ValueRange,
  currAreaIdx: number
): ReferenceAreaPercent<XDomain> {
  const max = getUpperLimitValue(range.upperLimit, yRange)
  const prevArea = getPrevArea<XDomain>(rangeAreas, currAreaIdx, range.x)
  const min = prevArea ? getUpperLimitValue(prevArea.upperLimit, yRange) ?? yRange.end : yRange.init

  return {
    x: range.x,
    percent: (((max ?? yRange.end) - (min ?? yRange.init)) / (yRange.end - yRange.init)) * 100,
  }
}

const getUpperLimitValue = (upperLimit: number | 'yInit' | 'yEnd', yRange: ValueRange) =>
  upperLimit === 'yEnd' ? yRange.end : upperLimit === 'yInit' ? yRange.init : upperLimit

function getPrevArea<XDomain>(
  rangeAreas: ReferenceArea<XDomain>[],
  currAreaIdx: number,
  x: XDomain
): ReferenceAreaRange<XDomain> {
  for (const ra of rangeAreas.slice(0, currAreaIdx).reverse()) {
    const range = ra.area?.find((a) => a.x === x)
    if (range) return range
  }
}
