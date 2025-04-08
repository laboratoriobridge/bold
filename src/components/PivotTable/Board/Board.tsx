/** @jsx jsx */

import { ReactElement, useState } from 'react'
import { css, jsx } from '@emotion/core'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { HFlow } from '../../HFlow'
import { VFlow } from '../../VFlow'
import { Tag } from '../../Tag'
import { Theme, useTheme } from '../../../styles'
import { PivotTableProps } from '../PivotTableGrid/model'
import { Aggregator } from '../Aggregators/model'
import { Cell, Grid } from '../../Grid'
import { Box } from '../Box/Box'
import { Droppable } from '../Droppable/Droppable'
import { Aggregators } from '../Aggregators/Aggregators'
import { Button } from '../../Button'
import { blue } from '../../../styles/colors'
import { DroppableFilter } from '../Droppable/types/Filter'
import { getInitialKeysAndFilters } from './util-board'
import { BoardField, FieldValuesByKey } from './model-board'

interface BoardProps<T extends object> {
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

export function Board<T extends object>(props: BoardProps<T>) {
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

  const allFiltersByKey: Map<keyof T, Set<string>> = new Map()
  keys.forEach((values, key) => allFiltersByKey.set(key, new Set(values)))

  const [filterState, setFilterState] = useState<Map<keyof T, Set<string>>>(
    new Map<keyof T, Set<string>>(allFiltersByKey)
  )

  const { initialRowKeys, initialColumnKeys, initialAvailableKeys } = getInitialKeysAndFilters(
    keys,
    allFiltersByKey,
    initialFields,
    setFilterState
  )

  const [rowKeys, setRowKeys] = useState<Array<keyof T>>(initialRowKeys)
  const [columnKeys, setColumnKeys] = useState<Array<keyof T>>(initialColumnKeys)
  const [availableKeys, setAvailableKeys] = useState<Array<keyof T>>(initialAvailableKeys)

  const theme = useTheme()
  const styles = createStyles(theme)

  const onTableCreate = () => {
    handleSubmit([rowKeys, columnKeys], filterState)
  }

  //TODO
  const onTableReset = () => {
    handleUpdateColumnKeys([])
    handleUpdateRowKeys([])
    handleLimparFiltros()
    handleReset()
    handleUpdateAvailableKeys(Array.from(keys.keys()))
  }

  const onKeyNav = (dir: 'left' | 'right' | 'up' | 'down' | null, origin: string, key?: keyof T) => {
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

  const handleFilterUpdate = (key: keyof T, filtro: Set<string>) => {
    if (filtro.size < 1) {
      filterState.delete(key)
    } else {
      filterState.set(key, filtro)
    }
    setFilterState(new Map(filterState))
  }

  const handleTagFilterRemove = (key: keyof T, value: string) => {
    const values = filterState.get(key) || new Set<string>()
    values.delete(value)
    handleFilterUpdate(key, values)
  }

  const handleLimparFiltros = () => {
    setFilterState(allFiltersByKey)
  }

  const filterValuesTags: ReactElement[] = []

  for (let [key, values] of Array.from(filterState)) {
    const tags: ReactElement[] = []

    if (keys.get(key)?.length === values.size || values.size === 0) {
      continue
    }

    let idx = 0
    for (let value of Array.from(values)) {
      if (idx < 3) {
        tags.push(
          <Tag key={value} removable onRemove={() => handleTagFilterRemove(key, value)} style={styles.tag}>
            {keyMapping.get(key).formatter?.(value) ?? value}
          </Tag>
        )
      } else {
        break
      }
      idx++
    }

    if (values.size > 3) {
      tags.push(
        <Tag key={key as string} type='info' style={styles.tag}>
          {`+ ${values.size - 3} ${keyMapping.get(key).keyName}`}
        </Tag>
      )
    }

    filterValuesTags.push(
      <HFlow hSpacing={0.25} alignItems='center' key={key as string}>
        <div>{`${keyMapping.get(key).keyName}`}</div>
        <div css={styles.tagsContainer}>{tags}</div>
      </HFlow>
    )
  }

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
          <Box label='Campos disponíveis'>
            <Droppable<T>
              keyState={availableKeys}
              filter={filter}
              keyMapping={keyMapping}
              handleKeyUpdate={handleUpdateAvailableKeys}
              onKeyNav={onKeyNav}
              name={'filter'}
              accept={'naosei'}
            />
          </Box>
        </Cell>
        <Cell md={6} sm={12} xs={12}>
          <Box label='Colunas' icon='hamburguerMenu' rotation='90'>
            <Droppable<T>
              name={'column'}
              keyState={columnKeys}
              filter={filter}
              keyMapping={keyMapping}
              handleKeyUpdate={handleUpdateColumnKeys}
              onKeyNav={onKeyNav}
              accept={'naosei'}
            />
          </Box>
        </Cell>
        <Cell md={6} sm={12} xs={12}>
          <Box label='Linhas' icon='hamburguerMenu'>
            <Droppable<T>
              keyState={rowKeys}
              filter={filter}
              handleKeyUpdate={handleUpdateRowKeys}
              keyMapping={keyMapping}
              onKeyNav={onKeyNav}
              name={'row'}
              accept={'naosei'}
            />
          </Box>
        </Cell>
        <Cell md={6} sm={12} xs={12}>
          <Box label='Forma de apresentação'>
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
                  <b>Filtros aplicados</b>
                  {filterValuesBox}
                </HFlow>
              </Cell>
              <Cell size={2}>
                <Button
                  onClick={handleLimparFiltros}
                  size='small'
                  kind='normal'
                  skin='outline'
                  style={{ float: 'right' }}
                >
                  Limpar filtros
                </Button>
              </Cell>
            </Grid>
          </div>
        </Cell>
        <Cell size={12}>
          <HFlow justifyContent='flex-end'>
            <Button kind='normal' size='medium' onClick={onTableReset}>
              Limpar tabela
            </Button>
            <Button kind='primary' size='medium' onClick={onTableCreate} loading={isBuilding} disabled={isBuilding}>
              Gerar tabela
            </Button>
          </HFlow>
        </Cell>
      </Grid>
    </DndProvider>
  )
}

const createStyles = (theme: Theme) => ({
  tag: css`
    background-color: ${blue.c90};
    color: ${blue.c40};
    border: solid 1px ${blue.c40};
    margin-left: 0.5rem;
    margin-bottom: 0.25rem;
  `,
  tagsContainer: css`
    display: flex;
    flex-wrap: wrap;
  `,
  aggregatorsContainer: css`
    padding: 0.75rem;
    margin: 0.25rem;
    min-height: 7.18rem;
  `,
  filtersContainer: css`
    border: 1px solid ${theme.pallete.gray.c80};
    padding: 0.75rem 1.25rem;
  `,
})
