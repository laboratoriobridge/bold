/**
 * Defines which region of the table the cell refers to
 */
export class GridArea {
  readonly rowStart: number
  readonly columnStart: number
  readonly rowEnd: number
  readonly columnEnd: number

  constructor(rowStart: number, columnStart: number, rowEnd?: number, columnEnd?: number) {
    if (rowStart > rowEnd || columnStart > columnEnd) {
      throw new SyntaxError('End values must be greater than start values.')
    }
    this.rowStart = rowStart
    this.columnStart = columnStart
    this.rowEnd = rowEnd ?? rowStart + 1
    this.columnEnd = columnEnd ?? columnStart + 1
  }

  toString() {
    return `${this.rowStart}/${this.columnStart}/${this.rowEnd}/${this.columnEnd}`
  }
}
