import { mount } from 'enzyme'
import * as React from 'react'

import { CLEAR_RESULT, Page, PageRequester, REQUEST, SET_PARAMS } from '../../../../store/requester'
import { mockStore, withRedux, withTheme } from '../../../../test'
import { DataTable } from '../DataTable/DataTable'

import {
    DataTableConnected, DataTableConnectedCmp, emptyPage, mapDispatchToProps, mapStateToProps
} from './DataTableConnected'

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
    it('should correctly map the current page', () => {
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
    it(`#load should dispatch ${SET_PARAMS} and ${REQUEST} actions`, () => {
        const store = mockStore()
        const actions = mapDispatchToProps(store.dispatch, ownProps)
        actions.load({ page: 2 })
        expect(store.getActions()).toHaveLength(2)
        expect(store.getActions()[0].type).toContain(SET_PARAMS)
        expect(store.getActions()[1].type).toContain(REQUEST)
    })
    it(`#onPageChange should dispatch ${SET_PARAMS} and ${REQUEST} actions`, () => {
        const store = mockStore()
        const actions = mapDispatchToProps(store.dispatch, ownProps)
        actions.onPageChange(5)
        expect(store.getActions()).toHaveLength(2)
    })
    it(`#onSortChange should dispatch ${SET_PARAMS} and ${REQUEST} actions`, () => {
        const store = mockStore()
        const actions = mapDispatchToProps(store.dispatch, ownProps)
        actions.onSortChange(['id'])
        expect(store.getActions()).toHaveLength(3)
    })
    it(`#onSizeChange should dispatch ${SET_PARAMS} and ${REQUEST} actions`, () => {
        const store = mockStore()
        const actions = mapDispatchToProps(store.dispatch, ownProps)
        actions.onSizeChange(100)
        expect(store.getActions()).toHaveLength(3)
    })
    it(`#clear should dispatch a ${CLEAR_RESULT} action`, () => {
        const store = mockStore()
        const actions = mapDispatchToProps(store.dispatch, ownProps)
        actions.clear()
        expect(store.getActions()).toHaveLength(1)
        expect(store.getActions()[0].type).toContain(CLEAR_RESULT)
    })
})

describe('Component', () => {
    it('should mount correctly', () => {
        const wrapper = mount(withTheme(withRedux(<DataTableConnected requester={requester} />)))
        expect(wrapper.find(DataTable)).toBeTruthy()
    })

    const createCmp = (config = {}) => {
        const defaultConfig = {
            load: jest.fn(),
            clear: jest.fn(),
            loadOnMount: true,
            clearOnUnmount: true,
        }
        const c = { ...defaultConfig, ...config }
        return mount(withTheme(withRedux(
            <DataTableConnectedCmp
                requester={requester}
                page={result}
                load={c.load}
                clear={c.clear}
                onSortChange={jest.fn()}
                onPageChange={jest.fn()}
                onSizeChange={jest.fn()}
                loadOnMount={c.loadOnMount}
                clearOnUnmount={c.clearOnUnmount}
            />
        )))
    }

    it('should call #load prop on componentDidMount', () => {
        const load = jest.fn()
        const clear = jest.fn()
        const wrapper = createCmp({ load })
        expect(load).toHaveBeenCalledTimes(1)
    })
    it('should NOT call #load prop on componentDidMount if loadOnMount is false', () => {
        const load = jest.fn()
        const clear = jest.fn()
        const wrapper = createCmp({ load, loadOnMount: false })
        expect(load).not.toBeCalled()
    })
    it('should call #clear prop on componentWillUnmount', () => {
        const clear = jest.fn()
        const wrapper = createCmp({ clear })
        wrapper.unmount()
        expect(clear).toHaveBeenCalledTimes(1)
    })
    it('should NOT call #clear prop on componentWillUnmount if clearOnUnmount is false', () => {
        const clear = jest.fn()
        const wrapper = createCmp({ clear, clearOnUnmount: false })
        wrapper.unmount()
        expect(clear).not.toBeCalled()
    })
})
