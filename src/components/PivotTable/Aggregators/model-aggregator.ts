export enum AggregatorEnum {
  PERCENTAGE = 'PERCENTAGE',
  COUNT = 'COUNT',
  AVERAGE = 'AVERAGE',
  MAXIMUM = 'MAXIMUM',
  MINIMUM = 'MINIMUM',
}

export type AggregatorFunction = (values: number[], total?: number) => number

export type Aggregator = {
  id: AggregatorEnum
  label: string
  value: AggregatorFunction | undefined
  keyDependent: boolean
  chain?: Aggregator[]
  suffix?: string
}

type KeyConfig = {
  keyName: string
  formatter?: (value: string) => string
  ordenator?: (a: string, b: string) => number
}

export type KeyMap<T extends any> = Map<keyof T, KeyConfig>
