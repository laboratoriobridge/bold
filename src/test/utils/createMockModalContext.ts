import { ModalContextValue } from '../../hooks'

export function createMockModalContext(overrides: Partial<ModalContextValue> = {}): ModalContextValue {
  return {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: false,
    hasLeftSidebar: false,
    hasRightSidebar: false,
    setSectionState: () => {},
    ...overrides,
  }
}
