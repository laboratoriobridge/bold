import { Button, Heading, HFlow, Icon, Modal, ModalBody, ModalFooter } from 'bold-ui'
import React, { useState } from 'react'

function ConfirmationDemo() {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => setIsOpen(true)
  const handleModalClose = () => setIsOpen(false)

  return (
    <>
      <Button kind='primary' onClick={handleButtonClick}>
        Open modal
      </Button>
      <Modal size='small' onClose={handleModalClose} open={isOpen}>
        <ModalBody>
          <HFlow alignItems='center'>
            <Icon icon='infoCircleOutline' style={{ marginRight: '0.5rem' }} size={3} fill='info' />
            <Heading level={1}>Confirmation Modal</Heading>
          </HFlow>
          <br />
          <p>
            Used to validate decisions or to obtain a second confirmation from the user. Usually, require "yes" or "no"
            answers.
          </p>
        </ModalBody>
        <ModalFooter>
          <HFlow justifyContent='flex-end'>
            <Button onClick={handleModalClose}>No</Button>
            <Button kind='primary' onClick={handleModalClose}>
              Yes
            </Button>
          </HFlow>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default ConfirmationDemo
