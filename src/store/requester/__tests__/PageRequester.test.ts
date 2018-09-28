import { mockStore } from '../../../test'
import { DEFAULT_PAGINATION_PARAMS, Page, PageRequester } from '../PageRequester'
import { SET_PARAMS } from '../Requester'

describe('PageRequester', () => {
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

    interface Params {
        test?: boolean
        foo?: string
    }

    const r = new PageRequester<number, Params, Page<number>>('test', (params) => Promise.resolve(result))

    describe('selectors', () => {
        describe('#getPageParams', () => {
            it('deve retornar os parâmetros de paginação default', () => {
                expect(r.getPageParams({})).toEqual(DEFAULT_PAGINATION_PARAMS)
                expect(r.getPageParams({ requester: {} })).toEqual(DEFAULT_PAGINATION_PARAMS)
                expect(r.getPageParams({ requester: { test: {} } })).toEqual(DEFAULT_PAGINATION_PARAMS)
                expect(r.getPageParams({ requester: { test: { params: {} } } })).toEqual(DEFAULT_PAGINATION_PARAMS)
                expect(r.getPageParams({
                    requester: { test: { params: { test: true } } },
                })).toEqual(DEFAULT_PAGINATION_PARAMS)
            })
        })

        describe('#getParams', () => {
            it('deve retornar os parâmetros do store contendo os parâmetros de paginação default', () => {
                expect(r.getParams({})).toEqual({ ...DEFAULT_PAGINATION_PARAMS })
                expect(r.getParams({ requester: {} })).toEqual({ ...DEFAULT_PAGINATION_PARAMS })
                expect(r.getParams({ requester: { test: {} } })).toEqual({ ...DEFAULT_PAGINATION_PARAMS })
                expect(r.getParams({ requester: { test: { params: {} } } })).toEqual({ ...DEFAULT_PAGINATION_PARAMS })
                expect(r.getParams({ requester: { test: { params: { test: true, sort: 'id', size: 20 } } } })).toEqual({
                    ...DEFAULT_PAGINATION_PARAMS, test: true, sort: 'id', size: 20,
                })
            })
        })
    })

    describe('action creators', () => {
        describe('#setParams', () => {
            it(`deve disparar uma ação de ${SET_PARAMS} com os parâmetros como payload, preservando
            os PageParams não informados`, () => {
                    const store = mockStore()
                    store.dispatch(r.setParams({ foo: 'bar' }))

                    expect(store.getActions()).toEqual([
                        {
                            type: `${SET_PARAMS}/test`, meta: { key: 'test' },
                            payload: { ...DEFAULT_PAGINATION_PARAMS, foo: 'bar' },
                        },
                    ])
                })
            it('deve retornar à primeira página caso page não tenha sido informado', () => {
                const store = mockStore({ requester: { test: { params: { page: 3 } } } })
                store.dispatch(r.setParams({ foo: 'bar' }))

                expect(store.getActions()).toEqual([
                    {
                        type: `${SET_PARAMS}/test`, meta: { key: 'test' },
                        payload: { ...DEFAULT_PAGINATION_PARAMS, page: 0, foo: 'bar' },
                    },
                ])
            })
            it('não deve retornar à primeira página caso page tenha sido informado', () => {
                const store = mockStore({ requester: { test: { params: { page: 3 } } } })
                store.dispatch(r.setParams({ page: 2, foo: 'bar' }))

                expect(store.getActions()).toEqual([
                    {
                        type: `${SET_PARAMS}/test`, meta: { key: 'test' },
                        payload: { ...DEFAULT_PAGINATION_PARAMS, page: 2, foo: 'bar' },
                    },
                ])
            })
        })

        describe('#setPageNumber', () => {
            it(`deve disparar uma ação de ${SET_PARAMS} com o novo page number`, () => {
                const store = mockStore()
                store.dispatch(r.setPageNumber(3))

                expect(store.getActions()).toEqual([
                    {
                        type: `${SET_PARAMS}/test`, meta: { key: 'test' },
                        payload: { ...DEFAULT_PAGINATION_PARAMS, page: 3 },
                    },
                ])
            })
        })

        describe('#setSort', () => {
            it(`deve disparar uma ação de ${SET_PARAMS} com o novo sort`, () => {
                const store = mockStore()
                store.dispatch(r.setSort(['-id']))

                expect(store.getActions()).toEqual([
                    {
                        type: `${SET_PARAMS}/test`, meta: { key: 'test' },
                        payload: { ...DEFAULT_PAGINATION_PARAMS, sort: ['-id'] },
                    },
                ])
            })
        })

        describe('#setPageSize', () => {
            it(`deve disparar uma ação de ${SET_PARAMS} com o novo page size`, () => {
                const store = mockStore()
                store.dispatch(r.setPageSize(2))

                expect(store.getActions()).toEqual([
                    {
                        type: `${SET_PARAMS}/test`, meta: { key: 'test' },
                        payload: { ...DEFAULT_PAGINATION_PARAMS, size: 2 },
                    },
                ])
            })
        })
    })
})
