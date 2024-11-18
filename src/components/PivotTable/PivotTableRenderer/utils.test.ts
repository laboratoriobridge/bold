import { KeyConfig } from '../model'
import { getCurrentPath, getInitialPosition, getResult } from './util'

type Fruit = {
  name: string
  size: string
}
const defaultTree = {
  nodeKey: 'name',
  nodeValue: 7,
  maxLeafValue: 3,
  broccoli: {
    nodeKey: 'size',
    nodeValue: 3,
    maxLeafValue: 1,
    1: { nodeValue: 1 },
    2: { nodeValue: 2 },
  },
  carrot: {
    nodeKey: 'size',
    nodeValue: 4,
    maxLeafValue: 3,
    1: { nodeValue: 1 },
    2: { nodeValue: 3 },
  },
} as any
const keyMapping = new Map([
  [
    'name' as keyof Fruit,
    {
      keyName: 'Name',
      ordenator(a, b) {
        return a > b ? 1 : -1
      },
      formatter(a) {
        return a[0].toLocaleUpperCase() + a.slice(1)
      },
    } as KeyConfig,
  ],
  [
    'size' as keyof Fruit,
    {
      keyName: 'Weight',
      ordenator(a, b) {
        return a > b ? 1 : -0
      },
      formatter(a) {
        return a + ' kg'
      },
    } as KeyConfig,
  ],
])

describe('getResult', () => {
  it('Should describe the position and value of the table elements in the correct order', () => {
    const result = getResult(defaultTree, 'column', keyMapping, ['name', 'size'])
    expect(result[0].path).toEqual('|name.Broccoli') // Path on the tree
    expect(result[0].column).toEqual(1) // which row or column it is on
    expect(result[0].value).toEqual('Broccoli') // value to be shown on the span
    expect(result[0].span).toEqual({ value: 2 }) // size of span
    expect(result[1].path).toEqual('|name.Carrot')
    expect(result[1].column).toEqual(1)
    expect(result[1].value).toEqual('Carrot')
    expect(result[1].span).toEqual({ value: 2 })
    expect(result[2].path).toEqual('|name.Broccoli|size.1 kg')
    expect(result[2].column).toEqual(2)
    expect(result[2].value).toEqual('1 kg')
    expect(result[2].span).toEqual({ value: 1 })
    expect(result[3].path).toEqual('|name.Broccoli|size.1 kg|RESULT')
    expect(result[3].column).toEqual(3)
    expect(result[3].value).toEqual(1)
    expect(result[3].span).toEqual({ value: 1 })
    expect(result[4].path).toEqual('|name.Broccoli|size.2 kg')
    expect(result[4].column).toEqual(2)
    expect(result[4].value).toEqual('2 kg')
    expect(result[4].span).toEqual({ value: 1 })
    expect(result[5].path).toEqual('|name.Broccoli|size.2 kg|RESULT')
    expect(result[5].column).toEqual(3)
    expect(result[5].value).toEqual(2)
    expect(result[5].span).toEqual({ value: 1 })
    expect(result[6].path).toEqual('|name.Carrot|size.1 kg')
    expect(result[6].column).toEqual(2)
    expect(result[6].value).toEqual('1 kg')
    expect(result[6].span).toEqual({ value: 1 })
    expect(result[7].path).toEqual('|name.Carrot|size.1 kg|RESULT')
    expect(result[7].column).toEqual(3)
    expect(result[7].value).toEqual(1)
    expect(result[7].span).toEqual({ value: 1 })
    expect(result[8].path).toEqual('|name.Carrot|size.2 kg')
    expect(result[8].column).toEqual(2)
    expect(result[8].value).toEqual('2 kg')
    expect(result[8].span).toEqual({ value: 1 })
    expect(result[9].path).toEqual('|name.Carrot|size.2 kg|RESULT')
    expect(result[9].column).toEqual(3)
    expect(result[9].value).toEqual(3)
    expect(result[9].span).toEqual({ value: 1 })
  })

  it('Should calculate correct span sizes when not all keys are present on the filter', () => {
    const result = getResult(defaultTree, 'row', keyMapping, ['name'])
    expect(result[0].path).toEqual('|name.Broccoli') // Path on the tree
    expect(result[0].row).toEqual(1) // which row or column it is on
    expect(result[0].value).toEqual('Broccoli') // value to be shown on the span
    expect(result[0].span).toEqual({ value: 1 }) // size of span
    expect(result[1].path).toEqual('|name.Carrot')
    expect(result[1].row).toEqual(1)
    expect(result[1].value).toEqual('Carrot')
    expect(result[1].span).toEqual({ value: 1 })
    expect(result[2].path).toEqual('|name.Broccoli|size.1 kg')
    expect(result[2].row).toEqual(2)
    expect(result[2].value).toEqual('1 kg')
    expect(result[2].span).toEqual({ value: 1 })
    expect(result[3].path).toEqual('|name.Broccoli|size.1 kg|RESULT')
    expect(result[3].row).toEqual(3)
    expect(result[3].value).toEqual(1)
    expect(result[3].span).toEqual({ value: 1 })
    expect(result[4].path).toEqual('|name.Broccoli|size.2 kg')
    expect(result[4].row).toEqual(2)
    expect(result[4].value).toEqual('2 kg')
    expect(result[4].span).toEqual({ value: 1 })
    expect(result[5].path).toEqual('|name.Broccoli|size.2 kg|RESULT')
    expect(result[5].row).toEqual(3)
    expect(result[5].value).toEqual(2)
    expect(result[5].span).toEqual({ value: 1 })
    expect(result[6].path).toEqual('|name.Carrot|size.1 kg')
    expect(result[6].row).toEqual(2)
    expect(result[6].value).toEqual('1 kg')
    expect(result[6].span).toEqual({ value: 1 })
    expect(result[7].path).toEqual('|name.Carrot|size.1 kg|RESULT')
    expect(result[7].row).toEqual(3)
    expect(result[7].value).toEqual(1)
    expect(result[7].span).toEqual({ value: 1 })
    expect(result[8].path).toEqual('|name.Carrot|size.2 kg')
    expect(result[8].row).toEqual(2)
    expect(result[8].value).toEqual('2 kg')
    expect(result[8].span).toEqual({ value: 1 })
    expect(result[9].path).toEqual('|name.Carrot|size.2 kg|RESULT')
    expect(result[9].row).toEqual(3)
    expect(result[9].value).toEqual(3)
    expect(result[9].span).toEqual({ value: 1 })
  })
})

describe('getCurrentPath', () => {
  it('Should creat the path correctly', () => {
    const result = getCurrentPath('name', 'John')

    expect(result).toEqual('|name.John')
  })
})

describe('getInitialPosition', () => {
  it('Should calculate accuratly the initial position of a span', () => {
    const result = getResult(defaultTree, 'column', keyMapping, ['name', 'size'])
    const initialPositionOfBroccoliHeaderSpan = getInitialPosition(result[0].initialPosition)
    const initialPositionOfBroccoliValue2Span = getInitialPosition(result[5].initialPosition)
    const initialPositionOfCarrotHeaderSpan = getInitialPosition(result[1].initialPosition)
    const initialPositionOfCarrotValue2Span = getInitialPosition(result[9].initialPosition)
    expect(initialPositionOfBroccoliHeaderSpan).toEqual(1)
    expect(initialPositionOfBroccoliValue2Span).toEqual(2)
    expect(initialPositionOfCarrotHeaderSpan).toEqual(3)
    expect(initialPositionOfCarrotValue2Span).toEqual(4)
  })
})
