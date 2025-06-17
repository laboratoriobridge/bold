import React, { CSSProperties, ReactElement } from 'react'
import { KeyMap } from '../model'
import { VFlow } from '../../VFlow'
import { Tag } from '../../Tag'
import { HFlow } from '../../HFlow'
import { Theme, useStyles } from '../../../styles'
import { EMPTY_ARRAY } from '../../../util'
import { FieldFiltersByKey, FieldValuesByKey } from './model'

const MAX_FILTER_TAGS = 3

interface FilterValuesTagsProps<T extends object> {
  filterState: FieldFiltersByKey<T>
  keys: FieldValuesByKey<T>
  keyMapping: KeyMap<T>
  onRemoveTag: (key: keyof T, value: string) => void
}

export const FilterValuesTags = <T extends object>(props: FilterValuesTagsProps<T>) => {
  const { filterState, keys, keyMapping, onRemoveTag } = props

  const { classes } = useStyles(createStyles)

  const filterValuesTags = Array.from(filterState).map(([key, values]) => {
    const allValuesArray = Array.from(values)
    const keyMapEntry = keyMapping.get(key)

    if (keys.get(key)?.length !== allValuesArray.length && allValuesArray.length > 0) {
      const tags: ReactElement[] = allValuesArray.slice(0, MAX_FILTER_TAGS).map((value) => (
        <Tag key={value} removable onRemove={() => onRemoveTag(key, value)} style={classes.tag}>
          {keyMapEntry.formatter?.(value) ?? value}
        </Tag>
      ))

      const overflowCount = allValuesArray.length - MAX_FILTER_TAGS

      if (overflowCount > 0) {
        tags.push(
          <Tag key={`${String(key)}-more`} type='info' style={classes.tag}>
            {`+ ${overflowCount} ${keyMapEntry.keyName}`}
          </Tag>
        )
      }

      return (
        <HFlow hSpacing={0.25} alignItems='center' key={String(key)}>
          <div>{`${keyMapEntry.keyName}`}</div>
          <div className={classes.tagsContainer}>{tags}</div>
        </HFlow>
      )
    } else return EMPTY_ARRAY
  })

  return <VFlow vSpacing={0.5}>{filterValuesTags}</VFlow>
}

const createStyles = (theme: Theme) => ({
  tag: {
    backgroundColor: `${theme.pallete.primary.c90}`,
    color: `${theme.pallete.primary.c40}`,
    border: `solid 1px ${theme.pallete.primary.c40}`,
    marginLeft: '0.5rem',
    marginBottom: '0.25rem',
  } as CSSProperties,
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  } as CSSProperties,
})
