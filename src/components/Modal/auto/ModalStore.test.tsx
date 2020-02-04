import React from 'react'

import { ModalStore } from './ModalStore'

describe('append', () => {
  it('should include an item to the state', () => {
    const store = new ModalStore()
    expect(store['value']).toEqual({ items: [] })
    const key = store.append(props => <span>1</span>)
    expect(store['value']).toEqual({
      items: [{ key, component: <span>1</span> }],
    })
  })
  it('should provide a render prop', () => {
    const store = new ModalStore()
    const renderFunction = jest.fn()
    store.append(renderFunction)
    expect(renderFunction).toHaveBeenCalledWith({
      dispose: expect.any(Function),
    })
  })
})

describe('dispose', () => {
  it('should return a new function that removes a component from state by its key', () => {
    const store = new ModalStore()
    store.append(() => <span>1</span>)
    const key2 = store.append(() => <span>2</span>)
    store.append(() => <span>3</span>)
    store['dispose'](key2)()
    expect(store['value'].items).toHaveLength(2)
  })
})
