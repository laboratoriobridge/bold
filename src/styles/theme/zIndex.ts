export interface ZIndex {
  popper: number
  dropdown: number
  tooltip: number
}

export const zIndex: ZIndex = {
  popper: 1200,
  dropdown: 1300,
  tooltip: 1400,
}

export interface ModalZIndex {
  modalBackdrop: number
  modalContainer: number
}

export const zIndexLevel: Record<number, ModalZIndex> = {
  1: { modalBackdrop: 1050, modalContainer: 1100 },
  2: { modalBackdrop: 1250, modalContainer: 1300 },
  3: { modalBackdrop: 1450, modalContainer: 1500 },
  4: { modalBackdrop: 1650, modalContainer: 1700 },
  5: { modalBackdrop: 1850, modalContainer: 1900 },
}
