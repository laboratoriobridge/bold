import { Button, Heading, HFlow, Icon, Modal, ModalBody, ModalFooter, Text } from 'bold-ui'
import React, { useState } from 'react'

function DangerDemo() {
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
            <Icon icon='exclamationTriangleOutline' style={{ marginRight: '0.5rem' }} size={3} fill='danger' />
            <div>
              <Heading level={1}>Danger action</Heading>
              <Heading level={5}>Subtitle</Heading>
            </div>
          </HFlow>
          <br />
          <p>
            Used to validate actions that have a critical effect on the system and that can't be undone, such as
            "deleting all items". Use labels that reflect the action that will occur. Avoid using labels like "OK" and
            "Cancel".
          </p>
        </ModalBody>
        <ModalFooter>
          <HFlow justifyContent='flex-end'>
            <Button onClick={handleModalClose}>Discard</Button>
            <Button kind='danger' onClick={handleModalClose}>
              <Icon icon='trashOutline' style={{ marginRight: '0.5rem' }} />
              <Text color='inherit'>Delete all</Text>
            </Button>
          </HFlow>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default DangerDemo
