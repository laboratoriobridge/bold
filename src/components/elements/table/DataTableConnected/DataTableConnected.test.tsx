import { mount } from 'enzyme'
import * as React from 'react'

import { Page, PageRequester, REQUEST, SET_PARAMS } from '../../../../store/requester'
import { mockStore, withRedux, withTheme } from '../../../../test'
import { DataTable } from '../DataTable/DataTable'

import { DataTableConnected, emptyPage, mapDispatchToProps, mapStateToProps } from './DataTableConnected'

const result: Page<number> = {
    content: [1, 2, 3, 4, 5],
    first: true,
    last: false,
    number: 0,
    numberOfElements: 10,
    size: 5,
    sort: null,
    totalPages: 2,
    totalElements: 10,
}

const requester = new PageRequester<number, any, Page<number>>('test', (params) => Promise.resolve(result))
const ownProps = { requester }

describe('mapStateToProps', () => {
    it('deve mapear corretamente a página atual', () => {
        const emptyState = mapStateToProps({}, ownProps)
        expect(emptyState.page).toEqual(emptyPage)

        const state = mapStateToProps({
            requester: {
                test: { result },
            },
        }, ownProps)
        expect(state.page).toEqual(result)
    })
})

describe('mapDispatchToProps', () => {
    it('#load deve despachar um setParams e um request', () => {
        const store = mockStore()
        const actions = mapDispatchToProps(store.dispatch, ownProps)
        actions.load({ page: 2 })
        expect(store.getActions()).toHaveLength(2)
        expect(store.getActions()[0].type).toEqual(SET_PARAMS + '/test')
        expect(store.getActions()[1].type).toEqual(REQUEST + '/test')
    })
    it('#onPageChange deve despachar um setParams e um request', () => {
        const store = mockStore()
        const actions = mapDispatchToProps(store.dispatch, ownProps)
        actions.onPageChange(5)
        expect(store.getActions()).toHaveLength(2)
    })
    it('#onSortChange deve despachar um setParams e um request', () => {
        const store = mockStore()
        const actions = mapDispatchToProps(store.dispatch, ownProps)
        actions.onSortChange(['id'])
        expect(store.getActions()).toHaveLength(3)
    })
    it('#onSizeChange deve despachar um setParams e um request', () => {
        const store = mockStore()
        const actions = mapDispatchToProps(store.dispatch, ownProps)
        actions.onSizeChange(100)
        expect(store.getActions()).toHaveLength(3)
    })
})

describe('Component', () => {
    it('deve montar corretamente', () => {
        const wrapper = mount(withTheme(withRedux(<DataTableConnected requester={requester} />)))
        expect(wrapper.find(DataTable)).toBeTruthy()
    })
})
