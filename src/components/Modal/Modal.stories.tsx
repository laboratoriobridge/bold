import { action } from '@storybook/addon-actions'
import { boolean, select } from '@storybook/addon-knobs'
import React from 'react'
import { Button } from '../Button'
import { HFlow } from '../HFlow'
import { modal } from './auto'
import { ModalMountTarget } from './auto/ModalMountTarget'
import { Modal, ModalSize } from './Modal'
import { ModalBody } from './ModalBody'
import { ModalContainer } from './ModalContainer'
import { ModalFooter } from './ModalFooter'

const sizes: { [key in ModalSize]: ModalSize } = {
  large: 'large',
  small: 'small',
  auto: 'auto',
}

export default {
  title: 'Components/Modal',
}

export const Default = () => (
  <>
    <p>Default</p>

    <Modal open={boolean('open', true)} size={select('size', sizes, 'large')} onClose={action('close')}>
      <ModalBody>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie, dui id luctus commodo, nunc enim
          facilisis odio, vel hendrerit erat neque eu nisl. Donec urna felis, pharetra nec urna a, efficitur lobortis
          urna. Mauris varius purus vehicula lorem mollis, a cursus enim malesuada. Integer at congue enim. Nullam purus
          mauris, fermentum nec mattis in, cursus nec tellus. Nunc sodales orci tortor, at feugiat purus hendrerit a.
          Suspendisse potenti. Nam porta urna vitae nibh pharetra eleifend. Nullam urna eros, auctor vitae maximus non,
          feugiat eget odio. Cras venenatis, lectus eget consectetur volutpat, urna felis efficitur enim, vitae viverra
          purus risus sed purus.
        </p>

        <p>
          Aliquam placerat eget massa vel congue. Suspendisse libero erat, auctor ac tristique et, ultrices quis dolor.
          Suspendisse commodo lacinia lectus ut egestas. Cras in urna eget leo mollis luctus eu eget felis. Mauris vel
          libero vel lectus cursus placerat. Nunc non ligula urna. Aliquam id quam at quam sodales gravida condimentum
          quis eros. am dolor nisl, ullamcorper ac varius nec, vulputate sed metus. Cras lacus ante, dapibus facilisis
          risus at, varius commodo nulla. Nunc volutpat pellentesque mauris et sodales. Suspendisse finibus, dui at
          tristique mollis, felis mauris vulputate leo, sed vehicula lacus nibh ut dolor.
        </p>
      </ModalBody>
      <ModalFooter>
        <HFlow justifyContent='flex-end'>
          <Button onClick={action('cancel clicked')}>Cancel</Button>
          <Button kind='primary' onClick={action('save clicked')}>
            Save
          </Button>
        </HFlow>
      </ModalFooter>
    </Modal>
  </>
)

export const Auto = () => (
  <>
    <Button
      onClick={modal({
        size: 'small',
        render: () => 'Confirm?',
        actions: [
          { label: 'Cancel', onClick: action('Cancel') },
          { label: 'Ok', kind: 'primary', onClick: action('Ok') },
        ],
      })}
    >
      Auto modal
    </Button>
    <ModalMountTarget />
  </>
)

export const Parts = () => (
  <ModalContainer onClose={action('onClose')}>
    <ModalBody>Teste</ModalBody>
    <ModalFooter>
      <HFlow justifyContent='flex-end'>
        <Button>Secondary</Button>
        <Button kind='primary'>Primary</Button>
      </HFlow>
    </ModalFooter>
  </ModalContainer>
)

export const ModalOverlap = () => (
  <>
    <p>ModalOverlap</p>

    <Modal open={true} size={select('main modal size', sizes, 'large')} onClose={action('close')}>
      <ModalBody>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie, dui id luctus commodo, nunc enim
          facilisis odio, vel hendrerit erat neque eu nisl. Donec urna felis, pharetra nec urna a, efficitur lobortis
          urna. Mauris varius purus vehicula lorem mollis, a cursus enim malesuada. Integer at congue enim. Nullam purus
          mauris, fermentum nec mattis in, cursus nec tellus. Nunc sodales orci tortor, at feugiat purus hendrerit a.
          Suspendisse potenti. Nam porta urna vitae nibh pharetra eleifend. Nullam urna eros, auctor vitae maximus non,
          feugiat eget odio. Cras venenatis, lectus eget consectetur volutpat, urna felis efficitur enim, vitae viverra
          purus risus sed purus.
        </p>
      </ModalBody>
      <ModalFooter>
        <HFlow justifyContent='flex-end'>
          <Button onClick={action('cancel clicked')}>Cancel</Button>
          <Button
            kind='primary'
            onClick={modal({
              size: 'small',
              render: () => 'Confirm?',
              depthLevel: 2,
              manageOverflow: false,
              onClose: action('close'),
              actions: [
                { label: 'Cancel', onClick: action('Cancel') },
                { label: 'Ok', kind: 'primary', onClick: action('Ok') },
              ],
            })}
          >
            Open a modal that overlaps
          </Button>
        </HFlow>
      </ModalFooter>
    </Modal>
    <ModalMountTarget />
  </>
)
