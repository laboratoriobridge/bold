import { Requester, RequestState } from './Requester'

export interface RequesterState {
    readonly [key: string]: RequestState<any, any>
}

export const initialState: RequesterState = {}

export const reducer = (state: RequesterState = initialState, action): RequesterState => {
    const requestState = action && action.meta && action.meta.key && state[action.meta.key]

    if (typeof action.type === 'string' && action.type.startsWith('bridge/requester')) {
        return {
            ...state,
            [action.meta.key]: Requester.reduce(requestState, action),
        }
    }

    return state
}
