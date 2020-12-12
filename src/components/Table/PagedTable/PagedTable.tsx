import React from 'react'

import { DataTable, DataTableProps } from '../DataTable/DataTable'
import { TableFooter } from '../TableFooter/TableFooter'

import { TableContainer } from './TableContainer'

export interface PagedTableProps<T> extends DataTableProps<T> {
  /**
   * Current page, 0-indexed.
   */
  page: number

  /**
   * Size of the current page.
   */
  size: number

  /**
   * Total number of pages.
   */
  totalPages: number

  /**
   * Total number of elements.
   */
  totalElements: number

  /**
   * Allows customization of table size options
   */
  sizeOptions?: number[]

  /**
   * Called when the current page is changed.
   * @param page The selected page.
   */
  onPageChange(page: number): void

  /**
   * Called when the current page size is changed.
   * @param size The selected page size.
   */
  onSizeChange(size: number): void
}

export function PagedTable<T>(props: PagedTableProps<T>) {
  const { onPageChange, onSizeChange, page, size, totalPages, totalElements, sizeOptions, ...rest } = props

  return (
    <TableContainer>
      <DataTable {...rest} />
      <TableFooter
        style={{ borderTop: 'none' }}
        page={page}
        pageSize={size}
        totalPages={totalPages}
        totalElements={totalElements}
        sizeOptions={sizeOptions}
        onPageChange={onPageChange}
        onSizeChange={onSizeChange}
      />
    </TableContainer>
  )
}
