import { Button, Heading, HFlow, Icon, Modal, ModalBody } from 'bold-ui'
import React, { useState } from 'react'

function InformationDemo() {
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
            <div>
              <Heading level={1}>Information Modal</Heading>
              <Heading level={5}>Subtitle</Heading>
            </div>
          </HFlow>
          <br />
          <p>
            Used to display information that does not require user input. They usually display only text that does not
            need to be displayed directly on the screen.
          </p>
        </ModalBody>
      </Modal>
    </>
  )
}

export default InformationDemo
