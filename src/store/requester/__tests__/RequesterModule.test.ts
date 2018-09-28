import axios from 'axios'
import { combineReducers } from 'redux'

import { axiosMock, createTestStore, mockStore } from '../../../test'
import {
    RequesterModule, requesterModuleActionTypes
} from '../RequesterModule'

describe('RequesterModule', () => {

    describe('selectors', () => {
        const r = new RequesterModule<number, any, number>({
            actionKey: 'test',
            getRequestState: state => state.test,
            req: () => Promise.resolve(4),
        })

        describe('#getRequestState', () => {
            it('deve retornar o estado completo da requisição', () => {
                expect(r.selectors.getRequestState({ test: {} })).toEqual({})
                expect(r.selectors.getRequestState({ test: {} })).toEqual({})
                expect(r.selectors.getRequestState({ test: {} })).toEqual({})
                expect(r.selectors.getRequestState({
                    test: {
                        params: { test: true },
                        result: [1],
                        error: false,
                    },
                })).toEqual({ params: { test: true }, result: [1], error: false })
            })
        })
        describe('#getParams', () => {
            it('deve retornar os parâmetros do store', () => {
                expect(r.selectors.getParams({ test: {} })).toEqual(undefined)
                expect(r.selectors.getParams({ test: {} })).toEqual(undefined)
                expect(r.selectors.getParams({ test: {} })).toEqual(undefined)
                expect(r.selectors.getParams({ test: { params: {} } })).toEqual({})
                expect(r.selectors.getParams({ test: { params: { test: true } } }))
                    .toEqual({ test: true })
            })
        })
        describe('#getResult', () => {
            it('deve retornar o resultado da store', () => {
                expect(r.selectors.getResult({ test: {} })).toEqual(undefined)
                expect(r.selectors.getResult({ test: {} })).toEqual(undefined)
                expect(r.selectors.getResult({ test: {} })).toEqual(undefined)
                expect(r.selectors.getResult({ test: { result: [1, 2] } })).toEqual([1, 2])
            })
        })
        describe('#getReadyState', () => {
            it('deve retornar o estado da requisição', () => {
                expect(r.selectors.getReadyState({ test: {} })).toEqual(undefined)
                expect(r.selectors.getReadyState({ test: {} })).toEqual(undefined)
                expect(r.selectors.getReadyState({ test: {} })).toEqual(undefined)
                expect(r.selectors.getReadyState({ test: { readyState: 'success' } })).toEqual('success')
            })
        })
        describe('#getIsFetching', () => {
            it('deve retornar se o request está em processamento', () => {
                expect(r.selectors.getFetching({ test: {} })).toEqual(undefined)
                expect(r.selectors.getFetching({ test: {} })).toEqual(undefined)
                expect(r.selectors.getFetching({ test: {} })).toEqual(undefined)
                expect(r.selectors.getFetching({ test: { readyState: 'success' } })).toEqual(false)
                expect(r.selectors.getFetching({ test: { readyState: 'failure' } })).toEqual(false)
                expect(r.selectors.getFetching({ test: { readyState: 'request' } })).toEqual(true)
            })
        })
        describe('#getError', () => {
            it('deve retornar o erro da store', () => {
                expect(r.selectors.getError({ test: {} })).toEqual(undefined)
                expect(r.selectors.getError({ test: {} })).toEqual(undefined)
                expect(r.selectors.getError({ test: {} })).toEqual(undefined)
                expect(r.selectors.getError({ test: { error: true } })).toEqual(true)
            })
        })
    })

    describe('action creators', () => {
        const r = new RequesterModule<number, any, number>({
            actionKey: 'test',
            getRequestState: state => state.test,
            req: () => Promise.resolve(4),
        })

        describe('#setParams', () => {
            it('deve disparar um SET_PARAMS action com os novos parâmetros como payload', () => {
                const store = mockStore({
                    test: {
                    },
                })
                store.dispatch(r.actions.setParams({ test: true, foo: 'bar' }))

                expect(store.getActions()).toEqual([
                    {
                        type: `test/${requesterModuleActionTypes.SET_PARAMS}`,
                        meta: { key: 'test' },
                        payload: { test: true, foo: 'bar' },
                    },
                ])
            })
        })
        describe('#clearResult', () => {
            it('deve disparar um CLEAR_RESULT action com os novos parâmetros como payload', () => {
                const store = mockStore({
                    test: {
                    },
                })
                store.dispatch(r.actions.clearResult())

                expect(store.getActions()).toEqual([
                    { type: `test/${requesterModuleActionTypes.CLEAR_RESULT}`, meta: { key: 'test' } },
                ])
            })
        })
        describe('#request', () => {
            it('deve despachar um REQUEST action', () => {
                const store = mockStore({
                    test: {
                    },
                })
                store.dispatch(r.actions.request())

                expect(store.getActions()).toEqual([
                    { type: `test/${requesterModuleActionTypes.REQUEST}`, meta: { key: 'test', stale: true } },
                ])
            })
            it('deve conter os parâmetros atualmente no store dentro do meta', () => {
                const store = mockStore({
                    test: {
                        params: { test: true },
                    },
                })
                store.dispatch(r.actions.request())

                expect(store.getActions()).toEqual([
                    {
                        type: `test/${requesterModuleActionTypes.REQUEST}`,
                        meta: { key: 'test', stale: true, params: { test: true } },
                    },
                ])
            })
            it('deve incluir a config stale no meta', () => {
                const r2 = new RequesterModule<number, any, number>({
                    actionKey: 'test',
                    getRequestState: state => state.test,
                    req: () => Promise.resolve(4),
                })
                const store = mockStore({
                    test: {
                        params: { test: true },
                    },
                })
                store.dispatch(r2.actions.request({ stale: false }))

                expect(store.getActions()).toEqual([
                    {
                        type: `test/${requesterModuleActionTypes.REQUEST}`,
                        meta: { key: 'test', stale: false, params: { test: true } },
                    },
                ])
            })
        })
        describe('#requestSuccess', () => {
            it('deve disparar um REQUEST_SUCCESS action com o result como payload', () => {
                const store = mockStore()
                // tslint:disable-next-line:no-string-literal
                store.dispatch(r['requestSuccess'](5))

                expect(store.getActions()).toEqual([
                    {
                        type: `test/${requesterModuleActionTypes.REQUEST_SUCCESS}`,
                        meta: { key: 'test' },
                        payload: 5,
                    },
                ])
            })
        })
        describe('#requestSuccess', () => {
            it('deve disparar um REQUEST_FAILURE action com o erro como payload', () => {
                const store = mockStore()
                // tslint:disable-next-line:no-string-literal
                store.dispatch(r['requestFailure']({ message: 'not found' }))

                expect(store.getActions()).toEqual([
                    {
                        type: `test/${requesterModuleActionTypes.REQUEST_FAILURE}`,
                        meta: { key: 'test' },
                        payload: { message: 'not found' },
                    },
                ])
            })
        })
        describe('#requestCancel', () => {
            it('deve disparar um REQUEST_CANCEL action', () => {
                const store = mockStore()
                // tslint:disable-next-line:no-string-literal
                store.dispatch(r['requestCancel']())

                expect(store.getActions()).toEqual([
                    { type: `test/${requesterModuleActionTypes.REQUEST_CANCEL}`, meta: { key: 'test' } },
                ])
            })
        })
    })
})

describe('Axios config', () => {
    interface ResultType { id: number, name: string }
    axiosMock.onGet('/api/test').reply(200, { id: 42, name: 'test' })
    axiosMock.onGet('/api/test-error').reply(404, { message: 'not found' })

    it('deve transformar o result', () => {
        const r = new RequesterModule<ResultType, any, any>({
            actionKey: 'test',
            getRequestState: state => state.test,
            req: () => axios.get('/api/test'),
        })

        const store = createTestStore({}, combineReducers({
            test: r.reduce,
        }))

        return store.dispatch(r.actions.request()).then(success => {
            expect(r.selectors.getResult(store.getState())).toEqual({ id: 42, name: 'test' })
        })
    })

    it('deve transformar o error', () => {
        const r = new RequesterModule<ResultType, any, any>({
            actionKey: 'test',
            getRequestState: state => state.test,
            req: () => axios.get('/api/test-error'),
        })

        const store = createTestStore({}, combineReducers({
            test: r.reduce,
        }))

        return store.dispatch(r.actions.request()).catch(err => {
            expect(r.selectors.getError(store.getState())).toEqual({ message: 'not found' })
        })
    })
})
