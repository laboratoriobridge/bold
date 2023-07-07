import React from 'react'
import { fireEvent, getNodeText, render } from '@testing-library/react'
import { createTheme, hexToRGB } from '../../../styles'
import * as utilsModule from './utils'
import { PivotTableCell, PivotTableCellProps } from './PivotTableCell'
import { GridArea } from './classes/GridArea'
import { PivotTableProvider, PivotTableContextType } from './PivotTableProvider'
import { PivotTableCellType } from './model'

const createComponent = ({ maxValue, suffix }: PivotTableContextType, props: PivotTableCellProps) => {
  return (
    <PivotTableProvider value={{ maxValue, suffix }}>
      <PivotTableCell {...props} />
    </PivotTableProvider>
  )
}

describe('PivotTableCell', () => {
  const [rowStart, columnStart] = [0, 0]
  const gridArea = new GridArea(rowStart, columnStart)
  const maxValue = 1
  const children = 1

  const mockCalculateCellColor = jest.spyOn(utilsModule, 'calculateCellColor')

  afterEach(() => {
    mockCalculateCellColor.mockClear()
  })

  afterAll(() => {
    mockCalculateCellColor.mockRestore()
  })

  it('should render correctly', () => {
    const types = new Set([PivotTableCellType.VALUE])
    const { container } = render(createComponent({ maxValue }, { gridArea, types, children }))
    expect(container).toMatchSnapshot()
  })

  it('should color font and background correctly', () => {
    const types = new Set([PivotTableCellType.VALUE])
    const expectedColor = 'rgb(0, 1, 2)'
    const expectedBackgroundColor = 'rgb(2, 1, 0)'

    mockCalculateCellColor.mockReturnValue({
      color: expectedColor,
      backgroundColor: expectedBackgroundColor,
    })

    const { container } = render(createComponent({ maxValue }, { gridArea, types, children }))
    const { color, backgroundColor } = window.getComputedStyle(
      selectPivotTableCellElement(container, rowStart, columnStart)
    )

    expect(color).toEqual(expectedColor)
    expect(backgroundColor).toEqual(expectedBackgroundColor)
    expect(mockCalculateCellColor).toBeCalled()
  })

  describe('hover', () => {
    describe.each([PivotTableCellType.VALUE, PivotTableCellType.EMPTY])("when cell type includes '%s'", (typeValue) => {
      const types = new Set([typeValue])

      describe('on mouse enter', () => {
        const theme = createTheme()

        it('when background color is white, should update it correclty', () => {
          mockCalculateCellColor.mockReturnValue({
            color: '',
            backgroundColor: theme.pallete.primary.c100,
          })
          const { container } = render(createComponent({ maxValue }, { gridArea, types, children }))
          const cell = selectPivotTableCellElement(container, rowStart, columnStart)

          fireEvent.mouseEnter(cell)
          const { backgroundColor } = window.getComputedStyle(cell)

          expect(mockCalculateCellColor).toBeCalled()
          expect(backgroundColor).toEqual('rgba(240, 240, 245, 0.5)')
        })

        it('when background color isnt white, should update it correcly', () => {
          const bgColorBeforeMouseEnter = theme.pallete.primary.c50
          mockCalculateCellColor.mockReturnValue({
            color: '',
            backgroundColor: bgColorBeforeMouseEnter,
          })

          const { container } = render(createComponent({ maxValue }, { gridArea, types, children }))
          const cell = selectPivotTableCellElement(container, rowStart, columnStart)

          fireEvent.mouseEnter(cell)
          const { backgroundColor } = window.getComputedStyle(cell)

          expect(backgroundColor).toEqual(hexToRGB(bgColorBeforeMouseEnter, 0.5))
        })
      })

      it('should return to original background color on mouse leave', () => {
        const { container } = render(createComponent({ maxValue }, { gridArea, types, children }))
        const cell = selectPivotTableCellElement(container, rowStart, columnStart)

        const { backgroundColor: initialBgColor } = window.getComputedStyle(cell)
        fireEvent.mouseEnter(cell)
        fireEvent.mouseLeave(cell)
        const { backgroundColor: finalBgColor } = window.getComputedStyle(cell)

        expect(initialBgColor).toEqual(finalBgColor)
      })
    })

    it("when cell types dont include 'value' or 'empty', shouldnt update background color on mouse enter", () => {
      const types = new Set([PivotTableCellType.GRANDTOTAL])
      const { container } = render(createComponent({ maxValue }, { gridArea, types, children }))
      const cell = selectPivotTableCellElement(container, rowStart, columnStart)

      const { backgroundColor: bgColorBeforeMouseEnter } = window.getComputedStyle(cell)
      fireEvent.mouseEnter(cell)
      const { backgroundColor: bgColorAfterMouseEnter } = window.getComputedStyle(cell)

      expect(bgColorBeforeMouseEnter).toEqual(bgColorAfterMouseEnter)
    })
  })

  it.each([
    [PivotTableCellType.GRANDTOTAL, false],
    [PivotTableCellType.VALUE, true],
  ])("should add suffix only when cell type inclues 'value'", (typeValue, shouldAddSuffix) => {
    const suffix = 'os'
    const types = new Set([typeValue])

    const { container } = render(createComponent({ maxValue, suffix }, { gridArea, types, children }))
    const result = getNodeText(selectPivotTableCellElement(container, rowStart, columnStart) as HTMLElement)

    expect(result.endsWith(suffix)).toBe(shouldAddSuffix)
  })

  describe('font weight', () => {
    it.each([PivotTableCellType.HEADER, PivotTableCellType.TOTAL])(
      "when cell type inclues '%s', should bold its content",
      (typeValue) => {
        const types = new Set([typeValue])

        const { container } = render(createComponent({ maxValue }, { gridArea, types, children }))
        const { fontWeight } = window.getComputedStyle(selectPivotTableCellElement(container, rowStart, columnStart))

        expect(fontWeight).toEqual('bold')
      }
    )

    it("when cell types dont inclue 'header' or 'total', shouldnt bold its content", () => {
      const types = new Set([PivotTableCellType.GRANDTOTAL])

      const { container } = render(createComponent({ maxValue }, { gridArea, types, children }))
      const { fontWeight } = window.getComputedStyle(selectPivotTableCellElement(container, rowStart, columnStart))

      expect(fontWeight).toEqual('normal')
    })
  })

  describe('justify content', () => {
    it.each([PivotTableCellType.VALUE, PivotTableCellType.EMPTY])(
      "when cell type includes '%s', should right-justify its content",
      (typeValue) => {
        const types = new Set([typeValue])

        const { container } = render(createComponent({ maxValue }, { gridArea, types, children }))
        const { justifyContent } = window.getComputedStyle(
          selectPivotTableCellElement(container, rowStart, columnStart)
        )

        expect(justifyContent).toEqual('flex-end')
      }
    )

    it("when cell types dont include 'value' or 'empty', should left-justify content", () => {
      const types = new Set([PivotTableCellType.GRANDTOTAL])

      const { container } = render(createComponent({ maxValue }, { gridArea, types, children }))
      const { justifyContent } = window.getComputedStyle(selectPivotTableCellElement(container, rowStart, columnStart))

      expect(justifyContent).toEqual('flex-start')
    })
  })

  it.each([false, true])('should set border bottom only when is end row', (isEndRow) => {
    const types = new Set([PivotTableCellType.GRANDTOTAL])

    const { container } = render(createComponent({ maxValue }, { gridArea, types, children, isEndRow }))
    const { borderBottom } = window.getComputedStyle(selectPivotTableCellElement(container, rowStart, columnStart))

    expect(borderBottom.startsWith('1px solid')).toBe(isEndRow)
  })

  it.each([false, true])('should set border right only when is end column', (isEndColumn) => {
    const types = new Set([PivotTableCellType.GRANDTOTAL])

    const { container } = render(createComponent({ maxValue }, { gridArea, types, children, isEndColumn }))
    const { borderRight } = window.getComputedStyle(selectPivotTableCellElement(container, rowStart, columnStart))

    expect(borderRight.startsWith('1px solid')).toBe(isEndColumn)
  })

  describe('content format', () => {
    let mockNumberFormatter = jest.spyOn(utilsModule, 'numberFormatter')

    afterEach(() => {
      mockNumberFormatter.mockClear()
    })

    it("when types dont include 'header' and its content is a number, should format it correctly", () => {
      const types = new Set([PivotTableCellType.GRANDTOTAL])
      const input = 1.234
      const expected = '1,24'
      mockNumberFormatter.mockReturnValue(expected)

      const { container } = render(createComponent({ maxValue }, { gridArea, types, children: input }))
      const result = getNodeText(selectPivotTableCellElement(container, rowStart, columnStart) as HTMLElement)

      expect(result).toEqual(expected)
      expect(mockNumberFormatter).toBeCalled()
    })

    it("when types dont include 'header' but its content isnt a number, shouldnt format it", () => {
      const types = new Set([PivotTableCellType.GRANDTOTAL])
      const input = '1.234'

      const { container } = render(createComponent({ maxValue }, { gridArea, types, children: input }))
      const result = getNodeText(selectPivotTableCellElement(container, rowStart, columnStart) as HTMLElement)

      expect(result).toEqual(input)
      expect(mockNumberFormatter).not.toBeCalled()
    })

    it.each(['Header text', 1.234])("when cell type includes 'header', souldnt format it", (input) => {
      const types = new Set([PivotTableCellType.HEADER])

      const { container } = render(createComponent({ maxValue }, { gridArea, types, children: input }))
      const result = getNodeText(selectPivotTableCellElement(container, rowStart, columnStart) as HTMLElement)

      expect(result).toEqual(input.toString())
      expect(mockNumberFormatter).not.toBeCalled()
    })
  })
})

const selectPivotTableCellElement = (container: HTMLElement, row: number, column: number): Element =>
  container.querySelector(`div[data-rownumber~="${row}"], div[data-columnnumber~="${column}"]`)!!
