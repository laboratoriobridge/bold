import { Interpolation } from 'emotion'
import React from 'react'

import { SortDirection } from '../SortableLabel/SortableLabel'
import { Table, TableHead, TableHeader, TableHeaderProps, TableProps, TableRow } from '../Table'

import { TableFilledBody } from './TableFilledBody'

export interface TableColumnConfig<T = any> {
  name: string
  header?: React.ReactNode
  sortable?: boolean
  style?: Interpolation
  render(row: T): React.ReactNode
}

export interface DataTableProps<T = any> extends TableProps {
  rows: T[]
  columns: Array<TableColumnConfig<T>>
  loading?: boolean
  sort?: string[]
  onSortChange?(sort: string[]): void
  render?(renderProps: DataTableRenderProps): React.ReactNode
  onRowClick?(row: T): any
}

export interface DataTableRenderProps extends DataTableProps {
  getHeaderProps(column: TableColumnConfig | string): TableHeaderProps
  getColumn(columnName: string): TableColumnConfig
}

export function DataTable<T = any>(props: DataTableProps<T>) {
  const getColumn = (columnName: string): TableColumnConfig => {
    return props.columns.find(col => col.name === columnName)
  }

  const getHeaderProps = (column: TableColumnConfig | string): TableHeaderProps & { key; 'data-name' } => {
    const col = typeof column === 'string' ? getColumn(column) : column

    if (!col) {
      throw new Error(`Column '${column}' not found.`)
    }

    return {
      key: col.name,
      'data-name': col.name,
      sortable: col.sortable,
      sortDirection: getSortDirection(col),
      onSortChange: handleSortChange(col),
    }
  }

  const handleSortChange = (col: TableColumnConfig) => (sortDirection: SortDirection, shiftKey: boolean) => {
    if (shiftKey) {
      props.onSortChange(changeSort(props.sort, col.name, sortDirection))
    } else {
      props.onSortChange([sortDirection === 'ASC' ? col.name : `-${col.name}`])
    }
  }

  const getSortDirection = (col: TableColumnConfig): SortDirection => {
    const sorts = props.sort || []
    const name = col.name
    for (const sort of sorts) {
      if (sort === name) {
        return 'ASC'
      } else if (sort === `-${name}`) {
        return 'DESC'
      }
    }
    return null
  }

  return (
    <>
      {props.render({
        ...props,
        getHeaderProps,
        getColumn,
      })}
    </>
  )
}

DataTable.defaultProps = {
  loading: false,
  sort: null,
  onSortChange: () => null,
  render: (renderProps: DataTableRenderProps) => <DataTableDefault {...renderProps} />,
  onRowClick: null,
  hovered: true,
} as Partial<DataTableProps<any>>

export const DataTableDefault = (props: DataTableRenderProps) => {
  const { columns, rows, loading, onSortChange, sort, getHeaderProps, getColumn, render, onRowClick, ...rest } = props

  return (
    <Table {...rest}>
      <TableHead>
        <TableRow>
          {columns.map(col => (
            <TableHeader {...getHeaderProps(col)}>{col.header}</TableHeader>
          ))}
        </TableRow>
      </TableHead>
      <TableFilledBody rows={rows} columns={columns} loading={loading} onRowClick={onRowClick} />
    </Table>
  )
}

const changeSort = (sort: string[], name: string, dir: SortDirection): string[] => {
  const newSort = dir === 'ASC' ? name : `-${name}`
  let swap = false
  const newArray = sort.map(s => {
    if (s === name || s === `-${name}`) {
      swap = true
      return newSort
    }
    return s
  })
  return swap ? newArray : [...newArray, newSort]
}
