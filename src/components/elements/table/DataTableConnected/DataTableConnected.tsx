import * as React from 'react'
import { connect } from 'react-redux'

import { Page, PageParams, PageRequester } from '../../../../store/requester'
import { DataTable, DataTableProps } from '../DataTable/DataTable'

export interface DataTableConnectedProps<T> extends DataTableProps<T> {
    requester: PageRequester<T, any, any>
    initialParams?: PageParams
    loadOnMount?: boolean
    clearOnUnmount?: boolean
    clear(): void
    request(): void
    setParams(params: PageParams): void
}

export class DataTableConnectedCmp<T> extends React.Component<DataTableConnectedProps<T>> {

    static defaultProps: Partial<DataTableConnectedProps<any>> = {
        loadOnMount: true,
        clearOnUnmount: true,
        initialParams: {
            page: 0,
        },
    }

    componentDidMount() {
        this.props.setParams(this.props.initialParams)

        if (this.props.loadOnMount) {
            this.props.request()
        }
    }

    componentWillUnmount() {
        if (this.props.clearOnUnmount) {
            this.props.clear()
        }
    }

    render() {
        const { requester, request, setParams, clear, initialParams, loadOnMount, ...rest } = this.props
        return <DataTable {...rest} />
    }
}

export type ExternalProps = Pick<DataTableConnectedProps<any>, 'requester' | 'loadOnMount'>

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

export const mapStateToProps = (state: any, ownProps: ExternalProps) => ({
    page: ownProps.requester.getResult(state) || emptyPage,
})

export const mapDispatchToProps = (dispatch: any, ownProps: ExternalProps) => ({
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
        dispatch(ownProps.requester.setPageNumber(0))
        dispatch(ownProps.requester.setSort(sort))
        dispatch(ownProps.requester.request())
    },
    onSizeChange(size: number) {
        dispatch(ownProps.requester.setPageNumber(0))
        dispatch(ownProps.requester.setPageSize(size))
        dispatch(ownProps.requester.request())
    },
})

export const DataTableConnected = connect(mapStateToProps, mapDispatchToProps)(DataTableConnectedCmp)
