import * as React from 'react'
import { connect } from 'react-redux'

import { Page, PageParams, PageRequester } from '../../../../store/requester'
import { DataTable, DataTableProps } from '../DataTable/DataTable'

export interface DataTableConnectedProps<T> extends DataTableProps<T> {
    requester: PageRequester<any, any, any>
    initialParams?: PageParams
    loadOnMount?: boolean
    load(params: PageParams): void
}

class DataTableConnectedCmp<T> extends React.Component<DataTableConnectedProps<T>> {

    static defaultProps: Partial<DataTableConnectedProps<any>> = {
        loadOnMount: true,
        initialParams: {
            page: 0,
        },
    }

    componentDidMount() {
        if (this.props.loadOnMount) {
            this.props.load(this.props.initialParams)
        }
    }

    render() {
        const { requester, load, initialParams, loadOnMount, ...rest } = this.props
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
    load(params: PageParams) {
        dispatch(ownProps.requester.setParams(params))
        dispatch(ownProps.requester.request())
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
