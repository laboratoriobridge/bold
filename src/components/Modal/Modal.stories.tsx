import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'
import React from 'react'
import { TextColor } from '../../styles'
import { textColorMap } from '../../styles/theme/createPallete'
import { Button } from '../Button'
import { Icons } from '../Icon'
import { IconMap } from '../Icon/generated/types'
import { VFlow } from '../VFlow'

import { HFlow } from '../HFlow'
import { Switch } from '../Switch'
import { modal } from './auto'
import { ModalMountTarget } from './auto/ModalMountTarget'
import { Modal, ModalScroll, ModalSize } from './Modal'
import { ModalBody } from './ModalBody'
import { ModalFooter } from './ModalFooter'
import { ModalFooterButton } from './ModalFooterButton'

const sizes: { [key in ModalSize]: ModalSize } = {
  large: 'large',
  small: 'small',
  auto: 'auto',
}

const scrolls: { [key in ModalScroll]: ModalScroll } = {
  body: 'body',
  full: 'full',
}

const icons: Icons[] = Object.keys(IconMap) as Icons[]
const iconColors: TextColor[] = Object.keys(textColorMap) as TextColor[]

export default {
  title: 'Components/Modal',
}

export const Default = () => {
  const open = boolean('open', true)
  const size = select('size', sizes, 'large')
  const scroll = select('scroll', scrolls, 'body')
  const title = text('title', 'Modal Title')
  const subtitle = text('subtitle', 'Modal Subtitle')
  const hasIcon = boolean('hasIcon', true)
  const icon = hasIcon ? select('icon', icons, 'bridge') : undefined
  const iconFill = hasIcon ? select('iconFill', iconColors, 'normal') : undefined
  const hasCloseIcon = boolean('hasCloseIcon', true)
  const manageOverflow = boolean('manageOverflow', true)
  const closeOnBackdropClick = boolean('closeOnBackdropClick', true)
  const onClose = action('close')

  return (
    <div>
      <p>Default</p>

      <Modal
        open={open}
        size={size}
        scroll={scroll}
        hasCloseIcon={hasCloseIcon}
        title={title}
        subtitle={subtitle}
        icon={icon}
        iconFill={iconFill}
        manageOverflow={manageOverflow}
        closeOnBackdropClick={closeOnBackdropClick}
        onClose={onClose}
      >
        <ModalBody>
          <VFlow>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie, dui id luctus commodo, nunc
              enim facilisis odio, vel hendrerit erat neque eu nisl. Donec urna felis, pharetra nec urna a, efficitur
              lobortis urna. Mauris varius purus vehicula lorem mollis, a cursus enim malesuada. Integer at congue enim.
              Nullam purus mauris, fermentum nec mattis in, cursus nec tellus. Nunc sodales orci tortor, at feugiat
              purus hendrerit a. Suspendisse potenti. Nam porta urna vitae nibh pharetra eleifend. Nullam urna eros,
              auctor vitae maximus non, feugiat eget odio. Cras venenatis, lectus eget consectetur volutpat, urna felis
              efficitur enim, vitae viverra purus risus sed purus.
            </p>

            <p>
              Aliquam placerat eget massa vel congue. Suspendisse libero erat, auctor ac tristique et, ultrices quis
              dolor. Suspendisse commodo lacinia lectus ut egestas. Cras in urna eget leo mollis luctus eu eget felis.
              Mauris vel libero vel lectus cursus placerat. Nunc non ligula urna. Aliquam id quam at quam sodales
              gravida condimentum quis eros. am dolor nisl, ullamcorper ac varius nec, vulputate sed metus. Cras lacus
              ante, dapibus facilisis risus at, varius commodo nulla. Nunc volutpat pellentesque mauris et sodales.
              Suspendisse finibus, dui at tristique mollis, felis mauris vulputate leo, sed vehicula lacus nibh ut
              dolor.
            </p>
            <p>
              Aliquam placerat eget massa vel congue. Suspendisse libero erat, auctor ac tristique et, ultrices quis
              dolor. Suspendisse commodo lacinia lectus ut egestas. Cras in urna eget leo mollis luctus eu eget felis.
              Mauris vel libero vel lectus cursus placerat. Nunc non ligula urna. Aliquam id quam at quam sodales
              gravida condimentum quis eros. am dolor nisl, ullamcorper ac varius nec, vulputate sed metus. Cras lacus
              ante, dapibus facilisis risus at, varius commodo nulla. Nunc volutpat pellentesque mauris et sodales.
              Suspendisse finibus, dui at tristique mollis, felis mauris vulputate leo, sed vehicula lacus nibh ut
              dolor.
            </p>
            <p>
              Aliquam placerat eget massa vel congue. Suspendisse libero erat, auctor ac tristique et, ultrices quis
              dolor. Suspendisse commodo lacinia lectus ut egestas. Cras in urna eget leo mollis luctus eu eget felis.
              Mauris vel libero vel lectus cursus placerat. Nunc non ligula urna. Aliquam id quam at quam sodales
              gravida condimentum quis eros. am dolor nisl, ullamcorper ac varius nec, vulputate sed metus. Cras lacus
              ante, dapibus facilisis risus at, varius commodo nulla. Nunc volutpat pellentesque mauris et sodales.
              Suspendisse finibus, dui at tristique mollis, felis mauris vulputate leo, sed vehicula lacus nibh ut
              dolor.
            </p>
            <p>
              Aliquam placerat eget massa vel congue. Suspendisse libero erat, auctor ac tristique et, ultrices quis
              dolor. Suspendisse commodo lacinia lectus ut egestas. Cras in urna eget leo mollis luctus eu eget felis.
              Mauris vel libero vel lectus cursus placerat. Nunc non ligula urna. Aliquam id quam at quam sodales
              gravida condimentum quis eros. am dolor nisl, ullamcorper ac varius nec, vulputate sed metus. Cras lacus
              ante, dapibus facilisis risus at, varius commodo nulla. Nunc volutpat pellentesque mauris et sodales.
              Suspendisse finibus, dui at tristique mollis, felis mauris vulputate leo, sed vehicula lacus nibh ut
              dolor.
            </p>
            <p>
              Aliquam placerat eget massa vel congue. Suspendisse libero erat, auctor ac tristique et, ultrices quis
              dolor. Suspendisse commodo lacinia lectus ut egestas. Cras in urna eget leo mollis luctus eu eget felis.
              Mauris vel libero vel lectus cursus placerat. Nunc non ligula urna. Aliquam id quam at quam sodales
              gravida condimentum quis eros. am dolor nisl, ullamcorper ac varius nec, vulputate sed metus. Cras lacus
              ante, dapibus facilisis risus at, varius commodo nulla. Nunc volutpat pellentesque mauris et sodales.
              Suspendisse finibus, dui at tristique mollis, felis mauris vulputate leo, sed vehicula lacus nibh ut
              dolor.
            </p>
            <p>
              Aliquam placerat eget massa vel congue. Suspendisse libero erat, auctor ac tristique et, ultrices quis
              dolor. Suspendisse commodo lacinia lectus ut egestas. Cras in urna eget leo mollis luctus eu eget felis.
              Mauris vel libero vel lectus cursus placerat. Nunc non ligula urna. Aliquam id quam at quam sodales
              gravida condimentum quis eros. am dolor nisl, ullamcorper ac varius nec, vulputate sed metus. Cras lacus
              ante, dapibus facilisis risus at, varius commodo nulla. Nunc volutpat pellentesque mauris et sodales.
              Suspendisse finibus, dui at tristique mollis, felis mauris vulputate leo, sed vehicula lacus nibh ut
              dolor.
            </p>
          </VFlow>
        </ModalBody>
        <ModalFooter>
          <HFlow alignItems='center' justifyContent='flex-end'>
            <ModalFooterButton onClick={action('cancel clicked')}>Cancel</ModalFooterButton>
            <ModalFooterButton kind='primary' onClick={action('save clicked')}>
              Save
            </ModalFooterButton>
          </HFlow>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export const Auto = () => (
  <div>
    <Button
      onClick={modal({
        title: 'Confirm',
        size: 'small',
        render: () => 'Are you sure?',
        actions: [
          { label: 'Cancel', onClick: action('Cancel') },
          { label: 'Ok', kind: 'primary', onClick: action('Ok') },
        ],
      })}
    >
      Auto modal
    </Button>
    <ModalMountTarget />
  </div>
)

export const ModalOverlap = () => (
  <div>
    <p>Modal Overlap</p>

    <Modal
      title='Modal Overlap'
      open={boolean('open', true)}
      size={select('main modal size', sizes, 'large')}
      onClose={action('close')}
    >
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
          <ModalFooterButton onClick={action('cancel clicked')}>Cancel</ModalFooterButton>
          <ModalFooterButton
            kind='primary'
            onClick={modal({
              title: 'Confirm?',
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
          </ModalFooterButton>
        </HFlow>
      </ModalFooter>
    </Modal>
    <ModalMountTarget />
  </div>
)
