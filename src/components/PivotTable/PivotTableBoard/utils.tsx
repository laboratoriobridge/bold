import { difference, intersection } from 'lodash'

import { ReactElement } from 'react'
import React from 'react'
import { css } from 'emotion'
import { PivotTableProps } from '../PivotTableGrid/model'
import { Tag } from '../../Tag'
import { HFlow } from '../../HFlow'
import { blue } from '../../../styles/colors'
import { Heading } from '../../Heading'
import { Icon } from '../../Icon'
import { modal } from '../../Modal'
import { LocaleConfiguration } from '../../../i18n'
import { BoardField, FieldValuesByKey } from './model'

interface InitialKeyPositionsAndValues<T> {
  initialRowKeys: Array<keyof T>
  initialColumnKeys: Array<keyof T>
  initialAvailableKeys: Array<keyof T>
}

export function getInitialKeysAndFilters<T>(
  valuesByKey: FieldValuesByKey<T>,
  allFiltersByKey: Map<keyof T, Set<string>>,
  initialFields?: Array<BoardField<T>>,
  setFilterState?: (filter: Map<keyof T, Set<string>>) => void
): InitialKeyPositionsAndValues<T> {
  const rowKeys: Array<keyof T> = []
  const columnKeys: Array<keyof T> = []
  const filtersByKey = new Map(allFiltersByKey)

  initialFields?.forEach(({ key, origin, filters }) => {
    if (origin === 'row') rowKeys.push(key)
    if (origin === 'column') columnKeys.push(key)

    if (filters.length > 0) {
      const validFilters = intersection(filters, valuesByKey.get(key))
      filtersByKey.set(key, new Set(validFilters))
    }
  })

  const availableKeys: Array<keyof T> = difference(Array.from(valuesByKey.keys()), [...rowKeys, ...columnKeys])

  setFilterState?.(filtersByKey)

  return {
    initialRowKeys: rowKeys,
    initialColumnKeys: columnKeys,
    initialAvailableKeys: availableKeys,
  }
}

export const renderClearTableModal = (labels: LocaleConfiguration['pivotTableBoard'], onTableReset: () => void) => () =>
  modal({
    size: 'small',
    render: () => (
      <Heading level={3}>
        <div css={styles.titleWrapper}>
          <Icon icon={'exclamationTriangleOutline'} fill={'danger'} size={3} style={styles.icon} />
          {labels.clearTableTitle}
        </div>
      </Heading>
    ),
    actions: [
      { label: labels.clearTableCancel },
      { label: labels.clearTableConfirm, kind: 'danger', onClick: onTableReset },
    ],
  })()

function handleTagFilterRemove<T extends object>(
  key: keyof T,
  value: string,
  filterState: Map<keyof T, Set<string>>,
  handleFilterUpdate: (key: keyof T, values: Set<string>) => void
) {
  const values = filterState.get(key) || new Set<string>()
  values.delete(value)
  handleFilterUpdate(key, values)
}

export function getFilterValuesTags<T extends object>(
  filterState: Map<keyof T, Set<string>>,
  keys: FieldValuesByKey<T>,
  keyMapping: PivotTableProps<T>['keysMapping'],
  handleFilterUpdate: (key: keyof T, values: Set<string>) => void
) {
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
          <Tag
            key={value}
            removable
            onRemove={() => handleTagFilterRemove(key, value, filterState, handleFilterUpdate)}
            style={styles.tag}
          >
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
  return filterValuesTags
}

const styles = {
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
  titleWrapper: css`
    display: flex;
    align-items: center;
  `,
  icon: css`
    margin-right: 1rem;
    vertical-align: middle;
  `,
}
