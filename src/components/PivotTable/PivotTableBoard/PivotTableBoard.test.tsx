import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { Aggregator, AggregatorEnum } from '../Aggregators/model'
import { KeyMap } from '../model'
import { PivotTableBoard } from './PivotTableBoard'

describe('PivotTable - PivotTableBoard', () => {
  type Test = {
    name: string
    size?: string
  }

  const keys = new Map<keyof Test, string[]>([
    ['name', ['Apple', 'Banana', 'Blackberry', 'Lemon', 'Orange', 'Watermelon']],
    ['size', ['Very small', 'Small', 'Medium', 'Big', 'Very big']],
  ])

  const keyMapping: KeyMap<Test> = new Map([
    ['name', { keyName: 'Name' }],
    ['size', { keyName: 'Size' }],
  ])

  const aggregator = { id: AggregatorEnum.COUNT, label: 'Count', value: undefined, keyDependent: false }

  const initialFields = [
    { key: 'name' as keyof Test, origin: 'row' as 'row' | 'column', filters: ['Apple'] },
    {
      key: 'size' as keyof Test,
      origin: 'column' as 'row' | 'column',
      filters: ['Medium', 'Very small', 'Small', 'Medium'],
    },
  ]

  it('should render correctly', () => {
    const { container } = render(
      <PivotTableBoard<Test>
        keys={keys}
        keyMapping={keyMapping}
        numberKeys={[]}
        isBuilding={false}
        handleSubmit={() => null}
        handleReset={() => null}
        handleAggregatorChange={(aggregator: Aggregator) => null}
        handleAggregatorKeyChange={(key: keyof Test) => null}
        aggregator={aggregator}
        aggregatorKey='name'
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render with initial fields', () => {
    const { container } = render(
      <PivotTableBoard<Test>
        keys={keys}
        keyMapping={keyMapping}
        numberKeys={[]}
        isBuilding={false}
        handleSubmit={() => null}
        handleReset={() => null}
        handleAggregatorChange={(aggregator: Aggregator) => null}
        handleAggregatorKeyChange={(key: keyof Test) => null}
        aggregator={aggregator}
        aggregatorKey='name'
        initialFields={initialFields}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should call handleSubmit with the correct parameters when the user clicks the generate table button', () => {
    const handleSubmit = jest.fn()
    const handleReset = jest.fn()
    const handleAggregatorChange = jest.fn()
    const handleAggregatorKeyChange = jest.fn()

    const { getByRole } = render(
      <PivotTableBoard<Test>
        keys={keys}
        keyMapping={keyMapping}
        numberKeys={[]}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        handleAggregatorChange={handleAggregatorChange}
        handleAggregatorKeyChange={handleAggregatorKeyChange}
        aggregator={aggregator}
        aggregatorKey='size'
        isBuilding={false}
        initialFields={initialFields}
      />
    )

    fireEvent.click(getByRole('button', { name: /Generate table/i }))

    expect(handleSubmit).toHaveBeenCalledWith(
      [['name'], ['size']],
      new Map([
        ['name', new Set(['Apple'])],
        ['size', new Set(['Medium', 'Very small', 'Small', 'Medium'])],
      ])
    )
  })

  it('should call handleSubmit with the correct parameters when the user interacts with the filters', async () => {
    const handleSubmit = jest.fn()
    const handleReset = jest.fn()
    const handleAggregatorChange = jest.fn()
    const handleAggregatorKeyChange = jest.fn()

    const { findByTestId, getByRole } = render(
      <PivotTableBoard<Test>
        keys={keys}
        keyMapping={keyMapping}
        numberKeys={[]}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        handleAggregatorChange={handleAggregatorChange}
        handleAggregatorKeyChange={handleAggregatorKeyChange}
        aggregator={aggregator}
        aggregatorKey='size'
        isBuilding={false}
      />
    )

    const droppableAvailableField = await findByTestId('droppable-available')
    const droppableColumn = await findByTestId('droppable-column')
    const draggable = droppableAvailableField.firstChild!.firstChild!

    fireEvent.dragStart(draggable)
    fireEvent.dragEnter(droppableColumn)
    fireEvent.dragOver(droppableColumn)
    fireEvent.drop(droppableColumn)
    fireEvent.dragEnd(draggable)

    fireEvent.click(getByRole('button', { name: /Name/i }))

    fireEvent.click(getByRole('checkbox', { name: /Banana/i }))

    fireEvent.click(getByRole('button', { name: /Generate table/i }))
    expect(handleSubmit).toHaveBeenCalledWith(
      [[], ['name']],
      new Map([
        ['name', new Set(['Apple', 'Blackberry', 'Lemon', 'Orange', 'Watermelon'])],
        ['size', new Set(['Very small', 'Small', 'Medium', 'Big', 'Very big'])],
      ])
    )
  })
})
