import { initialState, reducer } from '../reducer'
import { CLEAR_RESULT, REQUEST, REQUEST_CANCEL, REQUEST_FAILURE, REQUEST_SUCCESS, SET_PARAMS } from '../Requester'

describe('reducer', () => {
    it('deve retornar o initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })
    it('deve tratar a action SET_PARAMS', () => {
        const action = {
            type: SET_PARAMS,
            payload: { test: true },
            meta: { key: 'test' },
        }
        expect(reducer({}, action)).toEqual({
            test: {
                params: { test: true },
            },
        })
    })
    it('deve tratar a action CLEAR_RESULT', () => {
        const action = {
            type: CLEAR_RESULT,
            meta: { key: 'test' },
        }
        expect(reducer({ test: { result: 1, readyState: 'success', error: false, params: {} } }, action)).toEqual({
            test: {
                result: null,
                readyState: 'success',
                error: false,
                params: {},
            },
        })
    })
    describe('REQUEST', () => {
        it('deve alterar o readyState para "request"', () => {
            const action = {
                type: REQUEST,
                meta: { key: 'test' },
            }
            expect(reducer({}, action)).toEqual({
                test: {
                    readyState: 'request',
                    error: null,
                    result: null,
                },
            })
        })
        it('deve manter "result" e "error" antigos caso config stale seja true', () => {
            const action = {
                type: REQUEST,
                meta: { key: 'test', stale: true },
            }
            expect(reducer({ test: { result: 1, error: false, params: {}, readyState: 'success' } }, action)).toEqual({
                test: {
                    readyState: 'request',
                    error: false,
                    result: 1,
                    params: {},
                },
            })
        })
        it('deve limpar "result" e "error" antigos caso config stale seja false', () => {
            const action = {
                type: REQUEST,
                meta: { key: 'test', stale: false },
            }
            expect(reducer({ test: { result: 1, error: false, params: {}, readyState: 'success' } }, action)).toEqual({
                test: {
                    readyState: 'request',
                    error: null,
                    result: null,
                    params: {},
                },
            })
        })
    })
    it('deve tratar a action REQUEST_SUCCESS', () => {
        const action = {
            type: REQUEST_SUCCESS,
            meta: { key: 'test' },
            payload: [1, 2, 3],
        }
        expect(reducer({}, action)).toEqual({
            test: {
                result: [1, 2, 3],
                readyState: 'success',
            },
        })
    })
    it('deve tratar a action REQUEST_FAILURE', () => {
        const action = {
            type: REQUEST_FAILURE,
            meta: { key: 'test' },
            payload: { errorMsg: 'not found' },
        }
        expect(reducer({}, action)).toEqual({
            test: {
                error: { errorMsg: 'not found' },
                readyState: 'failure',
            },
        })
    })
    it('deve tratar a action REQUEST_CANCEL', () => {
        const action = {
            type: REQUEST_CANCEL,
            meta: { key: 'test' },
        }
        expect(reducer({}, action)).toEqual({
            test: {
                error: 'Cancelled',
                readyState: 'failure',
            },
        })
    })
})
