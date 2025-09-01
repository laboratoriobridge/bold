import { createContext, MutableRefObject, useContext } from 'react'
import { ModalScroll } from '../components/Modal'

export interface ModalSectionsState {
  hasHeader: boolean
  hasLeftSidebar: boolean
  hasRightSidebar: boolean
}

export interface ModalContextValue extends ModalSectionsState {
  scroll: ModalScroll
  bodyRef: MutableRefObject<HTMLDivElement>
  setSectionState: (key: keyof ModalSectionsState, isPresent: boolean) => void
  onClose?(): void
}

const ModalContext = createContext<ModalContextValue>(undefined)

export const ModalContextProvider = ModalContext.Provider

export function useModalContext() {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error(
      'Modal subcomponents (ModalHeader, ModalBody, ModalContainer, ModalFooter, ModalCloseButton) must be used inside <Modal>'
    )
  }

  return context
}
