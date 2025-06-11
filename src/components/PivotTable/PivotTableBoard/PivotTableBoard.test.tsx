import React from 'react'
import { fireEvent, render, within } from '@testing-library/react'
import { KeyMap } from '../model'
import { AggregatorEnum } from '../Aggregators/model'
import { PivotTableBoard } from './PivotTableBoard'
import { BoardField } from './model'

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

  const aggregator = {
    handleChange: jest.fn(),
    handleKeyChange: jest.fn(),
    value: { id: AggregatorEnum.COUNT, label: 'Count', value: undefined, keyDependent: false },
    key: 'name' as keyof Test,
  }

  const initialFields: BoardField<Test>[] = [
    { key: 'name' as keyof Test, origin: 'row', filters: ['Apple'] },
    {
      key: 'size' as keyof Test,
      origin: 'column',
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
        aggregator={aggregator}
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
        aggregator={aggregator}
        initialFields={initialFields}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should call handleSubmit with the correct parameters when the user clicks the generate table button', () => {
    const handleSubmit = jest.fn()
    const handleReset = jest.fn()

    const { getByRole } = render(
      <PivotTableBoard<Test>
        keys={keys}
        keyMapping={keyMapping}
        numberKeys={[]}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        aggregator={aggregator}
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

    const { findByTestId, getByRole } = render(
      <PivotTableBoard<Test>
        keys={keys}
        keyMapping={keyMapping}
        numberKeys={[]}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        aggregator={aggregator}
        isBuilding={false}
      />
    )

    const droppableAvailable = await findByTestId('droppable-available')
    const droppableColumn = await findByTestId('droppable-column')
    const firstAvailableDraggable = droppableAvailable.firstChild!.firstChild!

    fireEvent.dragStart(firstAvailableDraggable)
    fireEvent.dragEnter(droppableColumn)
    fireEvent.dragOver(droppableColumn)
    fireEvent.drop(droppableColumn)
    fireEvent.dragEnd(firstAvailableDraggable)

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

  it('should reset columns, rows, and available fields upon confirming the table clear action', async () => {
    const handleReset = jest.fn()

    const { findByTestId, getByRole } = render(
      <PivotTableBoard<Test>
        keys={keys}
        keyMapping={keyMapping}
        numberKeys={[]}
        isBuilding={false}
        handleSubmit={() => null}
        handleReset={handleReset}
        aggregator={aggregator}
        initialFields={initialFields}
      />
    )

    const columnsDroppable = await findByTestId('droppable-column')
    const rowsDroppable = await findByTestId('droppable-row')
    const availableDroppable = await findByTestId('droppable-available')

    expect(within(rowsDroppable).getByText('Name')).toBeInTheDocument()
    expect(within(columnsDroppable).getByText('Size')).toBeInTheDocument()
    expect(within(availableDroppable).queryByText('Name')).not.toBeInTheDocument()

    fireEvent.click(getByRole('button', { name: /Clear table/i }))
    fireEvent.click(await findByTestId('confirm-clear-table'))

    expect(handleReset).toHaveBeenCalledTimes(1)

    const placeholderText = /Drag items to insert into table/i
    expect(within(rowsDroppable).getByText(placeholderText)).toBeInTheDocument()
    expect(within(columnsDroppable).getByText(placeholderText)).toBeInTheDocument()

    expect(within(availableDroppable).getByText('Name')).toBeInTheDocument()
    expect(within(availableDroppable).getByText('Size')).toBeInTheDocument()
  })

  it('should call handleKeyChange when the user selects a key for the aggregator', async () => {
    const handleKeyChange = jest.fn()

    const { findByTestId, findByRole } = render(
      <PivotTableBoard<Test>
        keys={keys}
        keyMapping={keyMapping}
        numberKeys={['name', 'size']}
        isBuilding={false}
        handleSubmit={() => null}
        handleReset={() => null}
        aggregator={{
          handleChange: jest.fn(),
          handleKeyChange: handleKeyChange,
          value: { id: AggregatorEnum.MAXIMUM, label: 'Maximum', value: undefined, keyDependent: true },
          key: 'size' as keyof Test,
        }}
      />
    )

    fireEvent.click(await findByTestId('aggregator-key-select'))
    fireEvent.click(await findByRole('option', { name: 'Name' }))
    expect(handleKeyChange).toHaveBeenCalledWith('name')
  })

  it('should call handleChange when the user selects an aggregator', async () => {
    const handleChange = jest.fn()

    const percentageLabel = 'Percentage'

    const { findByText } = render(
      <PivotTableBoard<Test>
        keys={keys}
        keyMapping={keyMapping}
        numberKeys={[]}
        isBuilding={false}
        handleSubmit={() => null}
        handleReset={() => null}
        aggregator={{
          handleChange: handleChange,
          handleKeyChange: jest.fn(),
          value: {
            id: AggregatorEnum.COUNT,
            label: 'Count',
            value: undefined,
            keyDependent: false,
          },
          key: 'size' as keyof Test,
        }}
      />
    )

    fireEvent.click(await findByText(percentageLabel))
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        id: AggregatorEnum.PERCENTAGE,
        label: percentageLabel,
        keyDependent: false,
        suffix: '%',
        value: expect.any(Function),
        chain: expect.arrayContaining([
          expect.objectContaining({
            id: AggregatorEnum.COUNT,
            label: 'Count',
          }),
        ]),
      })
    )
  })

  it('should enable submit button when isBuilding is false', () => {
    const { getByRole } = render(
      <PivotTableBoard<Test>
        keys={keys}
        keyMapping={keyMapping}
        numberKeys={[]}
        handleSubmit={jest.fn()}
        handleReset={jest.fn()}
        aggregator={aggregator}
        isBuilding={false}
      />
    )

    expect(getByRole('button', { name: /Generate table/i })).toBeEnabled()
  })

  it('should disable submit button when isBuilding is true', () => {
    const { getByRole } = render(
      <PivotTableBoard<Test>
        keys={keys}
        keyMapping={keyMapping}
        numberKeys={[]}
        handleSubmit={jest.fn()}
        handleReset={jest.fn()}
        aggregator={aggregator}
        isBuilding={true}
      />
    )
    expect(getByRole('button', { name: /Generate table/i })).toBeDisabled()
  })

  describe('onKeyNav', () => {
    it('should move Size from Columns to Available and call handleFilterUpdate when the user presses left arrow key', async () => {
      const handleSubmit = jest.fn()
      const handleReset = jest.fn()
      const { findByTestId, getByRole } = render(
        <PivotTableBoard<Test>
          keys={keys}
          keyMapping={keyMapping}
          numberKeys={[]}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
          aggregator={aggregator}
          isBuilding={false}
          initialFields={initialFields}
        />
      )

      const droppableColumn = await findByTestId('droppable-column')
      const sizeDraggable = await within(droppableColumn).findByText('Size')

      fireEvent.keyDown(sizeDraggable, { key: 'ArrowLeft', code: 'ArrowLeft' })

      fireEvent.click(getByRole('button', { name: /Generate table/i }))

      expect(handleSubmit).toHaveBeenCalledWith(
        [['name'], []],
        new Map([
          ['name', new Set(['Apple'])],
          ['size', new Set(['Medium', 'Very small', 'Small', 'Medium'])],
        ])
      )
    })
  })
})
