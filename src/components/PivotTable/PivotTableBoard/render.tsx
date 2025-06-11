import React, { CSSProperties } from 'react'
import { css } from '@emotion/core'
import { Heading } from '../../Heading'
import { modal } from '../../Modal/auto'
import { Icon } from '../../Icon'
import { PivotTableBoardLabels } from './model'

export const renderClearTableModal = (labels: PivotTableBoardLabels, onTableReset: () => void) => () =>
  modal({
    size: 'small',
    render: () => (
      <Heading level={3}>
        <div style={styles.titleWrapper}>
          <Icon icon='exclamationTriangleOutline' fill='danger' size={3} style={styles.icon} />
          {labels.clearTableTitle}
        </div>
      </Heading>
    ),
    actions: [
      { label: labels.clearTableCancel },
      { label: labels.clearTableConfirm, kind: 'danger', onClick: onTableReset, 'data-testid': 'confirm-clear-table' },
    ],
  })()

const styles = {
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
  } as CSSProperties,
  icon: css({
    marginRight: '1rem',
    verticalAlign: 'middle',
  }),
}
