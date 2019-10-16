import React, { CSSProperties } from 'react'

import { useLocale } from '../../../i18n'
import { ExternalStyles, Theme, useStyles } from '../../../styles'
import { HFlow } from '../../HFlow'
import { Number } from '../../Number'
import { Paginator } from '../../Paginator/Paginator'
import { Text } from '../../Text'

import { TableSizeDropdown } from './TableSizeDropdown'

export interface TableFooterProps {
  page: number
  totalPages: number
  totalElements: number
  abbrev?: boolean
  pageSize: number
  style?: ExternalStyles
  sizeOptions?: number[]
  onPageChange(page: number): void
  onSizeChange(size: number): void
}

export function TableFooter(props: TableFooterProps) {
  const { style, page, totalPages, totalElements, abbrev, pageSize, sizeOptions, onSizeChange, onPageChange } = props
  const { classes, css } = useStyles(createStyles)
  const locale = useLocale()

  const showPagination = () => {
    return totalElements > pageSize || totalElements > Math.min(...sizeOptions)
  }

  return (
    <div className={css(classes.footer, style)}>
      <span className={classes.results}>
        <Number
          value={totalElements}
          suffix={` ${
            totalElements === 0
              ? locale.tableFooter.results.zero
              : totalElements === 1
              ? locale.tableFooter.results.one
              : locale.tableFooter.results.other
          }`}
          abbrev={abbrev}
        />
      </span>
      {showPagination() && (
        <div className={classes.pagination}>
          <HFlow alignItems='center' hSpacing={0.5}>
            <Text>Mostrar:</Text>
            <TableSizeDropdown options={sizeOptions} size={pageSize} onChange={onSizeChange} />
          </HFlow>
          <Paginator page={page} total={totalPages} onChange={onPageChange} />
        </div>
      )}
    </div>
  )
}

TableFooter.defaultProps = {
  sizeOptions: [10, 30, 50, 100],
} as Partial<TableFooterProps>

export const createStyles = (theme: Theme) => ({
  footer: {
    display: 'flex',
    alignItems: 'stretch',
    border: '1px solid ' + theme.pallete.divider,
    height: 40,
  } as CSSProperties,
  results: {
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    paddingRight: '1rem',
    paddingLeft: '1rem',
  } as CSSProperties,
  pagination: {
    borderLeft: '1px solid ' + theme.pallete.divider,
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    padding: '4px 1rem',
  } as CSSProperties,
})
