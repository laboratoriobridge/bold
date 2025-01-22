import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { KeyConfig } from '../model'
import { PivotTableProvider } from '../PivotTableCell/PivotTableProvider'
import { PivotTableGrid } from './PivotTableGrid'
import { PivotTableProps } from './model'

type Fruit = {
  name: string
  size: string
}
const createComponent = () => {
  const props: PivotTableProps<Fruit> = {
    keysMapping: new Map([
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
    ]),
    defaultTree: {
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
    } as any,
    complementaryTree: {
      nodeKey: 'size',
      nodeValue: 7,
      maxLeafValue: 3,
      1: {
        nodeKey: 'name',
        nodeValue: 2,
        maxLeafValue: 1,
        carrot: { nodeValue: 1 },
        broccoli: { nodeValue: 1 },
      },
      2: {
        nodeKey: 'name',
        nodeValue: 5,
        maxLeafValue: 3,
        carrot: { nodeValue: 3 },
        broccoli: { nodeValue: 2 },
      },
    } as any,
    rowKeys: ['name'],
    columnKeys: ['size'],
  }
  const maxLeafValue = props.defaultTree.maxLeafValue as number
  return (
    <PivotTableProvider maxValue={maxLeafValue} suffix=''>
      <PivotTableGrid {...props}></PivotTableGrid>
    </PivotTableProvider>
  )
}

describe('PivotTableGrid', () => {
  it('should render correctly', () => {
    const { container } = render(createComponent())
    expect(container).toMatchSnapshot()
  })

  it('should apply hover in a cross', () => {
    const { container } = render(createComponent())
    const cellToHover = container.querySelector('div[data-columnnumber="3"][data-rownumber="3"]')!!
    const cellColumnHeader = container.querySelector('div[data-columnnumber="3"][data-rownumber="1 2"]')!!
    const cellRowHeader = container.querySelector('div[data-columnnumber="1 2"][data-rownumber="3"]')!!
    const cellRightValue = container.querySelector('div[data-columnnumber="4"][data-rownumber="3"]')!!
    const cellBottomValue = container.querySelector('div[data-columnnumber="3"][data-rownumber="4"]')!!
    const cellColumnTotal = container.querySelector('div[data-columnnumber="3"][data-rownumber="5"]')!!
    const cellRowTotal = container.querySelector('div[data-columnnumber="5"][data-rownumber="3"]')!!

    expect(window.getComputedStyle(cellToHover).backgroundColor).toEqual('rgb(132, 170, 255)')

    fireEvent.mouseEnter(cellToHover)

    expect(window.getComputedStyle(cellToHover).backgroundColor).toEqual('rgba(132, 170, 255, 0.5)')
    expect(window.getComputedStyle(cellColumnHeader).backgroundColor).toEqual('rgba(240, 240, 245, 0.5)')
    expect(window.getComputedStyle(cellRowHeader).backgroundColor).toEqual('rgba(240, 240, 245, 0.5)')
    expect(window.getComputedStyle(cellColumnTotal).backgroundColor).toEqual('rgba(240, 240, 245, 0.5)')
    expect(window.getComputedStyle(cellRowTotal).backgroundColor).toEqual('rgba(240, 240, 245, 0.5)')
    expect(window.getComputedStyle(cellRightValue).backgroundColor).toEqual('rgba(0, 105, 208, 0.5)')
    expect(window.getComputedStyle(cellBottomValue).backgroundColor).toEqual('rgba(132, 170, 255, 0.5)')
  })
})
