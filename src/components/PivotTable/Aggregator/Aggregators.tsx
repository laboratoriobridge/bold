/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'

import { Radio } from '../../Radio'
import { Select } from '../../Select'
import { VFlow } from '../../VFlow'
import { Aggregator } from './model-aggregator'
import { AGGREGATORS, KEY_NOT_DEPENDENT_AGGREGATORS, KEY_DEPENDENT_AGGREGATORS } from './util-aggregator'

export type AggregatorsProps<T extends any> = {
  numberKeys: string[]
  keyMapping: Map<
    keyof T,
    { keyName: string; formatter?: (value: string) => string; ordenator?: (a: string, b: string) => number }
  >
  handleAggregatorChange: (aggregator: Aggregator) => void
  handleAggregatorKeyChange: (key: keyof T) => void
  aggregator: Aggregator
  aggregatorKey: keyof T
}

export function Aggregators<T extends any>(props: AggregatorsProps<T>) {
  const { numberKeys, keyMapping, handleAggregatorKeyChange, handleAggregatorChange, aggregator, aggregatorKey } = props

  const styles = createStyles()

  const itemToString = (item: keyof T | null) => (item ? keyMapping.get(item).keyName || (item as string) : '')

  const handleKeySelect = (item: keyof T) => {
    handleAggregatorKeyChange(item)
  }

  const handleAggregatorSelect = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const idx = Number(evt.target.value)
    handleAggregatorChange(AGGREGATORS[idx])
  }

  const numberKeysIsEmpty = numberKeys.length === 0

  return (
    <VFlow>
      <div css={styles.container}>
        {(numberKeysIsEmpty ? KEY_NOT_DEPENDENT_AGGREGATORS : AGGREGATORS).map((f, idx) => (
          <div key={f.id} css={styles.wrapper}>
            <Radio
              name='aggregator'
              checked={aggregator.id === f.id}
              disabled={f.keyDependent && numberKeysIsEmpty}
              label={f.label}
              value={idx}
              onChange={handleAggregatorSelect}
            />
          </div>
        ))}
      </div>
      {KEY_DEPENDENT_AGGREGATORS.includes(aggregator) && (
        <Select<keyof T>
          disabled={numberKeysIsEmpty}
          items={numberKeys as Array<keyof T>}
          itemToString={itemToString}
          value={aggregatorKey}
          onChange={handleKeySelect}
        />
      )}
    </VFlow>
  )
}

const createStyles = () => ({
  container: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  `,
  wrapper: css`
    padding-top: 1rem;
    padding-left: 1rem;
    margin-bottom: 0.5rem;
    margin-right: 1rem;
  `,
})
