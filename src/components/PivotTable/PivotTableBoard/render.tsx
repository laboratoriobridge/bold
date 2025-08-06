import { modal } from '../../Modal/auto'
import { PivotTableBoardLabels } from './model'

export const renderClearTableModal = (labels: PivotTableBoardLabels, onConfirm: () => void) => () =>
  modal({
    size: 'small',
    title: labels.clearTableTitle,
    icon: 'exclamationTriangleOutline',
    iconFill: 'danger',
    render: () => null,
    actions: {
      primarySlot: {
        label: labels.clearTableConfirm,
        kind: 'danger',
        onClick: onConfirm,
        'data-testid': 'confirm-clear-table',
      },
      secondarySlot: {
        label: labels.clearTableCancel,
      },
    },
  })()
