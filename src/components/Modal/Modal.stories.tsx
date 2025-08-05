import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'
import React from 'react'
import { TextColor } from '../../styles'
import { textColorMap } from '../../styles/theme/createPallete'
import { Button } from '../Button'
import { HFlow } from '../HFlow'
import { Icons } from '../Icon'
import { IconMap } from '../Icon/generated/types'
import { VFlow } from '../VFlow'
import { modal } from './auto'
import { ModalMountTarget } from './auto/ModalMountTarget'
import { Modal, ModalScroll, ModalSize } from './Modal'
import { ModalBody } from './ModalBody'
import { ModalContainer } from './ModalContainer'
import { ModalFooter } from './ModalFooter'
import { HeaderType } from './ModalHeader'

const sizes: { [key in ModalSize]: ModalSize } = {
  large: 'large',
  small: 'small',
  auto: 'auto',
}

const scrolls: { [key in ModalScroll]: ModalScroll } = {
  body: 'body',
  paper: 'paper',
}

const icons: Icons[] = Object.keys(IconMap) as Icons[]
const iconColors: TextColor[] = Object.keys(textColorMap) as TextColor[]

export default {
  title: 'Components/Modal',
}

export const Default = () => {
  const open = boolean('open', true)
  const size = select('size', sizes, 'large')
  const scroll = select('scroll', scrolls, 'paper')
  const title = text('title', 'Modal Title')
  const subtitle = title ? text('subtitle', 'Modal Subtitle') : undefined
  const header: HeaderType = title
    ? {
        icon: {
          name: select('header.icon.name', icons, 'bridge'),
          fill: select('header.icon.fill', iconColors, 'primary'),
        },
      }
    : undefined
  const onClose = action('close')

  return (
    <div>
      <p>Default</p>

      <Modal
        open={open}
        size={size}
        scroll={scroll}
        title={title}
        subtitle={subtitle}
        header={header}
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
          <HFlow justifyContent='flex-end'>
            <Button onClick={action('cancel clicked')}>Cancel</Button>
            <Button kind='primary' onClick={action('save clicked')}>
              Save
            </Button>
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
  </div>
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
  <div>
    <p>ModalOverlap</p>

    <Modal open={boolean('open', true)} size={select('main modal size', sizes, 'large')} onClose={action('close')}>
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
  </div>
)
