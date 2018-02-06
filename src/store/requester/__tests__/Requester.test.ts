import axios from 'axios'

import { axiosMock, createTestStore, mockStore } from '../../../test'
import {
    CLEAR_RESULT, REQUEST, REQUEST_CANCEL, REQUEST_FAILURE, REQUEST_SUCCESS, Requester, SET_PARAMS
} from '../Requester'

describe('Requester', () => {
    const r = new Requester<number, any, number>('test', () => Promise.resolve(4))

    it('#getKey', () => {
        expect(r.getKey()).toEqual('test')
    })

    describe('selectors', () => {
        describe('#getRequestState', () => {
            it('deve retornar o estado completo da requisição', () => {
                expect(r.getRequestState({})).toEqual({})
                expect(r.getRequestState({ requester: {} })).toEqual({})
                expect(r.getRequestState({ requester: { test: {} } })).toEqual({})
                expect(r.getRequestState({
                    requester: {
                        test: {
                            params: { test: true },
                            result: [1],
                            error: false,
                        },
                    },
                })).toEqual({ params: { test: true }, result: [1], error: false })
            })
        })
        describe('#getParams', () => {
            it('deve retornar os parâmetros do store', () => {
                expect(r.getParams({})).toEqual(undefined)
                expect(r.getParams({ requester: {} })).toEqual(undefined)
                expect(r.getParams({ requester: { test: {} } })).toEqual(undefined)
                expect(r.getParams({ requester: { test: { params: {} } } })).toEqual({})
                expect(r.getParams({ requester: { test: { params: { test: true } } } })).toEqual({ test: true })
            })
        })
        describe('#getResult', () => {
            it('deve retornar o resultado da store', () => {
                expect(r.getResult({})).toEqual(undefined)
                expect(r.getResult({ requester: {} })).toEqual(undefined)
                expect(r.getResult({ requester: { test: {} } })).toEqual(undefined)
                expect(r.getResult({ requester: { test: { result: [1, 2] } } })).toEqual([1, 2])
            })
        })
        describe('#getReadyState', () => {
            it('deve retornar o estado da requisição', () => {
                expect(r.getReadyState({})).toEqual(undefined)
                expect(r.getReadyState({ requester: {} })).toEqual(undefined)
                expect(r.getReadyState({ requester: { test: {} } })).toEqual(undefined)
                expect(r.getReadyState({ requester: { test: { readyState: 'success' } } })).toEqual('success')
            })
        })
        describe('#getIsFetching', () => {
            it('deve retornar se o request está em processamento', () => {
                expect(r.getIsFetching({})).toEqual(undefined)
                expect(r.getIsFetching({ requester: {} })).toEqual(undefined)
                expect(r.getIsFetching({ requester: { test: {} } })).toEqual(undefined)
                expect(r.getIsFetching({ requester: { test: { readyState: 'success' } } })).toEqual(false)
                expect(r.getIsFetching({ requester: { test: { readyState: 'failure' } } })).toEqual(false)
                expect(r.getIsFetching({ requester: { test: { readyState: 'request' } } })).toEqual(true)
            })
        })
        describe('#getError', () => {
            it('deve retornar o erro da store', () => {
                expect(r.getError({})).toEqual(undefined)
                expect(r.getError({ requester: {} })).toEqual(undefined)
                expect(r.getError({ requester: { test: {} } })).toEqual(undefined)
                expect(r.getError({ requester: { test: { error: true } } })).toEqual(true)
            })
        })
    })

    describe('action creators', () => {
        describe('#setParams', () => {
            it('deve disparar um SET_PARAMS action com os novos parâmetros como payload', () => {
                const store = mockStore()
                store.dispatch(r.setParams({ test: true, foo: 'bar' }))

                expect(store.getActions()).toEqual([
                    { type: `${SET_PARAMS}/test`, meta: { key: 'test' }, payload: { test: true, foo: 'bar' } },
                ])
            })
        })
        describe('#clearResult', () => {
            it('deve disparar um CLEAR_RESULT action com os novos parâmetros como payload', () => {
                const store = mockStore()
                store.dispatch(r.clearResult())

                expect(store.getActions()).toEqual([
                    { type: `${CLEAR_RESULT}/test`, meta: { key: 'test' } },
                ])
            })
        })
        describe('#request', () => {
            it('deve despachar um REQUEST action', () => {
                const store = mockStore()
                store.dispatch(r.request())

                expect(store.getActions()).toEqual([
                    { type: `${REQUEST}/test`, meta: { key: 'test', stale: false } },
                ])
            })
            it('deve conter os parâmetros atualmente no store dentro do meta', () => {
                const store = mockStore({
                    requester: {
                        test: {
                            params: { test: true },
                        },
                    },
                })
                store.dispatch(r.request())

                expect(store.getActions()).toEqual([
                    { type: `${REQUEST}/test`, meta: { key: 'test', stale: false, params: { test: true } } },
                ])
            })
            it('deve incluir a config stale no meta', () => {
                const r2 = new Requester<number, any, number>('test', () => Promise.resolve(4), { stale: true })
                const store = mockStore({
                    requester: {
                        test: {
                            params: { test: true },
                        },
                    },
                })
                store.dispatch(r2.request())

                expect(store.getActions()).toEqual([
                    { type: `${REQUEST}/test`, meta: { key: 'test', stale: true, params: { test: true } } },
                ])
            })
        })
        describe('#requestSuccess', () => {
            it('deve disparar um REQUEST_SUCCESS action com o result como payload', () => {
                const store = mockStore()
                // tslint:disable-next-line:no-string-literal
                store.dispatch(r['requestSuccess'](5))

                expect(store.getActions()).toEqual([
                    { type: `${REQUEST_SUCCESS}/test`, meta: { key: 'test' }, payload: 5 },
                ])
            })
        })
        describe('#requestSuccess', () => {
            it('deve disparar um REQUEST_FAILURE action com o erro como payload', () => {
                const store = mockStore()
                // tslint:disable-next-line:no-string-literal
                store.dispatch(r['requestFailure']({ message: 'not found' }))

                expect(store.getActions()).toEqual([
                    { type: `${REQUEST_FAILURE}/test`, meta: { key: 'test' }, payload: { message: 'not found' } },
                ])
            })
        })
        describe('#requestCancel', () => {
            it('deve disparar um REQUEST_CANCEL action', () => {
                const store = mockStore()
                // tslint:disable-next-line:no-string-literal
                store.dispatch(r['requestCancel']())

                expect(store.getActions()).toEqual([
                    { type: `${REQUEST_CANCEL}/test`, meta: { key: 'test' } },
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
        const store = createTestStore()

        const r = new Requester<ResultType, any>('test', () => {
            return axios.get('/api/test')
        })

        return store.dispatch(r.request()).then(success => {
            expect(r.getResult(store.getState())).toEqual({ id: 42, name: 'test' })
        })
    })

    it('deve transformar o error', () => {
        const store = createTestStore()

        const r = new Requester<ResultType, any>('test', () => {
            return axios.get('/api/test-error')
        })

        return store.dispatch(r.request()).catch(err => {
            expect(r.getError(store.getState())).toEqual({ message: 'not found' })
        })
    })
})
