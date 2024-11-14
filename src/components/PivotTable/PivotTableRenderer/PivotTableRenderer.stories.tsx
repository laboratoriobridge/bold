import React from 'react'
import { KeyConfig } from '../model/model-keyMap'
import { PivotTableProvider } from '../PivotTableCell/PivotTableProvider'
import { PivotTableRenderer } from './PivotTableRenderer'
import { TableProps } from './model-pivotTableRenderer'

export default {
  title: 'Components/PivotTable/PivotTableRenderer',
}

type Fruit = {
  name: string
  size: string
}

export const AllTypes = () => {
  const props: TableProps<Fruit> = {
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
  const maxLeafValue = props.defaultTree.maxLeafValue
  return (
    <PivotTableProvider maxValue={maxLeafValue} suffix=''>
      <PivotTableRenderer {...props}></PivotTableRenderer>
    </PivotTableProvider>
  )
}
