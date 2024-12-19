/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import { Radio } from '../../Radio'
import { Select } from '../../Select'
import { VFlow } from '../../VFlow'
import { useLocale } from '../../../i18n'
import { KeyMap } from '../model'
import { Aggregator } from './model'
import { getAggregators, getKeyNotDependentAggregators } from './utils'

interface AggregatorsProps<T extends object> {
  numberKeys: Array<keyof T>
  keyMapping: KeyMap<T>
  handleAggregatorChange: (aggregator: Aggregator) => void
  handleAggregatorKeyChange: (key: keyof T) => void
  aggregator: Aggregator
  aggregatorKey: keyof T
}

export function Aggregators<T extends object>(props: AggregatorsProps<T>) {
  const locale = useLocale()

  const { numberKeys, keyMapping, handleAggregatorKeyChange, handleAggregatorChange, aggregator, aggregatorKey } = props

  const styles = createStyles()

  const itemToString = (item: keyof T | null) => (item ? keyMapping.get(item).keyName || (item as string) : '')

  const handleKeySelect = (item: keyof T) => {
    handleAggregatorKeyChange(item)
  }

  const aggregators = getAggregators(locale.aggregators)

  const keyNotDependentAggregators = getKeyNotDependentAggregators(aggregators)

  const handleAggregatorSelect = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const idx = Number(evt.target.value)
    handleAggregatorChange(aggregators[idx])
  }

  const numberKeysIsEmpty = numberKeys.length === 0

  return (
    <VFlow>
      <div css={styles.container}>
        {(numberKeysIsEmpty ? keyNotDependentAggregators : aggregators).map((f, idx) => (
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
      {aggregator.keyDependent && (
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
