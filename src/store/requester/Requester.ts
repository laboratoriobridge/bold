// tslint:disable:member-ordering
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, CancelTokenSource } from 'axios'

export const REQUEST = 'bridge/requester/REQUEST'
export const REQUEST_SUCCESS = 'bridge/requester/REQUEST_SUCCESS'
export const REQUEST_FAILURE = 'bridge/requester/REQUEST_FAILURE'
export const REQUEST_CANCEL = 'bridge/requester/REQUEST_CANCEL'
export const SET_PARAMS = 'bridge/requester/SET_PARAMS'
export const CLEAR_RESULT = 'bridge/requester/CLEAR_RESULT'

export type ReadyState = 'success' | 'failure' | 'request'

export type RequestType<R, P> = (params: P, requestConfig: AxiosRequestConfig) => Promise<R>

export interface RequestState<T, P = any> {
    readonly result: T
    readonly readyState: ReadyState
    readonly params: P
    readonly error: any
}

export interface RequesterConfig<T, R> {
    /**
     * Define se os valores antigos de `result` e `error` serão mantidos na store em caso de um novo REQUEST.
     */
    stale?: boolean

    /**
     * Transforma o resultado da requisição para o valor que será armazenado em `result` na store.
     */
    transformResult?(result: R): T

    /**
     * Transforma o resultado da requisição, em caso de erro, para o valor armazenado em `error` na store.
     */
    transformError?(err: any): any
}

export const axiosConfig: RequesterConfig<any, any> = {
    stale: false,
    transformResult: (result: AxiosResponse<any>): any => {
        return result && result.data
    },
    transformError: (err: AxiosError): any => {
        return err && err.response && err.response.data
    },
}

/**
 * @type T Tipo do dado armazenado no store.
 * @type P Tipo do parâmetro da requisição.
 * @type R Tipo da resposta da requisição.
 */
export class Requester<T, P = {}, R = AxiosResponse<T>> {
    private key: string
    private req: RequestType<R, P>
    private config: RequesterConfig<T, R>
    private pendingRequest: { promise: Promise<R>, cancelToken: CancelTokenSource }

    /**
     * Cria um novo Requester.
     * @param key Chave utilizada no store para salvar a requisição
     * @param request Função que retorna uma Promise da requisição a ser processada.
     */
    constructor(key: string, request: RequestType<R, P>, config?: RequesterConfig<T, R>) {
        this.key = key
        this.req = request
        this.config = {
            ...axiosConfig,
            ...config,
        }
    }

    protected meta = () => {
        return {
            key: this.getKey(),
        }
    }

    public getKey = () => {
        return this.key
    }

    protected createActionType = (type: string) => {
        return `${type}/${this.getKey()}`
    }

    /*
     * Action creators
     */

    /**
     * Cria uma ação SET_PARAMS para alterar os parâmetros da requisição.
     */
    public setParams = (params: P) => (dispatch, getState) => {
        dispatch(this.createSetParamsAction(params))
    }

    protected createSetParamsAction = (params: P) => {
        return {
            type: this.createActionType(SET_PARAMS),
            meta: this.meta(),
            payload: params,
        }
    }

    /**
     * Cria uma ação REQUEST para iniciar a requisição.
     */
    public request = () => (dispatch, getState) => {
        const state = getState()
        const params = this.getParams(state)
        const readyState = this.getReadyState(state)

        if (readyState === 'request') {
            this.pendingRequest.cancelToken.cancel()
        }

        dispatch({
            type: this.createActionType(REQUEST),
            meta: { ...this.meta(), params, stale: this.config.stale },
        })

        const cancelTokenSource = axios.CancelToken.source()

        this.pendingRequest = {
            promise: this.req(params, { cancelToken: cancelTokenSource.token }),
            cancelToken: cancelTokenSource,
        }

        return this.pendingRequest.promise
            .then(res => {
                return dispatch(this.requestSuccess(this.transformResult(res)))
            })
            .catch(err => {
                if (axios.isCancel(err)) {
                    return dispatch(this.requestCancel())
                } else {
                    return dispatch(this.requestFailure(this.transformError(err)))
                }
            })
    }

    protected transformResult = (res: any): any => {
        return this.config.transformResult(res)
    }

    protected transformError = (err: any): any => {
        return this.config.transformError(err)
    }

    protected requestSuccess = (result: T) => {
        return {
            type: this.createActionType(REQUEST_SUCCESS),
            meta: this.meta(),
            payload: result,
        }
    }

    protected requestFailure = (error: any) => {
        return {
            type: this.createActionType(REQUEST_FAILURE),
            meta: this.meta(),
            payload: error,
        }
    }

    protected requestCancel = () => {
        return {
            type: this.createActionType(REQUEST_CANCEL),
            meta: this.meta(),
        }
    }

    public clearResult = () => {
        return {
            type: this.createActionType(CLEAR_RESULT),
            meta: this.meta(),
        }
    }

    /*
     * Selectors
     */

    /**
     * Obtém o estado completo da requisição
     */
    public getRequestState = (state: any): RequestState<T, P> => {
        return state.requester && state.requester[this.key] || {}
    }

    /**
     * Retorna os parâmetros da requisição.
     */
    public getParams = (state: any) => {
        return this.getRequestState(state).params
    }

    /**
     * Obtém o resultado da requisição.
     */
    public getResult = (state: any): T => {
        return this.getRequestState(state).result
    }

    public getReadyState = (state: any): ReadyState => {
        return this.getRequestState(state).readyState
    }

    /**
     * Checa se a requisição está em processamento.
     */
    public getIsFetching = (state: any): boolean => {
        const readyState = this.getReadyState(state)
        return readyState && readyState === 'request'
    }

    /**
     * Obtém o erro da requisição.
     */
    public getError = (state: any): any => {
        return this.getRequestState(state).error
    }

    public reduce = (state: RequestState<T, P>, action: any): RequestState<T, P> => {
        return Requester.reduce(state, action)
    }

    public static reduce = <T, P>(state: RequestState<T, P>, action: any): RequestState<T, P> => {
        const type: string = action.type || ''

        if (type.startsWith(SET_PARAMS)) {
            return {
                ...state,
                params: action.payload,
            }
        }

        if (type.startsWith(CLEAR_RESULT)) {
            return {
                ...state,
                result: null,
            }
        }

        if (type.startsWith(REQUEST_SUCCESS)) {
            return {
                ...state,
                result: action.payload,
                readyState: 'success',
            }
        }

        if (type.startsWith(REQUEST_FAILURE)) {
            return {
                ...state,
                error: action.payload,
                readyState: 'failure',
            }
        }

        if (type.startsWith(REQUEST_CANCEL)) {
            return {
                ...state,
                error: 'Cancelled',
                readyState: 'failure',
            }
        }

        if (type.startsWith(REQUEST)) {
            if (action.meta.stale) {
                return {
                    ...state,
                    readyState: 'request',
                }
            } else {
                return {
                    ...state,
                    readyState: 'request',
                    result: null,
                    error: null,
                }
            }
        }

        return state
    }
}
