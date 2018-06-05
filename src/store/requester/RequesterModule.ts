// tslint:disable:member-ordering
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, CancelTokenSource } from 'axios'

export const REQUEST = 'requester/REQUEST'
export const REQUEST_SUCCESS = 'requester/REQUEST_SUCCESS'
export const REQUEST_FAILURE = 'requester/REQUEST_FAILURE'
export const REQUEST_CANCEL = 'requester/REQUEST_CANCEL'
export const SET_PARAMS = 'requester/SET_PARAMS'
export const CLEAR_RESULT = 'requester/CLEAR_RESULT'

export type ReadyState = 'success' | 'failure' | 'request'

export type RequestType<R, P> = (params: P, requestConfig: AxiosRequestConfig) => Promise<R>

export interface RequestState<T, P = any> {
    readonly result?: T
    readonly readyState?: ReadyState
    readonly params?: P
    readonly error?: any
}

export type GetRequestState<T, S> = (state: S) => RequestState<T>

export const axiosConfig: Partial<RequesterModuleConfig<any, any, any>> = {
    transformResult: (result: AxiosResponse<any>): any => {
        return result && result.data
    },
    transformError: (err: AxiosError): any => {
        return err && err.response && err.response.data
    },
}

export interface RequesterModuleConfig<T, P = {}, R = AxiosResponse<T>> {
    actionKey: string
    getRequestState: GetRequestState<T, any>
    req: RequestType<R, P>
    /**
     * Transforma o resultado da requisição para o valor que será armazenado em `result` na store.
     */
    transformResult?(result: R): T

    /**
     * Transforma o resultado da requisição, em caso de erro, para o valor armazenado em `error` na store.
     */
    transformError?(err: any): any
}

/**
 * @type T Tipo do dado armazenado no store.
 * @type P Tipo do parâmetro da requisição.
 * @type R Tipo da resposta da requisição.
 */
export class RequesterModule<T, P = {}, R = AxiosResponse<T>> {
    private config: RequesterModuleConfig<T, P, R>
    private pendingRequest: { promise: Promise<R>, cancelToken: CancelTokenSource }

    /**
     * Cria um novo Requester.
     * @param key Chave utilizada no store para salvar a requisição
     * @param request Função que retorna uma Promise da requisição a ser processada.
     */
    constructor(config: RequesterModuleConfig<T, P, R>) {
        this.config = {
            ...axiosConfig,
            ...config,
        }
    }

    protected meta = () => {
        return {
            key: this.config.actionKey,
        }
    }

    protected createActionType = (type: string) => {
        return `${this.config.actionKey}/${type}`
    }

    /*
     * Action creators
     */

    public actions = {
        /**
         * Cria uma ação SET_PARAMS para alterar os parâmetros da requisição.
         */
        setParams: (params: P) => {
            return {
                type: this.createActionType(SET_PARAMS),
                meta: this.meta(),
                payload: params,
            }
        },
        /**
         * Cria uma ação REQUEST para iniciar a requisição.
         */
        request: (config = { stale: true }) => (dispatch, getState) => {
            const rootState = getState()
            const params = this.selectors.getParams(rootState)
            const readyState = this.selectors.getReadyState(rootState)

            if (readyState === 'request') {
                this.pendingRequest.cancelToken.cancel()
            }

            dispatch({
                type: this.createActionType(REQUEST),
                meta: { ...this.meta(), params, stale: config.stale },
            })

            const cancelTokenSource = axios.CancelToken.source()

            this.pendingRequest = {
                promise: this.config.req(params, { cancelToken: cancelTokenSource.token }),
                cancelToken: cancelTokenSource,
            }

            return this.pendingRequest.promise
                .then(res => {
                    return dispatch(this.requestSuccess(this.transformResult(res)))
                })
                .catch(err => {
                    if (axios.isCancel(err)) {
                        dispatch(this.requestCancel())
                        return Promise.reject(err)
                    } else {
                        dispatch(this.requestFailure(this.transformError(err)))
                        return Promise.reject(err)
                    }
                })
        },
        clearResult: () => {
            return {
                type: this.createActionType(CLEAR_RESULT),
                meta: this.meta(),
            }
        },
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

    /*
     * Selectors
     */
    public selectors = {
        /**
         * Retorna os parâmetros da requisição.
         */
        getParams: (state: any) => {
            return this.config.getRequestState(state).params
        },
        /**
         * Obtém o resultado da requisição.
         */
        getResult: (state: any): T => {
            return this.config.getRequestState(state).result
        },
        getReadyState: (state: any): ReadyState => {
            return this.config.getRequestState(state).readyState
        },
        getRequestState: (state: any): RequestState<T> => {
            return this.config.getRequestState(state)
        },
        /**
         * Checa se a requisição está em processamento.
         */
        getFetching: (state: any): boolean => {
            const readyState = this.selectors.getReadyState(state)
            return readyState && readyState === 'request'
        },
        /**
         * Obtém o erro da requisição.
         */
        getError: (state: any): any => {
            return this.config.getRequestState(state).error
        },
    }

    public reduce = (state: RequestState<T, P> = {}, action: any): RequestState<T, P> => {
        const type: string = action.type || ''

        if (type === this.createActionType(SET_PARAMS)) {
            return {
                ...state,
                params: action.payload,
            }
        }

        if (type === this.createActionType(CLEAR_RESULT)) {
            return {
                ...state,
                result: null,
            }
        }

        if (type === this.createActionType(REQUEST_SUCCESS)) {
            return {
                ...state,
                result: action.payload,
                readyState: 'success',
            }
        }

        if (type === this.createActionType(REQUEST_FAILURE)) {
            return {
                ...state,
                error: action.payload,
                readyState: 'failure',
            }
        }

        if (type === this.createActionType(REQUEST_CANCEL)) {
            return {
                ...state,
                error: 'Cancelled',
                readyState: 'failure',
            }
        }

        if (type === this.createActionType(REQUEST)) {
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
