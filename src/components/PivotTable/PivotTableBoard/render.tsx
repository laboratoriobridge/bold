import React, { CSSProperties } from 'react'
import { Heading } from '../../Heading'
import { modal } from '../../Modal/auto'
import { Icon } from '../../Icon'
import { PivotTableBoardLabels } from './model'

export const renderClearTableModal = (labels: PivotTableBoardLabels, onConfirm: () => void) => () =>
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
      { label: labels.clearTableConfirm, kind: 'danger', onClick: onConfirm, 'data-testid': 'confirm-clear-table' },
    ],
  })()

const styles = {
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
  } as CSSProperties,
  icon: {
    marginRight: '1rem',
    verticalAlign: 'middle',
  },
}
