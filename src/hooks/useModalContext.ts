import { createContext, Dispatch, MutableRefObject, SetStateAction, useContext } from 'react'
import { ModalScroll } from '../components/Modal'

export interface ModalContextProps {
  scroll: ModalScroll
  bodyRef: MutableRefObject<HTMLDivElement>
  hasHeader: boolean
  setHasHeader: Dispatch<SetStateAction<boolean>>
  onClose?(): void
}

const ModalContext = createContext<ModalContextProps>(undefined)

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
