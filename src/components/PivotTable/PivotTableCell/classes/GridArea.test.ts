import { GridArea } from './GridArea'

const errorMessage = 'End values must be greater than start values.'

describe('GridArea', () => {
  it('should initialize it correctly', () => {
    const input = {
      rowStart: 0,
      columnStart: 5,
      rowEnd: 10,
      columnEnd: 15,
    }

    const result = new GridArea(input.rowStart, input.columnStart, input.rowEnd, input.columnEnd)

    expect(result).toEqual(input)
  })

  it('when dont receive the end values, should set them to their respective start value plus one', () => {
    const rowStart = 0
    const columnStart = 5

    const { rowEnd, columnEnd } = new GridArea(rowStart, columnStart)

    expect(rowEnd).toEqual(1)
    expect(columnEnd).toEqual(6)
  })

  it('when row end is greater than row start, should throw an error', () => {
    const rowStart = 5
    const rowEnd = 0

    expect(() => new GridArea(rowStart, 0, rowEnd, 0)).toThrowError(errorMessage)
  })

  it('when column end is greater than column start, should throw an error', () => {
    const columnStart = 5
    const columnEnd = 0

    expect(() => new GridArea(0, columnStart, 0, columnEnd)).toThrowError(errorMessage)
  })

  it('should convert itself to string correctly', () => {
    const rowStart = 0
    const columnStart = 5
    const rowEnd = 1
    const columnEnd = 6
    const gridArea = new GridArea(rowStart, columnStart, rowEnd, columnEnd)

    const result = gridArea.toString()

    expect(result).toEqual('0/5/1/6')
  })
})
