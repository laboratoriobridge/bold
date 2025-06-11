import { ReactElement } from 'react'
import React from 'react'
import { css } from 'emotion'
import { KeyMap } from '../model'
import { VFlow } from '../../VFlow'
import { Tag } from '../../Tag'
import { HFlow } from '../../HFlow'
import { createTheme, Theme } from '../../../styles'
import { FieldFiltersByKey, FieldValuesByKey } from './model'
import { handleTagFilterRemove } from './utils'

const MAX_FILTER_TAGS = 3

interface FilterValuesTagsProps<T extends object> {
  filterState: FieldFiltersByKey<T>
  keys: FieldValuesByKey<T>
  keyMapping: KeyMap<T>
  handleFilterUpdate: (key: keyof T, values: Set<string>) => void
}

export const FilterValuesTags = <T extends object>(props: FilterValuesTagsProps<T>) => {
  const { filterState, keys, keyMapping, handleFilterUpdate } = props

  const theme = createTheme()
  const styles = createStyles(theme)

  const filterValuesTags: ReactElement[] = []

  Array.from(filterState).forEach(([key, values]) => {
    const allValuesArray = Array.from(values)
    const keyMapEntry = keyMapping.get(key)

    if (keys.get(key)?.length !== allValuesArray.length && allValuesArray.length > 0) {
      const tags: ReactElement[] = allValuesArray.slice(0, MAX_FILTER_TAGS).map((value) => (
        <Tag
          key={value}
          removable
          onRemove={() => handleFilterUpdate(key, handleTagFilterRemove(key, value, filterState))}
          style={styles.tag}
        >
          {keyMapEntry.formatter?.(value) ?? value}
        </Tag>
      ))

      if (allValuesArray.length > MAX_FILTER_TAGS) {
        tags.push(
          <Tag key={`${String(key)}-more`} type='info' style={styles.tag}>
            {`+ ${allValuesArray.length - MAX_FILTER_TAGS} ${keyMapEntry.keyName}`}
          </Tag>
        )
      }

      filterValuesTags.push(
        <HFlow hSpacing={0.25} alignItems='center' key={String(key)}>
          <div>{`${keyMapEntry.keyName}`}</div>
          <div css={styles.tagsContainer}>{tags}</div>
        </HFlow>
      )
    }
  })
  return <VFlow vSpacing={0.5}>{filterValuesTags}</VFlow>
}

const createStyles = (theme: Theme) => ({
  tag: css`
    background-color: ${theme.pallete.primary.c90};
    color: ${theme.pallete.primary.c40};
    border: solid 1px ${theme.pallete.primary.c40};
    margin-left: 0.5rem;
    margin-bottom: 0.25rem;
  `,
  tagsContainer: css`
    display: 'flex';
    flex-wrap: 'wrap';
  `,
})
