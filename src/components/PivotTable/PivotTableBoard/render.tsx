import { modal } from '../../Modal/auto'
import { PivotTableBoardLabels } from './model'

export const renderClearTableModal = (labels: PivotTableBoardLabels, onConfirm: () => void) => () =>
  modal({
    size: 'small',
    title: labels.clearTableTitle,
    icon: { name: 'exclamationTriangleOutline', fill: 'danger' },
    render: () => null,
    actions: [
      { label: labels.clearTableCancel },
      { label: labels.clearTableConfirm, kind: 'danger', onClick: onConfirm, 'data-testid': 'confirm-clear-table' },
    ],
  })()
