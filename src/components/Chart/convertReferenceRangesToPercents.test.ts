import { convertReferenceRangesToPercents } from './convertReferenceRangesToPercents'
import { ReferenceArea, ValueRange } from './model'

describe('convert reference areas ranges to percents', () => {
  it('should convert reference areas ranges to percents correctly', () => {
    const referenceAreas: ReferenceArea<string>[] = [
      {
        label: { name: 'Test', description: 'description' },
        area: [
          { x: 'cat 1', upperLimit: 100 },
          { x: 'cat 2', upperLimit: 'yInit' },
          { x: 'cat 3', upperLimit: 'yEnd' },
          { x: 'cat 5', upperLimit: 100 },
        ],
        color: 'color',

        stroke: { color: 'strokeColor', show: true },
        tick: { color: 'tickColor' },
      },
      {
        label: { name: 'Test2' },
        area: [{ x: 'cat 1', upperLimit: 300 }, { x: 'cat 2', upperLimit: 300 }, { x: 'cat 4' }],
      },
      {
        label: { name: 'Test3' },
        area: [{ x: 'cat 1', upperLimit: 400 }, { x: 'cat 2' }, { x: 'cat 5', upperLimit: 200 }],
      },
    ]

    const range: ValueRange = { init: 0, end: 1000, step: 10 }

    const refAreasConverted = convertReferenceRangesToPercents(referenceAreas, range)
    expect(refAreasConverted).toMatchObject([
      {
        label: { name: 'Test', description: 'description' },
        area: [
          { x: 'cat 1', upperLimit: 100 },
          { x: 'cat 2', upperLimit: 'yInit' },
          { x: 'cat 3', upperLimit: 'yEnd' },
          { x: 'cat 5', upperLimit: 100 },
        ],
        areaPercents: [
          { x: 'cat 1', percent: 10 },
          { x: 'cat 2', percent: 0 },
          { x: 'cat 3', percent: 100 },
          { x: 'cat 5', percent: 10 },
        ],
        color: 'color',

        stroke: { color: 'strokeColor', show: true },
        tick: { color: 'tickColor' },
      },
      {
        label: { name: 'Test2' },
        area: [{ x: 'cat 1', upperLimit: 300 }, { x: 'cat 2', upperLimit: 300 }, { x: 'cat 4' }],
        areaPercents: [
          { x: 'cat 1', percent: 20 },
          { x: 'cat 2', percent: 30 },
          { x: 'cat 4', percent: 100 },
        ],
      },
      {
        label: { name: 'Test3' },
        area: [{ x: 'cat 1', upperLimit: 400 }, { x: 'cat 2' }, { x: 'cat 5', upperLimit: 200 }],
        areaPercents: [
          { x: 'cat 1', percent: 10 },
          { x: 'cat 2', percent: 70 },
          { x: 'cat 5', percent: 10 },
        ],
      },
    ])
  })
})
