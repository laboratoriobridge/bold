import * as React from 'react'
import { connect } from 'react-redux'

import { Page, PageParams, PageRequester, SortSpec } from '../'
import { Omit } from '../../util/types'

import { PagedTable, PagedTableProps } from '../../components/elements/Table/PagedTable/PagedTable'

export type ProvidedProps = 'rows' | 'page' | 'size' | 'totalPages' | 'totalElements' | 'sort' | 'loading'
    | 'onPageChange' | 'onSizeChange' | 'onSortChange'

/**
 * All props provided by the connect HOC
 */
export interface ConnectedProps<T> extends Pick<PagedTableProps<T>, ProvidedProps> {
    clear(): void
    request(): void
    setParams(params: PageParams): void
}

/**
 * External component props
 */
export interface PagedTableConnectedProps<T> extends Omit<PagedTableProps<T>, ProvidedProps> {
    requester: PageRequester<T, any, any>
    initialParams?: PageParams
    loadOnMount?: boolean
    clearOnUnmount?: boolean
}

export type ComponentProps<T> = PagedTableConnectedProps<T> & ConnectedProps<T>

export class PagedTableConnectedCmp<T> extends React.Component<ComponentProps<T>> {

    static defaultProps: Partial<ComponentProps<any>> = {
        loadOnMount: true,
        clearOnUnmount: true,
        initialParams: {
            page: 0,
        },
    }

    componentDidMount() {
        if (this.props.loadOnMount) {
            this.props.setParams(this.props.initialParams)
            this.props.request()
        }
    }

    componentWillUnmount() {
        if (this.props.clearOnUnmount) {
            this.props.clear()
        }
    }

    render() {
        const { requester, request, setParams, clear, initialParams, loadOnMount, clearOnUnmount, ...rest } = this.props
        return <PagedTable {...rest} />
    }
}

export const emptyPage: Page<any> = {
    content: [],
    number: 0,
    numberOfElements: 0,
    totalElements: 0,
    totalPages: 0,
    first: true,
    last: true,
    size: 0,
    sort: [],
}

export const transformSortResult = (sort: SortSpec[]): string[] => {
    return sort.map(s => s.direction === 'ASC' ? s.property : `-${s.property}`)
}

export const mapStateToProps = (state: any, ownProps: PagedTableConnectedProps<any>) => {
    const result = ownProps.requester.getResult(state) || emptyPage
    const loading = ownProps.requester.getIsFetching(state)
    const sort = result.sort && transformSortResult(result.sort)

    return {
        rows: result.content,
        page: result.number,
        size: result.size,
        totalPages: result.totalPages,
        totalElements: result.totalElements,
        sort,
        loading,
    }
}

export const mapDispatchToProps = (dispatch: any, ownProps: PagedTableConnectedProps<any>) => ({
    setParams(params: PageParams) {
        dispatch(ownProps.requester.setParams(params))
    },
    request() {
        dispatch(ownProps.requester.request())
    },
    clear() {
        dispatch(ownProps.requester.clearResult())
    },
    onPageChange(page: number) {
        dispatch(ownProps.requester.setPageNumber(page))
        dispatch(ownProps.requester.request())
    },
    onSortChange(sort: string[]) {
        const sortSpec = sort.map(prop => {
            if (prop.startsWith('-')) {
                return `${prop.substr(1)},DESC`
            } else {
                return `${prop},ASC`
            }
        })

        dispatch(ownProps.requester.setPageNumber(0))
        dispatch(ownProps.requester.setSort(sortSpec))
        dispatch(ownProps.requester.request())
    },
    onSizeChange(size: number) {
        dispatch(ownProps.requester.setPageNumber(0))
        dispatch(ownProps.requester.setPageSize(size))
        dispatch(ownProps.requester.request())
    },
})

export const PagedTableConnected = connect(mapStateToProps, mapDispatchToProps)(PagedTableConnectedCmp)
