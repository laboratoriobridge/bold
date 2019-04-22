import { useState } from 'react'

import { Button, Heading, HFlow, Icon, Modal, ModalBody, ModalFooter, Text } from '../../../../lib'

function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => setIsOpen(true)
  const handleModalClose = () => setIsOpen(false)

  return (
    <>
      <Button kind='danger' onClick={handleButtonClick}>
        Open modal
      </Button>

      <Modal size='small' onClose={handleModalClose} open={isOpen}>
        <ModalBody>
          <HFlow>
            <Icon icon='exclamationTriangleOutline' style={{ marginRight: '0.5rem' }} size={3} fill='danger' />
            <Heading level={3}>Danger action</Heading>
          </HFlow>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie, dui id luctus commodo, nunc enim
            facilisis odio, vel hendrerit erat neque eu nisl. Donec urna felis, pharetra nec urna a, efficitur lobortis
            urna. Mauris varius purus vehicula lorem mollis, a cursus enim malesuada. Integer at congue enim.
          </p>
        </ModalBody>
        <ModalFooter>
          <HFlow justifyContent='flex-end'>
            <Button onClick={console.log}>Cancel</Button>
            <Button kind='danger' onClick={console.log}>
              <Icon icon='trashOutline' style={{ marginRight: '0.5rem' }} />
              <Text>Launch</Text>
            </Button>
          </HFlow>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default ModalDemo
