import { createContext, MutableRefObject, useContext } from 'react'
import { ModalScroll } from '../components/Modal'

export interface ModalContextProps {
  scroll: ModalScroll
  bodyRef: MutableRefObject<HTMLDivElement>
  onClose?(): void
}

const ModalContext = createContext<ModalContextProps>(undefined)

export const ModalContextProvider = ModalContext.Provider

export function useModalContext() {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('Modal subcomponents (ModalBody, ModalContainer, ModalFooter) must be used inside <Modal>')
  }

  return context
}
