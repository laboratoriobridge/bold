import { useEffect, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import React from 'react'
import { HFlow } from '../../HFlow'
import { VFlow } from '../../VFlow'
import { useTheme } from '../../../styles'
import { PivotTableProps } from '../PivotTableGrid/model'
import { Aggregator } from '../Aggregators/model'
import { Cell, Grid } from '../../Grid'
import { Box } from '../Box/Box'
import { Droppable } from '../Droppable/Droppable'
import { Aggregators } from '../Aggregators/Aggregators'
import { Button } from '../../Button'
import { DroppableFilter } from '../Droppable/types/Filter'
import { useLocale } from '../../../i18n'
import { KeyNavigationDirection } from '../Droppable/types/model'
import { ModalMountTarget } from '../../Modal'
import { getFilterValuesTags, getInitialKeysAndFilters, renderClearTableModal } from './utils'
import { BoardField, FieldValuesByKey } from './model'
import { pivotTableBoardCreateStyles } from './styles'

interface PivotTableBoardProps<T extends object> {
  keys: FieldValuesByKey<T>
  keyMapping: PivotTableProps<T>['keysMapping']
  numberKeys: Array<keyof T>
  isBuilding: boolean
  handleSubmit: (values: [Array<keyof T>, Array<keyof T>], filterValues: Map<keyof T, Set<string>>) => void
  handleReset: () => void
  handleAggregatorChange: (aggregator: Aggregator) => void
  handleAggregatorKeyChange: (key: keyof T) => void
  aggregator: Aggregator
  aggregatorKey: keyof T
  initialFields?: Array<BoardField<T>>
}

export function PivotTableBoard<T extends object>(props: PivotTableBoardProps<T>) {
  const {
    keys,
    keyMapping,
    handleSubmit,
    numberKeys,
    isBuilding,
    handleAggregatorChange,
    handleAggregatorKeyChange,
    handleReset,
    aggregator,
    aggregatorKey,
    initialFields,
  } = props

  const { pivotTableBoard: pivotTableBoardLabels } = useLocale()

  const allFiltersByKey: Map<keyof T, Set<string>> = new Map()
  keys.forEach((values, key) => allFiltersByKey.set(key, new Set(values)))

  const [filterState, setFilterState] = useState<Map<keyof T, Set<string>>>(
    new Map<keyof T, Set<string>>(allFiltersByKey)
  )

  const [initialized, setInitialized] = useState(false)
  const [rowKeys, setRowKeys] = useState<Array<keyof T>>([])
  const [columnKeys, setColumnKeys] = useState<Array<keyof T>>([])
  const [availableKeys, setAvailableKeys] = useState<Array<keyof T>>([])

  useEffect(() => {
    if (!initialized) {
      const { initialRowKeys, initialColumnKeys, initialAvailableKeys } = getInitialKeysAndFilters(
        keys,
        allFiltersByKey,
        initialFields,
        setFilterState
      )

      setRowKeys(initialRowKeys)
      setColumnKeys(initialColumnKeys)
      setAvailableKeys(initialAvailableKeys)
      setInitialized(true)
    }
  }, [initialized, keys, allFiltersByKey, initialFields])

  const theme = useTheme()
  const styles = pivotTableBoardCreateStyles(theme)

  const onTableCreate = () => {
    handleSubmit([rowKeys, columnKeys], filterState)
  }

  const onTableReset = () => {
    handleUpdateColumnKeys([])
    handleUpdateRowKeys([])
    handleClearFilters()
    handleReset()
    handleUpdateAvailableKeys(Array.from(keys.keys()))
  }

  const onKeyNav = (dir: KeyNavigationDirection, origin: string, key?: keyof T) => {
    if (origin === 'filter') {
      dir === 'right' && setColumnKeys([...columnKeys, key])
      dir === 'left' && setRowKeys([...rowKeys, key])
    } else if (origin === 'column') {
      dir === 'right' && setRowKeys([...rowKeys, key])
      dir === 'left' && setAvailableKeys([...availableKeys, key])
    } else if (origin === 'row') {
      dir === 'right' && setColumnKeys([...columnKeys, key])
      dir === 'left' && setAvailableKeys([...availableKeys, key])
    }
  }
  const handleUpdateAvailableKeys = (availableKeys: Array<keyof T>) => setAvailableKeys(availableKeys)
  const handleUpdateRowKeys = (rowKeys: Array<keyof T>) => setRowKeys(rowKeys)
  const handleUpdateColumnKeys = (columnKeys: Array<keyof T>) => setColumnKeys(columnKeys)

  const handleFilterUpdate = (key: keyof T, filter: Set<string>) => {
    if (filter.size < 1) {
      filterState.delete(key)
    } else {
      filterState.set(key, filter)
    }
    setFilterState(new Map(filterState))
  }

  const handleClearFilters = () => {
    setFilterState(allFiltersByKey)
  }

  const filterValuesTags = getFilterValuesTags(filterState, keys, keyMapping, handleFilterUpdate)

  const filterValuesBox = <VFlow vSpacing={0.5}>{filterValuesTags}</VFlow>

  const filter: DroppableFilter<T> = {
    handleUpdate: handleFilterUpdate,
    keys: keys,
    state: filterState,
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Grid>
        <Cell md={6} sm={12} xs={12}>
          <Box label={pivotTableBoardLabels.availableFields}>
            <Droppable<T>
              data-testid='droppable-available'
              keyState={availableKeys}
              filter={filter}
              keyMapping={keyMapping}
              handleKeyUpdate={handleUpdateAvailableKeys}
              onKeyNav={onKeyNav}
              name={'filter'}
              accept={'filter'}
            />
          </Box>
        </Cell>
        <Cell md={6} sm={12} xs={12}>
          <Box label={pivotTableBoardLabels.columns} icon='hamburguerMenu' rotation='90'>
            <Droppable<T>
              data-testid='droppable-column'
              keyState={columnKeys}
              filter={filter}
              keyMapping={keyMapping}
              handleKeyUpdate={handleUpdateColumnKeys}
              onKeyNav={onKeyNav}
              name={'column'}
              accept={'filter'}
            />
          </Box>
        </Cell>
        <Cell md={6} sm={12} xs={12}>
          <Box label={pivotTableBoardLabels.rows} icon='hamburguerMenu'>
            <Droppable<T>
              keyState={rowKeys}
              filter={filter}
              keyMapping={keyMapping}
              handleKeyUpdate={handleUpdateRowKeys}
              onKeyNav={onKeyNav}
              name={'row'}
              accept={'filter'}
            />
          </Box>
        </Cell>
        <Cell md={6} sm={12} xs={12}>
          <Box label={pivotTableBoardLabels.formOfPresentation}>
            <div css={styles.aggregatorsContainer}>
              <Aggregators
                numberKeys={numberKeys}
                keyMapping={keyMapping}
                handleAggregatorChange={handleAggregatorChange}
                handleAggregatorKeyChange={handleAggregatorKeyChange}
                aggregator={aggregator}
                aggregatorKey={aggregatorKey}
              />
            </div>
          </Box>
        </Cell>
        <Cell sm={12}>
          <div css={styles.filtersContainer}>
            <Grid wrap alignItems='center'>
              <Cell size={10}>
                <HFlow alignItems='center'>
                  <b>{pivotTableBoardLabels.appliedFilters}</b>
                  {filterValuesBox}
                </HFlow>
              </Cell>
              <Cell size={2}>
                <Button
                  onClick={handleClearFilters}
                  size='small'
                  kind='normal'
                  skin='outline'
                  style={{ float: 'right' }}
                >
                  {pivotTableBoardLabels.clearFilters}
                </Button>
              </Cell>
            </Grid>
          </div>
        </Cell>
        <Cell size={12}>
          <HFlow justifyContent='flex-end'>
            <Button kind='normal' size='medium' onClick={renderClearTableModal(pivotTableBoardLabels, onTableReset)}>
              {pivotTableBoardLabels.clearTable}
            </Button>
            <ModalMountTarget />
            <Button kind='primary' size='medium' onClick={onTableCreate} loading={isBuilding} disabled={isBuilding}>
              {pivotTableBoardLabels.generateTable}
            </Button>
          </HFlow>
        </Cell>
      </Grid>
    </DndProvider>
  )
}
