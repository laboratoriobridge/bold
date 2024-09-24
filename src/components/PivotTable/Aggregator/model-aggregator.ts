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
