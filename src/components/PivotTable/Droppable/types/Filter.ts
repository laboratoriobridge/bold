export type DroppableFilter<T> = {
  /**
   * Map of all keys with it's filter options
   */
  keys: Map<keyof T, Array<string>>

  /**
   * Map of keys to the state of their filters
   */
  state: Map<keyof T, Set<string>>

  /**
   * Function that updates the filterState of a key
   */
  handleUpdate: (key: keyof T, filter: Set<string>) => void
}
