// tslint:disable:no-string-literal

import { mount, render } from 'enzyme'
import React from 'react'

import { withRouter, withTheme } from '../../../test'

import { Breadcrumb, BreadcrumbEntry, BreadcrumbNav, BreadcrumbProvider, BreadcrumbSimpleStore } from './'

const entry1: BreadcrumbEntry = { key: '1', title: 'Entry #1', to: '/' }
const entry2: BreadcrumbEntry = { key: '2', title: 'Entry #2', to: '/second' }

describe('BreadcrumbSimpleStore', () => {
    it('deve permitir push de entries', () => {
        const store = new BreadcrumbSimpleStore()
        expect(store.getEntries()).toEqual([])
        store.push(entry1)
        expect(store.getEntries()).toEqual([entry1])
        store.push(entry2)
        expect(store.getEntries()).toEqual([entry1, entry2])
    })

    it('deve permitir pop de entries', () => {
        const store = new BreadcrumbSimpleStore()
        store.push(entry1)
        store.push(entry2)
        expect(store.getEntries()).toEqual([entry1, entry2])
        store.pop(entry1)
        expect(store.getEntries()).toEqual([entry2])
    })

    it('deve permitir adição de listeners', () => {
        const listener = jest.fn()
        const store = new BreadcrumbSimpleStore()
        store.addChangeListener(listener)
        expect(store['listeners']).toEqual([listener])
    })

    it('deve retornar unsubscribe ao adicionar listener', () => {
        const listener = jest.fn()
        const store = new BreadcrumbSimpleStore()
        const unsubscribe = store.addChangeListener(listener)
        unsubscribe()
        expect(store['listeners']).toEqual([])
    })

    it('deve invocar listeners com entries ao ser modificado', () => {
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
    it('deve renderizar corretamente', () => {
        const store = new BreadcrumbSimpleStore()
        store.push(entry1)
        store.push(entry2)

        const wrapper = render(withTheme(withRouter(
            <BreadcrumbProvider value={store}>
                <BreadcrumbNav />
            </BreadcrumbProvider>
        )))
        expect(wrapper).toMatchSnapshot()
    })
})

describe('Breadcrumb', () => {
    it('deve adicionar a entry no store ao ser montado', () => {
        const store = new BreadcrumbSimpleStore()
        mount(withTheme(withRouter(
            <BreadcrumbProvider value={store}>
                <Breadcrumb title='Entry #1' to='/1' />
            </BreadcrumbProvider>
        )))

        expect(store.getEntries()).toHaveLength(1)
        expect(store.getEntries()[0].key).toBeDefined()
        expect(store.getEntries()[0].title).toEqual('Entry #1')
        expect(store.getEntries()[0].to).toEqual('/1')
    })

    it('deve remover a entry do store ao ser desmontado', () => {
        const store = new BreadcrumbSimpleStore()
        const wrapper = mount(withTheme(withRouter(
            <BreadcrumbProvider value={store}>
                <Breadcrumb title='Entry #1' to='/1' />
            </BreadcrumbProvider>
        )))

        wrapper.unmount()
        expect(store.getEntries()).toHaveLength(0)
    })
})
