import { mount } from 'enzyme'
import * as React from 'react'

import { CLEAR_RESULT, Page, PageRequester, REQUEST, RequestState, SET_PARAMS } from '../../../../store/requester'
import { mockStore, withRedux, withTheme } from '../../../../test'
import { DataTable } from '../DataTable/DataTable'

import {
    emptyPage, mapDispatchToProps, mapStateToProps, PagedTableConnected, PagedTableConnectedCmp
} from './PagedTableConnected'

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
const ownProps = { requester, columns: [] }

describe('mapStateToProps', () => {
    it('should correctly map the current page', () => {
        const emptyState = mapStateToProps({}, ownProps)
        expect(emptyState.page).toEqual(emptyPage)

        const requestState: RequestState<any, any> = { result, params: {}, error: null, readyState: 'success' }
        const state = mapStateToProps({
            requester: {
                test: requestState,
            },
        }, ownProps)
        expect(state.page).toEqual(result)
    })
    it('should map the current loading state', () => {
        expect(mapStateToProps({}, ownProps).loading).toEqual(undefined)

        const requestState: RequestState<any, any> = { result: null, params: {}, error: null, readyState: 'request' }
        const state = mapStateToProps({
            requester: {
                test: requestState,
            },
        }, ownProps)
        expect(state.loading).toEqual(true)
    })
})

describe('mapDispatchToProps', () => {
    it(`#setParams should dispatch ${SET_PARAMS} action`, () => {
        const store = mockStore()
        const actions = mapDispatchToProps(store.dispatch, ownProps)
        actions.setParams({ page: 2 })
        expect(store.getActions()).toHaveLength(1)
        expect(store.getActions()[0].type).toContain(SET_PARAMS)
    })
    it(`#request should dispatch ${REQUEST} action`, () => {
        const store = mockStore()
        const actions = mapDispatchToProps(store.dispatch, ownProps)
        actions.request()
        expect(store.getActions()).toHaveLength(1)
        expect(store.getActions()[0].type).toContain(REQUEST)
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
        actions.onSortChange({ id: 'ASC' })
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
        const wrapper = mount(withTheme(withRedux(<PagedTableConnected requester={requester} columns={[]} />)))
        expect(wrapper.find(DataTable)).toBeTruthy()
    })

    const createCmp = (config = {}) => {
        const defaultConfig = {
            setParams: jest.fn(),
            request: jest.fn(),
            clear: jest.fn(),
            loadOnMount: true,
            clearOnUnmount: true,
            initialParams: {},
        }
        const c = { ...defaultConfig, ...config }
        return mount(withTheme(withRedux(
            <PagedTableConnectedCmp
                requester={requester}
                columns={[]}
                page={result}
                setParams={c.setParams}
                request={c.request}
                clear={c.clear}
                onSortChange={jest.fn()}
                onPageChange={jest.fn()}
                onSizeChange={jest.fn()}
                loadOnMount={c.loadOnMount}
                clearOnUnmount={c.clearOnUnmount}
                initialParams={c.initialParams}
            />
        )))
    }

    it('should call #setParams prop on componentDidMount with initialParams', () => {
        const initialParams = { size: 42 }
        const setParams = jest.fn()
        const wrapper = createCmp({ setParams, initialParams })
        expect(setParams).toHaveBeenCalledTimes(1)
        expect(setParams).toHaveBeenLastCalledWith(initialParams)
    })

    it('should call #request prop on componentDidMount', () => {
        const request = jest.fn()
        const wrapper = createCmp({ request })
        expect(request).toHaveBeenCalledTimes(1)
    })
    it('should NOT call #setParams prop on componentDidMount if loadOnMount is false', () => {
        const setParams = jest.fn()
        const wrapper = createCmp({ setParams, loadOnMount: false })
        expect(setParams).not.toBeCalled()
    })
    it('should NOT call #request prop on componentDidMount if loadOnMount is false', () => {
        const request = jest.fn()
        const wrapper = createCmp({ request, loadOnMount: false })
        expect(request).not.toBeCalled()
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
