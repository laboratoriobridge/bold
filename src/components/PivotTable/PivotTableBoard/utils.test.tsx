import { getFilterValuesTags, getInitialKeysAndFilters } from './utils'

describe('getInitialKeysAndFilters', () => {
  it('should return initial keys and filters based on initialFields', () => {
    const valuesByKey = new Map([
      ['key1', ['value1', 'value2']],
      ['key2', ['value3', 'value4']],
      ['key3', ['value5']],
    ])
    const allFiltersByKey = new Map([
      ['key1', new Set(['value1'])],
      ['key2', new Set(['value3', 'value4'])],
    ])
    const initialFields = [
      { key: 'key1', origin: 'row', filters: ['value1'] },
      { key: 'key2', origin: 'column', filters: ['value3'] },
    ]
    const setFilterState = jest.fn()

    const result = getInitialKeysAndFilters(valuesByKey, allFiltersByKey, initialFields, setFilterState)

    expect(result).toEqual({
      initialRowKeys: ['key1'],
      initialColumnKeys: ['key2'],
      initialAvailableKeys: ['key3'],
    })
    expect(setFilterState).toHaveBeenCalledWith(
      new Map([
        ['key1', new Set(['value1'])],
        ['key2', new Set(['value3'])],
      ])
    )
  })
})

describe('getFilterValuesTags', () => {
  it('should return tags for filter values', () => {
    const filterState = new Map([['key1', new Set(['value1', 'value2'])]])
    const keys = new Map([['key1', ['value1', 'value2', 'value3', 'value4']]])
    const keyMapping = new Map([['key1', { keyName: 'Key 1', formatter: (value: string) => `Formatted ${value}` }]])
    const handleFilterUpdate = jest.fn()

    const result = getFilterValuesTags(filterState, keys, keyMapping, handleFilterUpdate)

    expect(result).toHaveLength(1)
    expect(result[0].props.children[1].props.children).toHaveLength(2)
  })

  it('should return an empty array if no filters are applied', () => {
    const filterState = new Map()
    const keys = new Map([['key1', ['value1', 'value2']]])
    const keyMapping = new Map([['key1', { keyName: 'Key 1', formatter: (value: string) => value }]])
    const handleFilterUpdate = jest.fn()

    const result = getFilterValuesTags(filterState, keys, keyMapping, handleFilterUpdate)

    expect(result).toEqual([])
  })

  it('should handle cases where more than 3 filter values are selected', () => {
    const filterState = new Map([['key1', new Set(['value1', 'value2', 'value3', 'value4'])]])
    const keys = new Map([['key1', ['value1', 'value2', 'value3', 'value4', 'value5']]])
    const keyMapping = new Map([['key1', { keyName: 'Key 1', formatter: (value: string) => value }]])
    const handleFilterUpdate = jest.fn()

    const result = getFilterValuesTags(filterState, keys, keyMapping, handleFilterUpdate)

    expect(result).toHaveLength(1)
    expect(result[0].props.children[1].props.children).toHaveLength(4)
    expect(result[0].props.children[1].props.children[3].props.children).toBe('+ 1 Key 1')
  })
})
