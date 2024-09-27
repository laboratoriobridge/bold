/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import { Radio } from '../../Radio'
import { Select } from '../../Select'
import { VFlow } from '../../VFlow'
import { useLocale } from '../../../i18n'
import { Aggregator, KeyMap } from './model-aggregator'
import { getAggregators, getKeyDependentAndNotDependentAggregators } from './util-aggregator'

type AggregatorsProps<T extends object> = {
  numberKeys: Array<keyof T>
  keyMap: KeyMap<T>
  handleAggregatorChange: (aggregator: Aggregator) => void
  handleAggregatorKeyChange: (key: keyof T) => void
  aggregator: Aggregator
  aggregatorKey: keyof T
}

export function Aggregators<T extends object>(props: AggregatorsProps<T>) {
  const locale = useLocale()

  const { numberKeys, keyMap, handleAggregatorKeyChange, handleAggregatorChange, aggregator, aggregatorKey } = props

  const styles = createStyles()

  const itemToString = (item: keyof T | null) => (item ? keyMap.get(item).keyName || (item as string) : '')

  const handleKeySelect = (item: keyof T) => {
    handleAggregatorKeyChange(item)
  }

  const AGGREGATORS = getAggregators(
    locale.aggregators.COUNT,
    locale.aggregators.PERCENTAGE,
    locale.aggregators.AVERAGE,
    locale.aggregators.MAXIMUM,
    locale.aggregators.MINIMUM
  )

  const [KEY_DEPENDENT_AGGREGATORS, KEY_NOT_DEPENDENT_AGGREGATORS] = getKeyDependentAndNotDependentAggregators(
    AGGREGATORS
  )

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
      {KEY_DEPENDENT_AGGREGATORS.some((item) => item.id === aggregator.id) && (
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
