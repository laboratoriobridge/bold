import { BoardField, FieldFiltersByKey, FieldValuesByKey } from './model'
import { getInitialKeys, handleTagFilterRemove, initializeActiveFilters } from './utils'

type Test = {
  name: string
  size?: string
}

describe('getInitialKeys', () => {
  it('should return initial keys based on initialFields', () => {
    const valuesByKey: FieldValuesByKey<Test> = new Map([
      ['name', ['Apple', 'Banana']],
      ['size', ['Very small', 'Small']],
    ])

    const initialFields: Array<BoardField<Test>> = [
      { key: 'name', origin: 'row', filters: ['Apple'] },
      { key: 'size', origin: 'column', filters: ['Small'] },
    ]

    const result = getInitialKeys(valuesByKey, initialFields)

    const expected = {
      initialRowKeys: ['name'],
      initialColumnKeys: ['size'],
      initialAvailableKeys: [],
    }

    expect(result).toEqual(expected)
  })

  it('should return remaining keys in availableKeys when initialFields is partially provided', () => {
    const valuesByKey: FieldValuesByKey<Test> = new Map([
      ['name', ['Apple', 'Banana']],
      ['size', ['Very small', 'Small']],
    ])

    const initialFields: Array<BoardField<Test>> = [{ key: 'name', origin: 'row', filters: ['Apple'] }]

    const result = getInitialKeys(valuesByKey, initialFields)

    const expected = {
      initialRowKeys: ['name'],
      initialColumnKeys: [],
      initialAvailableKeys: ['size'],
    }

    expect(result).toEqual(expected)
  })

  it('should return empty arrays when no initial fields are provided', () => {
    const valuesByKey: FieldValuesByKey<Test> = new Map([
      ['name', ['Apple', 'Banana']],
      ['size', ['Very small', 'Small']],
    ])

    const initialFields: Array<BoardField<Test>> = []

    const result = getInitialKeys(valuesByKey, initialFields)

    const expected = {
      initialRowKeys: [],
      initialColumnKeys: [],
      initialAvailableKeys: ['name', 'size'],
    }

    expect(result).toEqual(expected)
  })
})

describe('initializeActiveFilters', () => {
  it('should initialize active filters based on initialFields', () => {
    const allFiltersByKey: FieldFiltersByKey<Test> = new Map([
      ['name', new Set('Apple')],
      ['size', new Set('Very small')],
    ])

    const keys: FieldValuesByKey<Test> = new Map([
      ['name', ['Apple', 'Banana']],
      ['size', ['Very small', 'Small']],
    ])

    const initialFields: Array<BoardField<Test>> = [
      { key: 'name', origin: 'row', filters: ['Apple'] },
      { key: 'size', origin: 'column', filters: ['Small'] },
    ]

    const result = initializeActiveFilters(allFiltersByKey, keys, initialFields)

    expect(result).toEqual(
      new Map([
        ['name', new Set(['Apple'])],
        ['size', new Set(['Small'])],
      ])
    )
  })

  it('should initialize with all filters when no initial fields are provided', () => {
    const allFiltersByKey: FieldFiltersByKey<Test> = new Map([
      ['name', new Set(['Apple'])],
      ['size', new Set(['Very small'])],
    ])

    const valuesByKey: FieldValuesByKey<Test> = new Map([
      ['name', ['Apple', 'Banana']],
      ['size', ['Very small', 'Small']],
    ])

    const initialFields: Array<BoardField<Test>> = []

    const result = initializeActiveFilters(allFiltersByKey, valuesByKey, initialFields)

    expect(result).toEqual(
      new Map([
        ['name', new Set(['Apple'])],
        ['size', new Set(['Very small'])],
      ])
    )
  })

  describe('handleTagFilterRemove', () => {
    it('should remove a single value from a Set containing multiple values', () => {
      const filterState: FieldFiltersByKey<Test> = new Map([
        ['name', new Set(['Apple', 'Banana', 'Orange'])],
        ['size', new Set(['Small'])],
      ])

      const originalSizeSet = filterState.get('size')

      const result = handleTagFilterRemove('name', 'Banana', filterState)

      const expected = new Set(['Apple', 'Orange'])

      expect(filterState.get('size')).toEqual(originalSizeSet)
      expect(result).toEqual(expected)
      expect(result.has('Banana')).toBe(false)
      expect(result.size).toBe(2)
    })

    it('should return an empty Set when the last value is removed', () => {
      const filterState: FieldFiltersByKey<Test> = new Map([['name', new Set(['Apple'])]])

      const result = handleTagFilterRemove('name', 'Apple', filterState)

      expect(result).toEqual(new Set())
      expect(result.size).toBe(0)
    })

    it('should return an identical Set if the value to be removed does not exist', () => {
      const initialSet = new Set(['Apple', 'Banana'])
      const filterState: FieldFiltersByKey<Test> = new Map([['name', initialSet]])

      const result = handleTagFilterRemove('name', 'Watermelon', filterState)

      expect(result).toEqual(initialSet)
      expect(result.size).toBe(2)
    })

    it('should return an empty Set if the key does not exist in the filter state', () => {
      const filterState: FieldFiltersByKey<Test> = new Map([['name', new Set(['Apple'])]])

      const result = handleTagFilterRemove('size', 'Small', filterState)

      expect(result).toEqual(new Set())
      expect(result.size).toBe(0)
    })
  })
})
