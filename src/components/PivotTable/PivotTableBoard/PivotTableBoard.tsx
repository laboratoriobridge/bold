import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import React, { CSSProperties, useCallback, useEffect, useMemo, useState } from 'react'
import { HFlow } from '../../HFlow'
import { Theme, useStyles, useTheme } from '../../../styles'
import { Aggregator } from '../Aggregators/model'
import { Cell, Grid } from '../../Grid'
import { Box } from '../Box/Box'
import { Droppable } from '../Droppable/Droppable'
import { Aggregators } from '../Aggregators/Aggregators'
import { Button } from '../../Button'
import { DroppableFilter } from '../Droppable/types/Filter'
import { useLocale } from '../../../i18n'
import { ModalMountTarget } from '../../Modal'
import { KeyMap } from '../model'
import { Text } from '../../Text'
import { BoardField, FieldFiltersByKey, FieldValuesByKey, RowColumnKeys } from './model'
import { renderClearTableModal } from './render'
import { FilterValuesTags } from './FilterValuesTags'
import { useOnKeyNav } from './useOnKeyNav'
import { getInitialKeys, initializeActiveFilters } from './utils'
interface BoardAggregatorProps<T extends object> {
  handleChange: (aggregator: Aggregator) => void
  handleKeyChange: (key: keyof T) => void
  value: Aggregator
  key: keyof T
}
interface PivotTableBoardProps<T extends object> {
  keys: FieldValuesByKey<T>
  keyMapping: KeyMap<T>
  numberKeys: Array<keyof T>
  isBuilding: boolean
  handleSubmit: (values: RowColumnKeys<T>, filterValues: FieldFiltersByKey<T>) => void
  handleReset: () => void
  aggregator: BoardAggregatorProps<T>
  initialFields?: Array<BoardField<T>>
}

export function PivotTableBoard<T extends object>(props: PivotTableBoardProps<T>) {
  const { keys, keyMapping, handleSubmit, numberKeys, isBuilding, handleReset, aggregator, initialFields } = props

  const { pivotTableBoard: pivotTableBoardLabels } = useLocale()

  const allFiltersByKey = useMemo(() => {
    const map = new Map<keyof T, Set<string>>()
    keys.forEach((values, key) => map.set(key, new Set(values)))
    return map
  }, [keys])

  const [filterState, setFilterState] = useState<FieldFiltersByKey<T>>(new Map<keyof T, Set<string>>(allFiltersByKey))

  const [initialized, setInitialized] = useState(false)
  const [rowKeys, setRowKeys] = useState<Array<keyof T>>([])
  const [columnKeys, setColumnKeys] = useState<Array<keyof T>>([])
  const [availableKeys, setAvailableKeys] = useState<Array<keyof T>>([])

  useEffect(() => {
    if (!initialized) {
      const { initialRowKeys, initialColumnKeys, initialAvailableKeys } = getInitialKeys(keys, initialFields)

      initializeActiveFilters(allFiltersByKey, keys, initialFields, setFilterState)

      setRowKeys(initialRowKeys)
      setColumnKeys(initialColumnKeys)
      setAvailableKeys(initialAvailableKeys)
      setInitialized(true)
    }
  }, [initialized, keys, allFiltersByKey, initialFields])

  const theme = useTheme()
  const { classes } = useStyles(createStyles, theme)

  const onTableCreate = useCallback(() => handleSubmit([rowKeys, columnKeys], filterState), [
    columnKeys,
    filterState,
    handleSubmit,
    rowKeys,
  ])

  const handleClearFilters = useCallback(() => setFilterState(allFiltersByKey), [allFiltersByKey])

  const handleUpdateAvailableKeys = useCallback((availableKeys: Array<keyof T>) => setAvailableKeys(availableKeys), [])
  const handleUpdateRowKeys = useCallback((rowKeys: Array<keyof T>) => setRowKeys(rowKeys), [])
  const handleUpdateColumnKeys = useCallback((columnKeys: Array<keyof T>) => setColumnKeys(columnKeys), [])

  const onTableReset = useCallback(() => {
    handleUpdateColumnKeys([])
    handleUpdateRowKeys([])
    handleClearFilters()
    handleReset()
    handleUpdateAvailableKeys(Array.from(keys.keys()))
  }, [handleClearFilters, handleReset, handleUpdateAvailableKeys, handleUpdateColumnKeys, handleUpdateRowKeys, keys])

  const onKeyNav = useOnKeyNav({
    setColumnKeys: handleUpdateColumnKeys,
    setRowKeys: handleUpdateRowKeys,
    setAvailableKeys: handleUpdateAvailableKeys,
    columnKeys,
    rowKeys,
    availableKeys,
  })

  const handleFilterUpdate = useCallback(
    (key: keyof T, filter: Set<string>) => {
      if (filter.size === 0) {
        filterState.delete(key)
      } else {
        filterState.set(key, filter)
      }
      setFilterState(new Map(filterState))
    },
    [filterState]
  )

  const filter: DroppableFilter<T> = useMemo(
    () => ({
      handleUpdate: handleFilterUpdate,
      keys: keys,
      state: filterState,
    }),
    [handleFilterUpdate, keys, filterState]
  )

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
              name='filter'
              accept='filter'
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
              name='column'
              accept='filter'
            />
          </Box>
        </Cell>
        <Cell md={6} sm={12} xs={12}>
          <Box label={pivotTableBoardLabels.rows} icon='hamburguerMenu'>
            <Droppable<T>
              data-testid='droppable-row'
              keyState={rowKeys}
              filter={filter}
              keyMapping={keyMapping}
              handleKeyUpdate={handleUpdateRowKeys}
              onKeyNav={onKeyNav}
              name='row'
              accept='filter'
            />
          </Box>
        </Cell>
        <Cell md={6} sm={12} xs={12}>
          <Box label={pivotTableBoardLabels.kindOfPresentation}>
            <div className={classes.aggregatorsContainer}>
              <Aggregators
                numberKeys={numberKeys}
                keyMapping={keyMapping}
                handleAggregatorChange={aggregator.handleChange}
                handleAggregatorKeyChange={aggregator.handleKeyChange}
                aggregator={aggregator.value}
                aggregatorKey={aggregator.key}
              />
            </div>
          </Box>
        </Cell>
        <Cell sm={12}>
          <div className={classes.filtersContainer}>
            <Grid wrap alignItems='center'>
              <Cell size={10}>
                <HFlow alignItems='center'>
                  <Text fontWeight='bold'>{pivotTableBoardLabels.appliedFilters}</Text>
                  <FilterValuesTags
                    filterState={filterState}
                    keys={keys}
                    keyMapping={keyMapping}
                    handleFilterUpdate={handleFilterUpdate}
                  />
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

const createStyles = (theme: Theme) => ({
  aggregatorsContainer: {
    padding: '0.75rem',
    margin: '0.25rem',
    minHeight: '7.18rem',
  } as CSSProperties,
  filtersContainer: {
    border: `1px solid ${theme.pallete.gray.c80}`,
    padding: '0.75rem 1.25rem',
  } as CSSProperties,
})
