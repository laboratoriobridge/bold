import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import React, { CSSProperties, useCallback, useEffect, useMemo, useState } from 'react'
import { HFlow } from '../../HFlow'
import { Theme, useStyles } from '../../../styles'
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
import { getInitialKeys, handleTagFilterRemove, initializeActiveFilters } from './utils'
interface BoardAggregatorProps<T extends object> {
  onChange: (aggregator: Aggregator) => void
  onKeyChange: (key: keyof T) => void
  value: Aggregator
  key: keyof T
}
interface PivotTableBoardProps<T extends object> {
  keys: FieldValuesByKey<T>
  keyMapping: KeyMap<T>
  numberKeys: Array<keyof T>
  isBuilding: boolean
  onSubmit: (values: RowColumnKeys<T>, filterValues: FieldFiltersByKey<T>) => void
  onReset: () => void
  aggregator: BoardAggregatorProps<T>
  initialFields?: Array<BoardField<T>>
}

export function PivotTableBoard<T extends object>(props: PivotTableBoardProps<T>) {
  const { keys, keyMapping, onSubmit, numberKeys, isBuilding, onReset, aggregator, initialFields } = props

  const { pivotTableBoard: pivotTableBoardLabels } = useLocale()

  const allFiltersByKey = useMemo(() => new Map(Array.from(keys).map(([key, values]) => [key, new Set(values)])), [
    keys,
  ])

  const [filterState, setFilterState] = useState<FieldFiltersByKey<T>>(allFiltersByKey)

  const [initialized, setInitialized] = useState(false)
  const [rowKeys, setRowKeys] = useState<Array<keyof T>>([])
  const [columnKeys, setColumnKeys] = useState<Array<keyof T>>([])
  const [availableKeys, setAvailableKeys] = useState<Array<keyof T>>([])

  useEffect(() => {
    if (!initialized) {
      const { initialRowKeys, initialColumnKeys, initialAvailableKeys } = getInitialKeys(keys, initialFields)

      setFilterState(initializeActiveFilters(allFiltersByKey, keys, initialFields))

      setRowKeys(initialRowKeys)
      setColumnKeys(initialColumnKeys)
      setAvailableKeys(initialAvailableKeys)
      setInitialized(true)
    }
  }, [initialized, keys, allFiltersByKey, initialFields])

  const { classes } = useStyles(createStyles)

  const handleGenerateTableClick = useCallback(() => onSubmit([rowKeys, columnKeys], filterState), [
    columnKeys,
    filterState,
    onSubmit,
    rowKeys,
  ])

  const handleClearFilters = useCallback(() => setFilterState(allFiltersByKey), [allFiltersByKey])

  const handleTableReset = useCallback(() => {
    setColumnKeys([])
    setRowKeys([])
    handleClearFilters()
    onReset()
    setAvailableKeys(Array.from(keys.keys()))
  }, [handleClearFilters, onReset, keys])

  const onKeyNav = useOnKeyNav({
    setColumnKeys,
    setRowKeys,
    setAvailableKeys,
    columnKeys,
    rowKeys,
    availableKeys,
  })

  const handleFilterUpdate = useCallback(
    (key: keyof T, filter: Set<string>) => {
      setFilterState(() => {
        const newState = new Map(filterState)
        if (filter.size === 0) {
          newState.delete(key)
        } else {
          newState.set(key, filter)
        }
        return newState
      })
    },
    [filterState]
  )

  const handleRemoveTag = useCallback(
    (key: keyof T, value: string) => {
      handleFilterUpdate(key, handleTagFilterRemove(key, value, filterState))
    },
    [filterState, handleFilterUpdate]
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
              handleKeyUpdate={setAvailableKeys}
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
              handleKeyUpdate={setColumnKeys}
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
              handleKeyUpdate={setRowKeys}
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
                handleAggregatorChange={aggregator.onChange}
                handleAggregatorKeyChange={aggregator.onKeyChange}
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
                    onRemoveTag={handleRemoveTag}
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
            <Button
              kind='normal'
              size='medium'
              onClick={renderClearTableModal(pivotTableBoardLabels, handleTableReset)}
            >
              {pivotTableBoardLabels.clearTable}
            </Button>
            <ModalMountTarget />
            <Button
              kind='primary'
              size='medium'
              onClick={handleGenerateTableClick}
              loading={isBuilding}
              disabled={isBuilding}
            >
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
    border: `1px solid ${theme.pallete.divider}`,
    padding: '0.75rem 1.25rem',
  } as CSSProperties,
})
