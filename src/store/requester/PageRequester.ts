import { AxiosResponse } from 'axios'

import { Requester } from './Requester'

export interface PageParams {
    page?: number
    size?: number
    sort?: string[]
}

export interface Page<T> {
    readonly content: T[]
    readonly first: boolean
    readonly last: boolean
    readonly number: number
    readonly numberOfElements: number
    readonly size: number
    readonly sort: string
    readonly totalPages: number
    readonly totalElements: number
}

export const DEFAULT_PAGINATION_PARAMS: PageParams = {
    size: 10,
    page: 0,
}

export class PageRequester<T, P, R = AxiosResponse<Page<T>>> extends Requester<Page<T>, P & PageParams, R> {

    /*
     * Action creators
     */

    public setParams = (params: P & PageParams) => (dispatch, getState) => {
        dispatch(this.createSetParamsAction({
            ...this.getPageParams(getState()),
            page: 0, // Caso os parâmetros tenham sido alterados, volta à primeira página
            ...params as any,
        }))
    }

    public setPageNumber = (page: number) => (dispatch, getState) => {
        const currentParams = this.getParams(getState())
        dispatch(this.setParams({
            ...currentParams as any,
            page,
        }))
    }

    public setSort = (sort: string) => (dispatch, getState) => {
        const currentParams = this.getParams(getState())
        dispatch(this.setParams({
            ...currentParams as any,
            sort,
        }))
    }

    public setPageSize = (size: number) => (dispatch, getState) => {
        const currentParams = this.getParams(getState())
        dispatch(this.setParams({
            ...currentParams as any,
            size,
        }))
    }

    /*
     * Selectors
     */

    public getParams = (state: any) => {
        const params = this.getRequestState(state).params
        return {
            ...DEFAULT_PAGINATION_PARAMS,
            ...params as any,
        }
    }

    public getPageParams = (state: any): PageParams => {
        const params = this.getParams(state)
        return {
            page: params.page,
            sort: params.sort,
            size: params.size,
        }
    }
}
