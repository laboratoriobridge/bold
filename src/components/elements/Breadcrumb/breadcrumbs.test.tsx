// tslint:disable:no-string-literal

import { render } from 'react-testing-library'
import React from 'react'

import { withRouter } from '../../../test'

import { Breadcrumb, BreadcrumbEntry, BreadcrumbNav, BreadcrumbProvider, BreadcrumbSimpleStore } from './'

const entry1: BreadcrumbEntry = { key: '1', title: 'Entry #1', to: '/' }
const entry2: BreadcrumbEntry = { key: '2', title: 'Entry #2', to: '/second' }

describe('BreadcrumbSimpleStore', () => {
  it('should allow push of entries', () => {
    const store = new BreadcrumbSimpleStore()
    expect(store.getEntries()).toEqual([])
    store.push(entry1)
    expect(store.getEntries()).toEqual([entry1])
    store.push(entry2)
    expect(store.getEntries()).toEqual([entry1, entry2])
  })

  it('should allow pop of entries', () => {
    const store = new BreadcrumbSimpleStore()
    store.push(entry1)
    store.push(entry2)
    expect(store.getEntries()).toEqual([entry1, entry2])
    store.pop(entry1)
    expect(store.getEntries()).toEqual([entry2])
  })

  it('should allow adding listeners', () => {
    const listener = jest.fn()
    const store = new BreadcrumbSimpleStore()
    store.addChangeListener(listener)
    expect(store['listeners']).toEqual([listener])
  })

  it('should return the unsubscribe function when a new listener is subscribed', () => {
    const listener = jest.fn()
    const store = new BreadcrumbSimpleStore()
    const unsubscribe = store.addChangeListener(listener)
    unsubscribe()
    expect(store['listeners']).toEqual([])
  })

  it('should invoke listeners passing entries when store is changed', () => {
    const listener = jest.fn()
    const listener2 = jest.fn()
    const store = new BreadcrumbSimpleStore()
    store.addChangeListener(listener)
    store.addChangeListener(listener2)

    store.push(entry1)
    expect(listener).toHaveBeenLastCalledWith([entry1])

    store.push(entry2)
    expect(listener).toHaveBeenLastCalledWith([entry1, entry2])
    expect(listener2).toHaveBeenLastCalledWith([entry1, entry2])

    store.pop(entry2)
    expect(listener).toHaveBeenLastCalledWith([entry1])
  })
})

describe('BreadcrumbNav', () => {
  it('should render correctly', () => {
    const store = new BreadcrumbSimpleStore()
    store.push(entry1)
    store.push(entry2)

    const { container } = render(
      withRouter(
        <BreadcrumbProvider value={store}>
          <BreadcrumbNav />
        </BreadcrumbProvider>
      )
    )
    expect(container).toMatchSnapshot()
  })
})

describe('Breadcrumb', () => {
  it('should add entry to the store when mounted', () => {
    const store = new BreadcrumbSimpleStore()
    render(
      withRouter(
        <BreadcrumbProvider value={store}>
          <Breadcrumb title='Entry #1' to='/1' />
        </BreadcrumbProvider>
      )
    )

    expect(store.getEntries()).toHaveLength(1)
    expect(store.getEntries()[0].key).toBeDefined()
    expect(store.getEntries()[0].title).toEqual('Entry #1')
    expect(store.getEntries()[0].to).toEqual('/1')
  })

  it('should remove entry from store when unmounted', () => {
    const store = new BreadcrumbSimpleStore()
    const { unmount } = render(
      withRouter(
        <BreadcrumbProvider value={store}>
          <Breadcrumb title='Entry #1' to='/1' />
        </BreadcrumbProvider>
      )
    )

    unmount()
    expect(store.getEntries()).toHaveLength(0)
  })
})
