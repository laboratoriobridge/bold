import { createStore, Store } from 'redux'
import { Location } from 'history'
import { match } from 'react-router'

export type BreadcrumbActionType = 'ADD_CRUMB' | 'UPDATE_CRUMB' | 'REMOVE_CRUMB'

export interface BreadcrumbAction {
    payload: Crumb
    type: BreadcrumbActionType
}

export interface Crumb extends Readonly<{
    id: string
    icon?: string
    title?: string,
    location: Location,
    match: match<any>
}> { }

export interface CrumbState extends Readonly<{
    crumbs: Crumb[],
}> { }

export const CrumbInitialState: CrumbState = {
    crumbs: []
}

function reducer(state = CrumbInitialState, action: BreadcrumbAction): CrumbState {
    switch (action.type) {
        case 'ADD_CRUMB':
            return { ...state, crumbs: [...state.crumbs, action.payload] }
        case 'UPDATE_CRUMB':
            return { ...state, crumbs: state.crumbs.map(crumb => crumb.id === action.payload.id ? action.payload : crumb) }
        case 'REMOVE_CRUMB':
            return { ...state, crumbs: state.crumbs.filter(crumb => crumb.id !== action.payload.id) }
        default:
            return state
    }
}

const Store = createStore(reducer)

export default Store
